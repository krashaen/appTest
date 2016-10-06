var usersList ={};
var posts = {};
var comments = {};
var root = 'http://jsonplaceholder.typicode.com';
var view ={};

$.ajax({
  url: root + '/users',
  method: 'GET'
}).then(function(data) {
    usersList = data;
    view.showUsers();
});

$.ajax({
  url: root + '/posts',
  method: 'GET'
}).then(function(data) {
    posts = data;
});

$.ajax({
  url: root + '/comments',
  method: 'GET'
}).then(function(data) {
    comments = data;
});
