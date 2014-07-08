app = angular.module('blocMarksServices', ['ngCookies']);

// app.service('CurrentUser', ['$http', '$cookies', function($http, $cookies) {
//   return {
//     $http.get('/api/users/' + $cookies.user).success(function(data, status, headers) {
//         return data;
//       }).error(function(data, status, headers) {
//         console.log('error');
//       });
//   };
// }]);