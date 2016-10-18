function createUserPhoto(parent) {
    const userPhoto = document.createElement('div');
    userPhoto.className = 'users-list__user-image';
    parent.appendChild(userPhoto);
}

function createUserName(parent, userTitle) {
    const userName = document.createElement('div');
    userName.className = 'users-list__user-name';
    parent.appendChild(userName);
    userName.textContent = userTitle;
}

function showUserList(userList) {
    const userInfo = document.getElementsByClassName('users-list');
    userList.forEach((entry) => {
        const userWrapper = document.createElement('div');
        userWrapper.className = 'users-list__info';
        userInfo[0].appendChild(userWrapper);
        userWrapper.onclick = view.showPosts.bind(null, entry.posts);
        userWrapper.setAttribute('id', entry.id);

        createUserPhoto(userWrapper);

        createUserName(userWrapper, entry.name);
    });
}

