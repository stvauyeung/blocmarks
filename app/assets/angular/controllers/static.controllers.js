controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', [

  ])
  .controller('UsersCtrl', ['$scope', 'User', '$window', function($scope, User, $window) {
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
  .controller('UserHomeCtrl', ['$scope', '$rootScope', 'currentUser', function($scope, $rootScope, currentUser) {
    $rootScope.user = currentUser.data;
    $scope.user = $rootScope.user;
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