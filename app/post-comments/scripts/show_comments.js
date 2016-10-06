view.showComents = function(id) {
    var postBlock = null;
    var comment = null;
    var postBlockId = null;
    var commentTitle = null;
    var commentBody = null;
    var commentUserEmail = null;
    var commentBtn = null;

    commentBtn = document.getElementsByClassName('posts-list__send');
    postBlock = document.getElementsByClassName('posts-list__post');
    comments.forEach(function(entry) {
        if (entry.postId === id) {
        // create coment block
            for (var i = 0; i < postBlock.length; i++) {
                postBlockId = parseInt(postBlock[i].getAttribute('id'));
                if (postBlockId === id) {
                    comment = document.createElement('div');
                    comment.className = 'post-comments';
                    comment.setAttribute('id', id)
                    postBlock[i].insertBefore(comment, postBlock[i].children[3]);

                    commentTitle = document.createElement('h2');
                    commentTitle.className = 'post-comments__comment-name';
                    commentTitle.textContent = entry.name;
                    comment.appendChild(commentTitle);

                    commentBody = document.createElement('p');
                    commentBody.className = 'post-comments__comment-content';
                    commentBody.textContent = entry.body;
                    comment.appendChild(commentBody);

                    commentUserEmail = document.createElement('div');
                    commentUserEmail.className = 'post-comments__user-email';
                    comment.appendChild(commentUserEmail);
                    UserEmail = document.createElement('address');
                    UserEmail.textContent = entry.email;
                    commentUserEmail.appendChild(UserEmail);



                    commentBtn[i].textContent = 'Закрыть';
                    commentBtn[i].setAttribute('href','#' + id );
                    commentBtn[i].onclick = view.closeComments.bind(null,id);
                }
            }
        }
    })

};