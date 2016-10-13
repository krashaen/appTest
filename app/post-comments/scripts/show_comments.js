view.showComents = function(id) {

    const commentBtn = document.getElementsByClassName('posts-list__send');
    const postBlock = document.getElementsByClassName('posts-list__post');
    comments.forEach(function(entry) {
        if (entry.postId === id) {
        // create coment block
            for (let i = 0; i < postBlock.length; i++) {
                const postBlockId = parseInt(postBlock[i].getAttribute('id'));
                if (postBlockId === id) {
                    const comment = document.createElement('div');
                    comment.className = 'post-comments';
                    comment.setAttribute('id', id)
                    postBlock[i].insertBefore(comment, postBlock[i].children[3]);

                    const commentTitle = document.createElement('h2');
                    commentTitle.className = 'post-comments__comment-name';
                    commentTitle.textContent = entry.name;
                    comment.appendChild(commentTitle);

                    const commentBody = document.createElement('p');
                    commentBody.className = 'post-comments__comment-content';
                    commentBody.textContent = entry.body;
                    comment.appendChild(commentBody);

                    const commentUserEmail = document.createElement('div');
                    commentUserEmail.className = 'post-comments__user-email';
                    comment.appendChild(commentUserEmail);
                    const UserEmail = document.createElement('address');
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