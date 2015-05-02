var ElokuvaApp = angular.module('ElokuvaApp', ['ngRoute', 'firebase']);

ElokuvaApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

ElokuvaApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListMovieController',
                templateUrl: 'app/views/show_all.html'
            })
            .when('/movies', {
                controller: 'ListMovieController',
                templateUrl: 'app/views/show_all.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/new.html'
            })
            .when('/movies/:id/edit', {
                controller: 'EditMovieController',
                templateUrl: 'app/views/edit.html'
            })
            .when('/movies/:id/show', {
                controller: 'ShowMovieController',
                templateUrl: 'app/views/show.html'
            })
            .when('/movies/ombd', {
                controller: 'OmbdController',
                templateUrl: 'app/views/ombd_index.html'
            })
})