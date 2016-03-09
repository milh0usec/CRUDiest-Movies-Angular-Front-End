app.controller('HomeController', ['$scope', '$http', '$route', function($scope, $http, $route) {
  console.log("Home controller.");
  $http.get('http://localhost:3000/movies/movies/').then(function(response) { // INDEX
    $scope.movies = response.data;
  }, function(response) {
    console.log("Error, no data returned.");
  });

  $scope.deleteMovie = function(movie) { // DESTROY
    console.log("Deleting movie.");
    $http.delete('http://localhost:3000/movies/movies/' + movie._id).then(function(response){
      console.log("Movie deleted.");
      $route.reload();
    }, function(response) {
      console.log("Failed to reload page.");
    });
  };
}]);
