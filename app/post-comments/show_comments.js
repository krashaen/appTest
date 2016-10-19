function createCommentBlock(id) {
    const comment = document.createElement('div');
    comment.className = 'post-comments';
    comment.setAttribute('id', id);
    return comment;
}

function createCommentTitle(comment) {
    const commentTitle = document.createElement('h2');
    commentTitle.className = 'post-comments__comment-name';
    commentTitle.textContent = comment.name;
    return commentTitle;
}

function createCommentBody(comment) {
    const commentBody = document.createElement('p');
    commentBody.className = 'post-comments__comment-content';
    commentBody.textContent = comment;
    return commentBody;
}

function createUserEmail() {
    const commentUserEmail = document.createElement('div');
    commentUserEmail.className = 'post-comments__user-email';
    return commentUserEmail;
}

function createUserAddress(email) {
    const userEmail = document.createElement('address');
    userEmail.textContent = email;
    return userEmail;
}

function showCommentList(id, comments, onCommentBtnClick) {
    const commentBtn = document.getElementsByClassName('posts-list__send');
    const postBlock = document.getElementsByClassName('posts-list__post');
    comments.forEach((entry) => {
        // create coment block
        for (let i = 0; i < postBlock.length; i += 1) {
            const postBlockId = parseInt(postBlock[i].getAttribute('id'), 10);
            if (postBlockId === id) {
                const comment = createCommentBlock(id);
                postBlock[i].insertBefore(comment, postBlock[i].children[3]);

                const commentTitle = createCommentTitle(entry.name);
                comment.appendChild(commentTitle);

                const commentBody = createCommentBody(entry.body);
                comment.appendChild(commentBody);

                const commentUserEmail = createUserEmail();
                comment.appendChild(commentUserEmail);

                const userEmail = createUserAddress(entry.email);
                commentUserEmail.appendChild(userEmail);

                commentBtn[i].textContent = 'Закрыть';
                commentBtn[i].setAttribute('href', `#${id}`);
                commentBtn[i].onclick = () => onCommentBtnClick(id, comments);
            }
        }
    });
}
