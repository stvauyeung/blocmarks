app = angular.module('blocMarksServices', []);

app.service('CurrentUser', ['$http', function($http) {
  return {
    get: function(userId) {
      $http({
        url: '/api/users/:id',
        method: "GET",
        params: {id: userId}
      });
    }
  }
}]);