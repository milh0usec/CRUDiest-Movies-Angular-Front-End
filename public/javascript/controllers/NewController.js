app.controller('NewController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  console.log("New controller.");
  $scope.addMovie = function(movie){
    var movie = {
      movieName:  $scope.movie.movieName,
      moviePerson: $scope.movie.moviePerson,
      movieYear: $scope.movie.movieYear,
      movieSummary: $scope.movie.movieSummary,
      movieTrivia: $scope.movie.movieTrivia,
      moviePoster: $scope.movie.moviePoster,
      movieRating: $scope.movie.movieRating,
      movieLikes: $scope.movie.movieLikes
    };
    $scope.movie.movieLikes = 0;
    $http.post('https://pure-wave-92261.herokuapp.com/movies/movies/', movie).then(function(response) { // NEW
      console.log("Movie added.");
      console.log($scope.movie);
      $location.path( "/movies/" );
    }, function(response) {
      console.log("Error, no movie added.");
    });
  }
}]);
