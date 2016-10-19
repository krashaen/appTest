function createUserPhoto() {
    const userPhoto = document.createElement('div');
    userPhoto.className = 'users-list__user-image';
    return userPhoto;
}

function createUserName(userTitle) {
    const userName = document.createElement('div');
    userName.className = 'users-list__user-name';
    userName.textContent = userTitle;
    return userName;
}

function createUserWrapper(user, onUserClick) {
    const userWrapper = document.createElement('div');
    userWrapper.className = 'users-list__info';
    userWrapper.onclick = () => onUserClick(user);
    userWrapper.setAttribute('id', user.id);
    return userWrapper;
}

function showUserList(userList, onUserClick) {
    const userInfo = document.getElementsByClassName('users-list');
    const usersWrappersArray = [];
    userList.forEach((entry) => {
        const userWrapper = createUserWrapper(entry, onUserClick);
        const photo = createUserPhoto();
        const userName = createUserName(entry.name);

        userInfo[0].appendChild(userWrapper);
        userWrapper.appendChild(photo);
        userWrapper.appendChild(userName);

        usersWrappersArray.push(userWrapper);
    });
    return usersWrappersArray;
}

