const root = 'http://jsonplaceholder.typicode.com';
const view = {
    showUser: showUserList,
    showPosts: showPostList,
    showComment: showCommentList,
    closeComment: closeCommentList,
};


const model = {
    userList: null,
    normalize() {
        for (const post of this.postList) {
            post.comments = [];
            for (const comment of this.commentList) {
                if (post.id === comment.postId) post.comments.push(comment);
            }
        }

        for (const user of this.userList) {
            user.posts = [];
            for (const post of this.postList) {
                if (user.id === post.userId) {
                    user.posts.push(post);
                }
            }
        }
    },
};

function load(type) {
    return $.ajax({
        url: `${root}/${type}`,
        method: 'GET',
    });
}

load('users')
    .then((data) => {
        model.userList = data;
        return load('posts');
    }).then((data) => {
        model.postList = data;
        return load('comments');
    }).then((data) => {
        model.commentList = data;
        model.normalize();
        view.showUser(model.userList);
    });
