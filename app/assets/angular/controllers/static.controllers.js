controllers = angular.module('staticCtrls', []);

controllers
  .controller('StaticHomeCtrl', [

  ])
  .controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.createNewUser = function(user) {
      $http.post('/api/users', user)
        .success(function(data, headers, status) {
          alert('Successful user creation');
        })
        .error(function(data, headers, status) {
          alert('Error with creation');
        });
    };
  }]);