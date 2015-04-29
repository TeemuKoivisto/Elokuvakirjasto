var ElokuvaApp = angular.module('ElokuvaApp', ['ngRoute', 'firebase']);

ElokuvaApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListMovieController',
                templateUrl: 'app/views/show_all.html'
//                templateUrl: 'index.html'
            })
            .when('/movies', {
                controller: 'ListMovieController',
                templateUrl: 'app/views/show_all.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/new.html'
            })
})