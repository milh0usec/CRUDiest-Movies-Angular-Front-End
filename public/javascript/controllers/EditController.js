app.controller('EditController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("Edit controller");
  $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/' + $routeParams.id + '/edit/').then(function(response) { // EDIT
    $scope.movie = response.data;
    console.log(response.data);
  }, function(response) {
    console.log("Error, no data returned.");
  });

  $scope.updateMovie = function(movie) {
    console.log("Updating movie.");
    var movie = {
      movieName:  $scope.movie.movieName,
      moviePerson: $scope.movie.moviePerson,
      movieYear: $scope.movie.movieYear,
      movieSummary: $scope.movie.movieSummary,
      movieTrivia: $scope.movie.movieTrivia,
      moviePoster: $scope.movie.moviePoster,
      movieRating: $scope.movie.movieRating
    }
    console.log($routeParams.id);
    $http.put('https://pure-wave-92261.herokuapp.com/movies/movies/' + $routeParams.id, movie).then(function(response) { // UPDATE
      $location.path( "/movies" );
      console.log("Movie updated.");
    }, function(response) {
      console.log("Error, no data returned.");
    });
  };
  $scope.deleteMovie = function(movie) { // DESTROY
    console.log("Deleting movie.");
    $http.delete('https://pure-wave-92261.herokuapp.com/movies/movies/' + movie._id).then(function(response){
      console.log("Movie deleted.");
      $location.path( "/movies" );
    }, function(response) {
      console.log("Failed to reload page.");
    });
  };
}]);
