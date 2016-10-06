view.closeComments = function(id) {
    var allCommens = null;
    var postBlockId = null;
    var postBlockId = null;
    var commentBtn = null;
    var deleteComment = null;

    
    commentBtn = document.getElementsByClassName('posts-list__send');
    postBlock = document.getElementsByClassName('posts-list__post');
    allCommens = document.getElementsByClassName('post-comments');
    deleteComment = document.querySelectorAll('.posts-list__post .post-comments');
    for (var i = 0; i < postBlock.length; i++) {
        postBlockId = parseInt(postBlock[i].getAttribute('id'));
        if (postBlockId === id) {
            commentBtn[i].onclick = view.showComents.bind(null,id);
            commentBtn[i].textContent = 'Комментарии';
            deleteComment = postBlock[i].querySelectorAll('.post-comments');
            deleteComment.forEach(function(entry) {
                postBlock[i].removeChild(postBlock[i].children[3]);
            });
        }
    }

};