var usersList ={};
var posts = {};
var comments = {};
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/users',
  method: 'GET'
}).then(function(data) {
    usersList = data;
    view.showUsers();
});

$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
    posts = data;
});

$.ajax({
  url: root + '/comments',
  method: 'GET'
}).then(function(data) {
    comments = data;
});

var view = {
    userId: null,
    flag:null,

    showUsers: function() {
        var userPhoto = null;
        var userInfo = null;
        var userName = null;
        var userWrapper = null;
        var userId = null;

        userInfo = document.getElementsByClassName('user-info');
        for(var i = 0; i < usersList.length; i++) {
            userId = usersList[i].id;

            userWrapper = document.createElement('div');
            userWrapper.className = 'user-wrapper';
            userInfo[0].appendChild(userWrapper);
            userWrapper.onclick = view.showPost;
            userWrapper.setAttribute('id', usersList[i].id);

            userPhoto = document.createElement('div');
            userPhoto.className = 'profile-photo__image';
            userWrapper.appendChild(userPhoto);

            userName = document.createElement('div');
            userName.className = 'profile-photo__user-name';
            userWrapper.appendChild(userName);
            userName.textContent = usersList[i].name;
        }
    },

        showPost: function(){
            var userid1 = null;
            var postBloks = null;
            var post = null;
            var postTitle = null;
            var postDescr = null;
            var commentBtn = null;
            var comments = null;
            var postLine = null;
            var parentBlok = null;
            var t = null;

            userid1 = parseInt(this.getAttribute('id'));
            parentBlok = document.getElementsByClassName('profile-photo');
            postBloks = document.getElementsByClassName('posts');
            postBloks[0].remove();

            postBloks[0] = document.createElement('div');
            postBloks[0].className = 'posts posts-line';
            parentBlok[0].appendChild(postBloks[0]);
            for(var i = 0; i < posts.length; i++) {
                if(posts[i].userId === userid1) {
                    post = document.createElement('div');
                    post.className = 'post';
                    postBloks[0].appendChild(post);
                    post.setAttribute('id', posts[i].id);

                    postTitle = document.createElement('h2');
                    postTitle.className = 'post-title';
                    post.appendChild(postTitle);
                    postTitle.textContent = posts[i].title;
                    
                    postLine = document.createElement('hr');
                    post.appendChild(postLine);

                    postDescr = document.createElement('p');
                    postDescr.className = 'description';
                    post.appendChild(postDescr);
                    postDescr.textContent = posts[i].body;

                    comments = document.createElement('div');
                    comments.className = 'post-comments';
                    post.appendChild(comments);
                    comments.setAttribute('id', posts[i].id);

                    commentBtn = document.createElement('input');
                    commentBtn.type = 'button';
                    commentBtn.className = 'send';
                    commentBtn.value = 'Комментарии';
                    post.appendChild(commentBtn);
                    commentBtn.onclick = view.showComents.bind(null, posts[i].id);
                    //commentBtn.setAttribute('postId', posts[i].id);

                }
        }
    },

    showComents: function(id) {
        var commentBlock = null;

        commentBlock = document.getElementsByClassName('post-comments');
        for (var i = 0; i < comments.length; i++) {
            if (comments[i].postId === id) commentBlock[id-1].textContent += comments[i].body + '\n' + '|||';
        }
    },

    closeComments: function() {
        alert('hi');
    }


};

