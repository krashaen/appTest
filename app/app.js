const model = {
    userList: null,
    normalize() {
        for (const user of this.userList) {
            for (const post of this.postsList) {
                if (user.id === post.userId) this.userList.posts = this.userList.posts.push(post);
            }
        }
    },
};

const root = 'http://jsonplaceholder.typicode.com';
const view = {};

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
        model.postsList = data;
        return load('comments');
    }).then((data) => {
        model.commentsList = data;
        model.normalize();
    });
