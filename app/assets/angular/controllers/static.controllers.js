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
  .controller('UserHomeCtrl', ['$scope', '$rootScope', 'currentUser', '$modal', function($scope, $rootScope, currentUser, $modal) {
    $rootScope.user = currentUser.data;
    $scope.user = $rootScope.user;
    $scope.open = function() {
      var addModal = $modal.open({
        templateUrl: 'newBookmark.html'
      });
    };
  }])
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', function($scope, Bookmark) {
    $scope.createNewBookmark = function(bookmark) {
      Bookmark.create(bookmark);
    };
  }])
  .controller('NavCtrl', ['$scope', 'signedIn', function($scope, signedIn) {
    $scope.signedIn = signedIn;
  }]);