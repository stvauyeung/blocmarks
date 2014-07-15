model = angular.module('bookmarkModel', []);

model.factory('Bookmark', ['$http', '$window', function($http, $window) {
  return {
    create: function(bookmark) {
      $http.post('api/bookmarks', bookmark)
        .success(function(data) {
          $window.location.href = '/home';
        }).error(function() {
          console.log('error with bookmark creation');
        });
    } 
  }
}]);