app.controller('HomeController', ['$scope', '$http', '$route', '$location', function($scope, $http, $route, $location) {
  console.log("Home controller.");
  $scope.loading = true;
  $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/').then(function(response) { // INDEX
    $scope.movies = response.data;
    $scope.order = '_id';
    $scope.reverse = true;
    $scope.loading = false;
  }, function(error) {
    console.log("Error, no data returned.");
    console.log(error);
  });

  $scope.getLocation = function(val) {
    return $http.get('//www.omdbapi.com/?s=' + val)
    .then(function(response){
      return response.data.Search.map(function(item){
        return item.Title;
      });
    });
  };

  $scope.onSelect = function ($item) {
    $scope.loading = true;
    console.log("Selected!");
    return $http.get('//www.omdbapi.com/?t=' + $item)
    .then(function(response){
      var movie = {
        movieActors: response.data.Actors,
        movieAwards: response.data.Awards,
        movieCountry: response.data.Country,
        movieDirector: response.data.Director,
        movieGenre: response.data.Genre,
        movieLanguage: response.data.Language,
        movieMetascore: response.data.Metascore,
        moviePlot: response.data.Plot,
        moviePoster: response.data.Poster,
        movieRated: response.data.Rated,
        movieRuntime: response.data.Runtime,
        movieTitle: response.data.Title,
        movieWriter: response.data.Writer,
        movieYear: response.data.Year,
        movieImdbID: response.data.imdbID,
        movieImdbRating: response.data.imdbRating,
        movieImdbVotes: response.data.imdbVotes,
        movieLikes: 0
      };
      $scope.movies.push(movie);
      $scope.loading = false;
      $http.post('https://pure-wave-92261.herokuapp.com/movies/movies/', movie).then(function(response) { // NEW
        console.log("Movie added.");

        // This HTTP GET request is the slowest part of the web app. Without it the user has to click the new movie twice to get to the SHOW view. Also if multiple users are using the web app simultaneously the front end and back end will become out of sync.
        $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/').then(function(response) { // INDEX
          $scope.movies = response.data;
        }, function(Error) {
          console.log("Error, no data returned.");
          console.log(error);
        });
      }, function(error) {
        console.log("Error, no movie added.");
        console.log(error);
      });
    });
  };

}]);
