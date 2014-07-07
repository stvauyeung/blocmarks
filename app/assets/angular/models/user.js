app = angular.module('userModel', ['ngCookies'])

app.factory('User', ['$http', '$cookies', function() {
  console.log($cookies);
}])