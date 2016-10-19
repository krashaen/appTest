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

function showUserList(userList, onUserClick) {
    const userInfo = document.getElementsByClassName('users-list');
    userList.forEach((entry) => {
        const userWrapper = document.createElement('div');
        userWrapper.className = 'users-list__info';
        userInfo[0].appendChild(userWrapper);
        userWrapper.onclick = onUserClick.bind(null, entry);
        userWrapper.setAttribute('id', entry.id);

        const photo = createUserPhoto();
        const userName = createUserName(entry.name);

        // 1
        userWrapper.appendChild(photo);
        userWrapper.appendChild(userName);

        // 2
        createUserPhoto(userWrapper);
        createUserName(userWrapper, entry.name);
    });

    // TODO: return refs to DOM elems
    return usersWrappersArray;
}

