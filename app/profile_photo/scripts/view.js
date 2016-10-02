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
            userid1 = parseInt(this.getAttribute('id'));
            for(var i = 0; i < posts.length; i++) {
                if(posts[i].userId === userid1) console.log(posts[i]);
        }
    },
};