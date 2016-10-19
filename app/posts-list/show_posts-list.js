function createPostTitle(post) {
    const postTitle = document.createElement('h2');
    postTitle.className = 'posts-list__post-title';
    postTitle.textContent = post.title;
    return postTitle;
}

function createPostDescription(post) {
    const postDescr = document.createElement('p');
    postDescr.className = 'posts-list__post-description';
    postDescr.textContent = post.body;
    return postDescr;
}

function createCommentBtn(post, onCommentBtnClick) {
    const commentBtn = document.createElement('a');
    commentBtn.className = 'posts-list__send';
    commentBtn.textContent = 'Комментарии';
    commentBtn.onclick = () => onCommentBtnClick(post.id, post.comments);
    return commentBtn;
}

function showPostList(posts, onCommentBtnClick) {
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

        const postTitle = createPostTitle(entry);
        post.appendChild(postTitle);

        const postLine = document.createElement('hr');
        post.appendChild(postLine);

        const postDescr = createPostDescription(entry);
        post.appendChild(postDescr);

        const commentBtn = createCommentBtn(entry, onCommentBtnClick);
        post.appendChild(commentBtn);
    });
}
