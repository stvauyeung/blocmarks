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
  .controller('UserHomeCtrl', ['$scope', '$rootScope', 'currentUser', function($scope, $rootScope, currentUser) {
    $rootScope.user = currentUser.data;
    $scope.user = $rootScope.user;
  }])
  .controller('BookmarksCtrl', ['$scope', '$http', '$window', '$cookies', function($scope, $http, $window, $cookies) {
    $scope.createNewBookmark = function(bookmark) {
      $http.post('api/bookmarks', bookmark)
        .success(function(data) {
          $window.location.href = '/home';
        }).error(function() {
          console.log('error with bookmark creation');
        });
    };
    $scope.user_id = $cookies.user;
  }])
  .controller('NavCtrl', ['$scope', 'signedIn', function($scope, signedIn) {
    $scope.signedIn = signedIn;
  }]);