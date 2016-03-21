app.controller('NewController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  console.log("New controller.");
  // $scope.addMovie = function(movie){
  //   console.log($scope.movie);
  //   var movie = {
  //     movieName:  $scope.movie.movieName,
  //     moviePerson: $scope.movie.moviePerson,
  //     movieYear: $scope.movie.movieYear,
  //     movieSummary: $scope.movie.movieSummary,
  //     movieTrivia: $scope.movie.movieTrivia,
  //     moviePoster: $scope.movie.moviePoster,
  //     movieRating: $scope.movie.movieRating,
  //     movieLikes: 0
  //   };
  //   $http.post('https://pure-wave-92261.herokuapp.com/movies/movies/', movie).then(function(response) { // NEW
  //     console.log("Movie added.");
  //     console.log(movie);
  //     $location.path( "/movies/" );
  //   }, function(response) {
  //     console.log("Error, no movie added.");
  //   });
  // };

  $scope.addMovie = function(movie){
    console.log($scope.movie);
    return $http.get('//www.omdbapi.com/?t=' + $scope.movie.movieName)
    .then(function(response){
      console.log(response);
      var movie = {
        movieName:  response.data.Title,
        moviePerson: response.data.Director,
        movieWriter: response.data.Writer,
        movieActors: response.data.Actors,
        movieYear: response.data.Year,
        movieCountry: response.data.Country,
        moviePoster: response.data.Poster,
        movieRating: response.data.imdbRating,
        movieSummary: response.data.Plot,
        movieLikes: 0
      };
      $http.post('https://pure-wave-92261.herokuapp.com/movies/movies/', movie).then(function(response) { // NEW
        console.log("Movie added.");
        console.log(movie);
        $location.path( "/movies/" );
      }, function(response) {
        console.log("Error, no movie added.");
      });
    });
  };

  // $http.post('https://pure-wave-92261.herokuapp.com/movies/movies/', movie).then(function(response) { // NEW
  //   console.log("Movie added.");
  //   console.log(movie);
  //   $location.path( "/movies/" );
  // }, function(response) {
  //   console.log("Error, no movie added.");
  // });
  // };

  // $scope.getLocation = function(val) {
  //   return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
  //     params: {
  //       address: val,
  //       sensor: false
  //     }
  //   }).then(function(response){
  //     console.log(response);
  //     return response.data.results.map(function(item){
  //       console.log(item)
  //       return item.formatted_address;
  //     });
  //   });
  // };

  $scope.getLocation = function(val) {
    return $http.get('//www.omdbapi.com/?s=' + val)
    .then(function(response){
      return response.data.Search.map(function(item){
        return item.Title;
      });
    });
  };

}]);
