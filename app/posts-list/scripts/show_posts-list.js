view.showPost = function(){
    var userid = null;
    var postBloks = null;
    var post = null;
    var postTitle = null;
    var postDescr = null;
    var commentBtn = null;
    var comments = null;
    var postLine = null;
    var parentBlok = null;

    userid = parseInt(this.getAttribute('id'));
    parentBlok = document.getElementsByClassName('blog');
    postBloks = document.getElementsByClassName('posts-list');
    postBloks[0].remove();

    postBloks = document.createElement('div');
    postBloks.className = 'posts-list blog__border';
    parentBlok[0].appendChild(postBloks);
    posts.forEach(function(entry) {
        if(entry.userId === userid) {
            post = document.createElement('div');
            post.className = 'posts-list__post';
            postBloks.appendChild(post);
            post.setAttribute('name', entry.id)
            post.setAttribute('id', entry.id);

            postTitle = document.createElement('h2');
            postTitle.className = 'posts-list__post-title';
            post.appendChild(postTitle);
            postTitle.textContent = entry.title;

            postLine = document.createElement('hr');
            post.appendChild(postLine);

            postDescr = document.createElement('p');
            postDescr.className = 'posts-list__post-description';
            post.appendChild(postDescr);
            postDescr.textContent = entry.body;

            commentBtn = document.createElement('a');
            commentBtn.className = 'posts-list__send';
            commentBtn.textContent = 'Комментарии';
            post.appendChild(commentBtn);
            commentBtn.onclick = view.showComents.bind(null, entry.id);

        }
    })
};