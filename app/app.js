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

$.ajax({
    async: false,
    url: `${root  }/users`,
    method: 'GET',
}).then((data) => {
    model.userList = data;
    model.normalize();
});

$.ajax({
    async: false,
    url: `${root  }/posts`,
    method: 'GET',
}).then((data) => {
    model.postsList = data;
});

$.ajax({
    async: false,
    url: `${root  }/comments`,
    method: 'GET',
}).then((data) => {
    model.commentList = data;
});
