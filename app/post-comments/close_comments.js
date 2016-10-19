function closeCommentList(id, comments, onCommentBtnClick) {
    const flag = 1;
    const commentBtn = document.getElementsByClassName('posts-list__send');
    const postBlock = document.getElementsByClassName('posts-list__post');
    let deleteComment = document.querySelectorAll('.posts-list__post .post-comments');
    for (let i = 0; i < postBlock.length; i += 1) {
        const postBlockId = parseInt(postBlock[i].getAttribute('id'), 10);
        if (postBlockId === id) {
            commentBtn[i].onclick = () => onCommentBtnClick(id, comments, flag);
            commentBtn[i].textContent = 'Комментарии';
            deleteComment = postBlock[i].querySelectorAll('.post-comments');
            Array.prototype.slice.call(deleteComment).forEach(() => {
                postBlock[i].removeChild(postBlock[i].children[3]);
            });
        }
    }
}

