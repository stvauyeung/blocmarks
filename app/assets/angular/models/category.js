app = angular.module('categoryModel', []);

app.factory('Category', ['$http', '$window', function($http, $window) {
  return {
    create: function(category, bookmarkId) {
      category.bookmark_id = bookmarkId;
      $http.post('/api/categories', category)
        .success(function(data) {
          // $window.location.href = '/home';
          console.log('successful category add');
        })
        .error(function(data) {
          console.log('error in category add');
        });
    }
  }
}]);