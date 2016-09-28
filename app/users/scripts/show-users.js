var usersList = {};
var posts = {};
var root = 'http://jsonplaceholder.typicode.com';
var users = document.getElementsByClassName('users-list');
$.ajax({
  url: root + '/users',
  method: 'GET'
}).then(function(data) {
    usersList = data;
});
$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
    posts = data;
});

var view = {
            newRow: null,
            titleRow: null,
            newCell: null,
            usersTable: null,
            tableTitle: null,
            userName: null,
            viewCell: null,

        showTable: function() {
        //create Table
        usersTable = document.createElement('table');
        usersTable.className = 'users-list__usersTable';
        document.body.appendChild(usersTable);

        //create table title
        newRow = usersTable.insertRow(-1);
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = 'Имя пользователя:';
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = 'Логин:';
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = 'Компания:';
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = 'E-mail:';
        for (var i = 0; i < usersList.length ; i++) {
            this.createRow(i);
        }
    },

    createRow: function(id) {
        newRow = usersTable.insertRow(-1);
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = usersList[id].name;
        newCell = newRow.insertCell(-1);
        newCell.onclick = this.showPost;
        newCell.innerHTML = usersList[id].username;
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = usersList[id].company.name;
        newCell = newRow.insertCell(-1);
        newCell.innerHTML = usersList[id].email;
    },

    showPost: function(id){
        for(var i = 0; i < posts.length; i++) {
            if(posts[i].userId === id) console.log(posts[i]);
        }
    }
};