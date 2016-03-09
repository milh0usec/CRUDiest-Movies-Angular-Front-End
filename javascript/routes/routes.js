app.config(function($routeProvider) {

  $routeProvider
  .when('/movies', { // INDEX
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/movies/new', { // must be above '/:id' otherwise it'll think that the ID is 'new'
    templateUrl: 'javascript/templates/new.html', // NEW
    controller: 'NewController'
  })
  .when('/movies/:id/edit', { // UPDATE
    templateUrl: 'javascript/templates/edit.html',
    controller: 'EditController'
  })
  .when('/movies/:id', { // SHOW
    templateUrl: 'javascript/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/' });
});
