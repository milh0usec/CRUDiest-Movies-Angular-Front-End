app.controller('EditController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("Edit controller");
  $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/' + $routeParams.id + '/edit/').then(function(response) { // EDIT
    $scope.movie = response.data;
  }, function(error) {
    console.log("Error, no data returned.");
    console.log(error);
  });

  $scope.updateMovie = function(movie) {
    console.log("Updating movie.");
    var movie = {
      movieActors: $scope.movie.movieActors,
      movieAwards: $scope.movie.movieAwards,
      movieCountry: $scope.movie.movieCountry,
      movieDirector: $scope.movie.movieDirector,
      movieGenre: $scope.movie.movieGenre,
      movieLanguage: $scope.movie.movieLanguage,
      movieMetascore: $scope.movie.movieMetascore,
      moviePlot: $scope.movie.moviePlot,
      moviePoster: $scope.movie.moviePoster,
      movieRated: $scope.movie.movieRated,
      movieRuntime: $scope.movie.movieRuntime,
      movieTitle: $scope.movie.movieTitle,
      movieWriter: $scope.movie.movieWriter,
      movieYear: $scope.movie.movieYear,
      movieImdbID: $scope.movie.movieImdbID,
      movieImdbRating: $scope.movie.movieImdbRating,
      movieImdbVotes: $scope.movie.movieImdbVotes,
      movieLikes: 0,
      movieTrivia: $scope.movie.movieTrivia,
      comments: $scope.movie.comments
    };
    $http.put('https://pure-wave-92261.herokuapp.com/movies/movies/' + $routeParams.id, movie).then(function(response) { // UPDATE
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
