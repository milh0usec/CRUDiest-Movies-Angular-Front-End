app.controller('EditController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("Edit controller");
  $http.get('http://localhost:3000/movies/movies/' + $routeParams.id + '/edit/').then(function(response) { // EDIT
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
      moviePoster: $scope.movie.moviePoster,
      movieRating: $scope.movie.movieRating
    }
    console.log($routeParams.id);
    $http.put('http://localhost:3000/movies/movies/' + $routeParams.id, movie).then(function(response) { // UPDATE
      $location.path( "/movies" );
      console.log("Movie updated.");
    }, function(response) {
      console.log("Error, no data returned.");
    });
  }
}]);
