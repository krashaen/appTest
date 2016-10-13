view.showUsers = function() {

    const userInfo = document.getElementsByClassName('users-list');
    usersList.forEach(function(entry) {
        // try to slice to smaller functions
        const userWrapper = document.createElement('div');
        userWrapper.className = 'users-list__info';
        userInfo[0].appendChild(userWrapper);
        userWrapper.onclick = view.showPost;
        userWrapper.setAttribute('id', entry.id);

        const userPhoto = document.createElement('div');
        userPhoto.className = 'users-list__user-image';
        userWrapper.appendChild(userPhoto);

        const userName = document.createElement('div');
        userName.className = 'users-list__user-name';
        userWrapper.appendChild(userName);
        userName.textContent = entry.name;
    });
};
