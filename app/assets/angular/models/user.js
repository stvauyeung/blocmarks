app = angular.module('userModel', []);

app.factory('User', ['$http', '$window', '$cookies', function($http, $window, $cookies) {
  return {
    create: function(user) {
      $http.post('/api/users', user)
        .success(function(data, status, headers) {
          $window.location.href = '/home';
        })
        .error(function(data, status, headers) {
          alert('Error with creation');
        })
    },
    get: function(userId) {
      return $http.get('/api/users/' + userId)
        .success(function(data) {
          return data;          
        })
        .error(function(data) {
          alert("Error retrieving user.");
        });
    }
  }
}]);