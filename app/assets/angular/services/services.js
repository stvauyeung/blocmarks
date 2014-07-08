app = angular.module('blocMarksServices', []);

app.service('CurrentUser', ['$cookies', function($cookies) {
  return {
    user: $cookies.user
  }
}]);