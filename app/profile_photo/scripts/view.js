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

                    commentBtn = document.createElement('input');
                    commentBtn.type = 'button';
                    commentBtn.className = 'send';
                    commentBtn.value = 'Комментарии';
                    post.appendChild(commentBtn);
                    commentBtn.onclick = view.showComents.bind(null, posts[i].id);

                }
        }
    },

    showComents: function(id) {
        var postBlock = null;
        var comment = null;
        var postBlockId = null;
        var commentTitle = null;
        var commentBody = null;
        var commentUserEmail = null;
        var commentBtn = null;

        commentBtn = document.getElementsByClassName('send');
        postBlock = document.getElementsByClassName('post');
        for (var j = 0; j < comments.length; j++) {
            if (comments[j].postId === id) {
            // create coment block
                for (var i = 0; i < postBlock.length; i++) {
                    postBlockId = parseInt(postBlock[i].getAttribute('id'));
                    if (postBlockId === id) {
                        comment = document.createElement('div');
                        comment.className = 'post-comments';
                        comment.setAttribute('id', id)
                        postBlock[i].insertBefore(comment, postBlock[i].children[3]);

                        commentTitle = document.createElement('h2');
                        commentTitle.className = 'comment-name';
                        commentTitle.textContent = comments[j].name;
                        comment.appendChild(commentTitle);

                        commentBody = document.createElement('p');
                        commentBody.className = 'comment-content';
                        commentBody.textContent = comments[j].body;
                        comment.appendChild(commentBody);

                        commentUserEmail = document.createElement('div');
                        commentUserEmail.className = 'user-email';
                        commentUserEmail.textContent = comments[j].email;
                        comment.appendChild(commentUserEmail);

                        commentBtn[i].value = 'Закрыть';
                        commentBtn[i].onclick = view.closeComments.bind(null,id);
                    }
                }
            }
        }

},

    closeComments: function(id) {
        var allCommens = null;
        var postBlockId = null;
        var postBlockId = null;
        var commentBtn = null;
        var deleteComment = null;

        
        commentBtn = document.getElementsByClassName('send');
        postBlock = document.getElementsByClassName('post');
        allCommens = document.getElementsByClassName('post-comments');
        deleteComment = document.querySelectorAll('.post .post-comments');
        for (var i = 0; i < postBlock.length; i++) {
            postBlockId = parseInt(postBlock[i].getAttribute('id'));
            if (postBlockId === id) {
                commentBtn[i].onclick = view.showComents.bind(null,id);
                commentBtn[i].value = 'Комментарии';
                deleteComment = postBlock[i].querySelectorAll('.post-comments');
                for (var j = 0; j < deleteComment.length; j++) {
                    postBlock[i].removeChild(postBlock[i].children[3]);
                }
            }
        }

    }

};

