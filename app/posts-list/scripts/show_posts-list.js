function showPostList(posts) {

    const parentBlok = document.getElementsByClassName('blog');
    let postBloks = document.getElementsByClassName('posts-list');
    postBloks[0].remove();

    postBloks = document.createElement('div');
    postBloks.className = 'posts-list blog__border';
    parentBlok[0].appendChild(postBloks);
    posts.forEach((entry) => {
        const post = document.createElement('div');
        post.className = 'posts-list__post';
        postBloks.appendChild(post);
        post.setAttribute('name', entry.id);
        post.setAttribute('id', entry.id);

        const postTitle = document.createElement('h2');
        postTitle.className = 'posts-list__post-title';
        post.appendChild(postTitle);
        postTitle.textContent = entry.title;

        const postLine = document.createElement('hr');
        post.appendChild(postLine);

        const postDescr = document.createElement('p');
        postDescr.className = 'posts-list__post-description';
        post.appendChild(postDescr);
        postDescr.textContent = entry.body;

        const commentBtn = document.createElement('a');
        commentBtn.className = 'posts-list__send';
        commentBtn.textContent = 'Комментарии';
        post.appendChild(commentBtn);
        commentBtn.onclick = view.showComment.bind(null, entry.id, entry.comments);
    });
};
