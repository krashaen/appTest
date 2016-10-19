const root = 'http://jsonplaceholder.typicode.com';
const model = {
    usersClickCounter: 0,
    commentsList: null,
    postsList: null,
    usersList: null,
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

const view = {
    // remove dependency on view from modules,
    // create handlers for needed events on top level and pass it inside functions
    onUserClick(user) {
        model.usersClickCounter += 1;
        this.showPosts(user.posts);
    },

    showUsers(users) {
        showUserList(users, this.onUserClick);
    },

    /* eslint-disable */
    showPosts: showPostList,
    showComment: showCommentList,
    closeComment: closeCommentList,
    /* eslint-enable */
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
