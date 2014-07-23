model = angular.module('bookmarkModel', []);

model.factory('Bookmark', ['$http', '$window', function($http, $window) {
  return {
    create: function(bookmark) {
      $http.post('/api/bookmarks', bookmark)
        .success(function(data) {
          $window.location.href = '/home';
        }).error(function() {
          console.log('error with bookmark creation');
        });
    },
    show: function(bookmarkId) {
      return $http.get('/api/bookmarks/' + bookmarkId)
        .success(function(data) {
          return data;
        }).error(function(data) {
          console.log('Error showing bookmark');
        })
    }
  }
}]);