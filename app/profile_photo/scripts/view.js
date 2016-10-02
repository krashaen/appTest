
var usersList ={};
var posts = {};
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/users',
  method: 'GET'
}).then(function(data) {
    usersList = data;
});

$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
    posts = data;
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

    showtest: function() {
        
        view.showPost(userId);
    },

        showPost: function(){
            var userid1 = null;
            var postBloks = null;
            var post = null;
            var postTitle = null;
            var postDescr = null;
            var commentBtn = null;
            var postLine = null;
            var parentBlok = null;

            //parentBlok = document.getElementsByClassName('profile-photo');
            userid1 = parseInt(this.getAttribute('id'));
            postBloks = document.getElementsByClassName('posts');
            //parentBlok[0].removeChild(postBloks);

            //postBloks = document.createElement('div');
            //postBloks.className = 'profile-photo';
            //parentBlok[0].appendChild(postBloks);

            for(var i = 0; i < posts.length; i++) {
                if(posts[i].userId === userid1) {
                    post = document.createElement('div');
                    post.className = 'post';
                    postBloks[0].appendChild(post);

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

                    commentBtn = document.createElement('input');
                    commentBtn.type = 'submit';
                    commentBtn.className = 'send';
                    commentBtn.value = 'Комментарии';
                    post.appendChild(commentBtn);

                }
        }
    },


};