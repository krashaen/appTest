view.showUsers = function() {
    var userPhoto = null;
    var userInfo = null;
    var userName = null;
    var userWrapper = null;
    var UserEmail = null;

    userInfo = document.getElementsByClassName('users-list');
    usersList.forEach(function(entry) {

        userWrapper = document.createElement('div');
        userWrapper.className = 'users-list__info';
        userInfo[0].appendChild(userWrapper);
        userWrapper.onclick = view.showPost;
        userWrapper.setAttribute('id', entry.id);

        userPhoto = document.createElement('div');
        userPhoto.className = 'users-list__user-image';
        userWrapper.appendChild(userPhoto);

        userName = document.createElement('div');
        userName.className = 'users-list__user-name';
        userWrapper.appendChild(userName);
        userName.textContent = entry.name;
    })
};