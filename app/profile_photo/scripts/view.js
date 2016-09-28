var userName = document.getElementsByClassName('profile-photo__user-name');
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/users/1',
  method: 'GET'
}).then(function(data) {
  userName[0].textContent = data.name;
});