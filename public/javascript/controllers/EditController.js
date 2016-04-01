app.controller('EditController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("Edit controller");
  $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/' + $routeParams.id + '/edit/').then(function(response) { // EDIT
    $scope.movie = response.data;
  }, function(error) {
    console.log("Error, no data returned.");
    console.log(error);
  });

  $scope.updateMovie = function() {
    console.log("Updating movie.");
    $http.put('https://pure-wave-92261.herokuapp.com/movies/movies/' + $routeParams.id, $scope.movie).then(function(response) { // UPDATE
      $location.path( "/movies" );
      console.log("Movie updated.");
    }, function(error) {
      console.log("Error, no data returned.");
      console.log(error);
    });
  };

  $scope.deleteMovie = function(movie) { // DESTROY
    console.log("Deleting movie.");
    $http.delete('https://pure-wave-92261.herokuapp.com/movies/movies/' + movie._id).then(function(response){
      console.log("Movie deleted.");
      $location.path( "/movies" );
    }, function(error) {
      console.log("Failed to reload page.");
      console.log(error);
    });
  };

}]);
