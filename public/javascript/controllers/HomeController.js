app.controller('HomeController', ['$scope', '$http', '$route', function($scope, $http, $route) {
  console.log("Home controller.");
  $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/').then(function(response) { // INDEX
    $scope.movies = response.data;
    console.log($scope.movies);
  }, function(response) {
    console.log("Error, no data returned.");
  });
}]);
