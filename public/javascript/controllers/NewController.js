app.controller('NewController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  console.log("New controller.");

  $scope.addMovie = function(movie){
    return $http.get('//www.omdbapi.com/?t=' + $scope.movie.movieName)
    .then(function(response){
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
        $location.path( "/movies/" );
      }, function(response) {
        console.log("Error, no movie added.");
      });
    });
  };

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
        console.log(response.data._id);

        $scope.movie.movieActors =  movie.movieActors;
        $scope.movie.movieAwards =  movie.movieAwards;
        $scope.movie.movieCountry = movie.movieCountry;
        $scope.movie.movieDirector = movie.movieDirector;
        $scope.movie.movieGenre = movie.movieGenre;
        $scope.movie.movieLanguage = movie.movieLanguage;
        $scope.movie.movieMetascore = movie.movieMetascore;
        $scope.movie.moviePlot = movie.moviePlot;
        $scope.movie.moviePoster = movie.moviePoster;
        $scope.movie.movieRated = movie.movieRated;
        $scope.movie.movieRuntime = movie.movieRuntime;
        $scope.movie.movieTitle = movie.movieTitle;
        $scope.movie.movieWriter = movie.movieWriter;
        $scope.movie.movieYear = movie.movieYear;
        $scope.movie.movieImdbID = movie.movieImdbID;
        $scope.movie.movieImdbRating = movie.movieImdbRating;
        $scope.movie.movieImdbVotes = movie.movieImdbVotes;
        $scope.movie.movieLikes = 0

        console.log($scope.movie);
        console.log(movie);

        $location.path( "/movies/" + response.data._id );
      }, function(response) {
        console.log("Error, no movie added.");
      });
    });
  };

}]);
