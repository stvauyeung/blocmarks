app = angular.module('blocMarksServices', []);

app.factory('CurrentUser', ['$http', function($http) {
  return {
    get: function(userId) {
      // $http call that makes a get request to the users#show route.
      // You'll need to configure the route in routes.rb.
      // Basically,
    }
  }
}]);