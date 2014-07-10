controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', [

  ])
  .controller('UsersCtrl', ['$scope', '$http', '$window', '$cookies', function($scope, $http, $window, $cookies) {
    $scope.createNewUser = function(user) {
      $http.post('/api/users', user)
        .success(function(data, status, headers) {
          $cookies.user = data.id;
          $window.location.href = '/home';
        })
        .error(function(data, status, headers) {
          alert('Error with creation');
        });
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
  .controller('UserHomeCtrl', ['$scope', '$cookies', '$http', function($scope, $cookies, $http) {
    $http.get('/api/users/' + $cookies.user).success(function(data) {
      $scope.user = data;
    }).error(function(data){
      console.log('error');
    });
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
  }]);