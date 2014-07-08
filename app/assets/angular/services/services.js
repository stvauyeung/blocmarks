app = angular.module('blocMarksServices', []);

app.service('CurrentUser', ['$http', function($http) {
  return {
    get: function(userId) {
      $http.get('/api/users/' + userId + '.json')
        .success(function(data, status, headers) {
          return data;
        })
        .erro(function(data, status, headers) {
          console.log('error');
        });
    }
  }
}]);