app = angular.module('blocMarksServices', []);

app.service('CurrentUser', ['$http', function($http) {
  return {
    get: function(userId) {
      $http.get('api/users/' + userId)
        .success(function(data, status, headers) {
          console.log("success");
        });
    }
  }
}]);