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

    loadEntities(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function() {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            }
            else {
                reject(Error(req.statusText));
            }
            };
            req.onerror = function() {
            reject(Error("Сетевая ошибка"));
            };
            req.send();
        });
        },

    loadData() {
        return this.loadEntities(root + 'users')
            .then((data) => {
                this.usersList = data;
                return this.loadEntities(root + 'posts');
            }).then((data) => {
                this.postsList = data;
                return this.loadEntities(root + 'comments');
            }).then((data) => {
                this.commentsList = data;
                this.normalize();
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

model.loadData().then(() => view.showUsers(model.usersList));
