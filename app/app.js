const root = 'http://jsonplaceholder.typicode.com/';
const model = {
    usersClickCounter: 0,
    commentsList: null,
    postsList: null,
    usersList: null,

    // loadEntities(type) {
    //     return $.ajax({
    //         url: `${root}/${type}`,
    //         method: 'GET',
    //     });
    // },

    loadData(url) {
        // Возвращает новый промис
        return new Promise(function(resolve, reject) {
            // Стандартный XHR запрос
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
            // Этот метод вызовется, даже в случае 404 ошибки
            // так что проверяем код ответа
            if (req.status == 200) {
                // выполняем «resolve» промиса с полученным текстом
                resolve(JSON.parse(req.response));
            }
            else {
                // иначе вызываем «reject» с текстом статуса
                // который, возможно, даст представление об ошибке
                reject(Error(req.statusText));
            }
            };

            // Обрабатываем ошибки сети
            req.onerror = function() {
            reject(Error("Сетевая ошибка"));
            };

            // Выполняем запрос
            req.send();
        });
        },

    normalize() {
        for (const post of this.postsList) {
            post.comments = [];
            for (const comment of this.commentsList) {
                if (post.id === comment.postId) post.comments.push(comment);
            }
        }

        for (const user of this.usersList) {
            user.posts = [];
            for (const post of this.postsList) {
                if (user.id === post.userId) {
                    user.posts.push(post);
                }
            }
        }
    },
};

const view = {
    onUserClick(user) {
        this.showPosts(user.posts);
    },

    onCommentBtnClick(id, comments, flag) {
        if (flag) this.showComment(id, comments);
        else this.closeComment(id, comments);
    },

    showUsers(users) {
        showUserList(users, this.onUserClick.bind(this));
    },

    showPosts(posts) {
        showPostList(posts, this.onCommentBtnClick.bind(this));
    },

    showComment(id, comments) {
        showCommentList(id, comments, this.onCommentBtnClick.bind(this));
    },
    closeComment(id, comments) {
        closeCommentList(id, comments, this.onCommentBtnClick.bind(this));
    },
};

model.loadData(root + 'users').then(function(response) {
  view.showUsers(response);
}, function(error) {
  console.error("Не удалось выполнить!", error);
});
//model.loadData.then(view.showUsers(model.usersList))
    //  .then(() => view.showUsers(model.usersList));
