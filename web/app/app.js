var ElokuvaApp = angular.module('ElokuvaApp', ['ngRoute', 'firebase']);

ElokuvaApp.run(function (AuthenticationService, $rootScope) {
    $rootScope.logOut = function () {
        AuthenticationService.logUserOut();
        window.location.reload();
    };
    $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});

ElokuvaApp.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
    }]);

ElokuvaApp.config(function ($routeProvider) {
    $routeProvider
            .when('/movies', {
                controller: 'ListMovieController',
                templateUrl: 'app/views/show_all.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/new.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/:id/edit', {
                controller: 'EditMovieController',
                templateUrl: 'app/views/edit.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/:id/show', {
                controller: 'ShowMovieController',
                templateUrl: 'app/views/show.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/ombd', {
                controller: 'OmbdController',
                templateUrl: 'app/views/ombd_index.html'
            })
            .when('/login', {
                controller: 'UserController',
                templateUrl: 'app/views/login.html'
            })
            .when('/user/new', {
                controller: 'UserController',
                templateUrl: 'app/views/register.html'
            })
            .otherwise({
                redirectTo: '/movies'
            })
})