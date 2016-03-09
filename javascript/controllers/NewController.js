app.controller('NewController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  console.log("New controller.");
  $scope.addMovie = function(movie){
    var movie = {
      movieName:  $scope.movie.movieName,
      moviePerson: $scope.movie.moviePerson,
      movieYear: $scope.movie.movieYear,
      movieSummary: $scope.movie.movieSummary,
      moviePoster: $scope.movie.moviePoster,
      movieRating: $scope.movie.movieRating
    }
    $http.post('http://localhost:3000/movies/movies/', movie).then(function(response) { // NEW
      console.log("Movie added.");
      $location.path( "/movies/" );
    }, function(response) {
      console.log("Error, no movie added.");
    });
  }
}]);
