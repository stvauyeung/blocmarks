controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', [

  ])
  .controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.createNewUser = function(user) {
      $http.post('/api/users', user)
        .success(function(data, status, headers) {
          alert('Successful user creation');
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
  .controller('UserHomeCtrl', ['$scope', '$http', 'CurrentUser', function($scope, $http, CurrentUser) {
    $scope.user = CurrentUser.user;
  }]);