app.controller('HomeController', ['$scope', '$http', '$route', '$location', function($scope, $http, $route, $location) {
  console.log("Home controller.");
  $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/').then(function(response) { // INDEX
    $scope.movies = response.data;
    $scope.order = '_id';
    $scope.reverse = true;
    console.log($scope.movies);
  }, function(response) {
    console.log("Error, no data returned.");
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
    console.log("Selected!");
    console.log($item);
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
      $http.post('https://pure-wave-92261.herokuapp.com/movies/movies/', movie).then(function(response) { // NEW
        console.log("Movie added.");

        // This HTTP GET request is needed to run $scope.$apply() and update the movies in the view.
        $http.get('https://pure-wave-92261.herokuapp.com/movies/movies/').then(function(response) { // INDEX
          $scope.movies = response.data;
        }, function(response) {
          console.log("Error, no data returned.");
        });

      }, function(response) {
        console.log("Error, no movie added.");
      });
    });
  };

}]);
