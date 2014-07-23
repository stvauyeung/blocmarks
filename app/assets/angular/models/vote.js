app = angular.module('voteModel', [])

app.factory('Vote', ['$http', '$window', function($http, $window) {
  return {
    create: function(vote) {
      $http.post('/api/votes', vote)
        .success(function(data) {
          $window.location.reload();
        }).error(function(data) {
          console.log("Error creating vote");
        });
    }
  }
}]);