controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', [

  ])
  .controller('UsersCtrl', ['$scope', 'User', function($scope, User) {
    $scope.createNewUser = function(user) {
      User.create(user);
    };
  }])
  .controller('SessionsCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.createSession = function(user) {
      $http.post('api/login', user)
        .success(function(data, status, headers) {
          $window.location.href = '/home';
        })
        .error(function(data, status, headers) {
          console.log('failed login');
        });
    };
  }])
  .controller('UserHomeCtrl', ['$scope', '$rootScope', 'currentUser', '$http', function($scope, $rootScope, currentUser, $http) {
    $rootScope.user = currentUser.data;
    $scope.user = $rootScope.user;
    $scope.showAddCategory = true;
    $scope.createCategory = function(category, bookmarkId, bookmarkCategories) {
      category.bookmark_id = bookmarkId;
      $http.post('/api/categories', category)
        .success(function(data) {
          bookmarkCategories = data;
          console.log(data);
          $scope.newCategory = {};
          console.log('success');
        })
        .error(function(data) {
          console.log('error');
        });
    };
  }])
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', function($scope, Bookmark) {
    $scope.createNewBookmark = function(bookmark) {
      Bookmark.create(bookmark);
    };
  }])
  .controller('UserNavCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.open = function() {
      var addModal = $modal.open({
        controller: 'BookmarksCtrl',
        templateUrl: 'newBookmark.html'
      });
    };
  }]);