ElokuvaApp.controller('ShowMovieController', function ($scope, FirebaseService, $routeParams, $location) {
    FirebaseService.getMovie($routeParams.id, function(data) {
        console.log("data nimi on " + data.name);
        $scope.movie = data;
    });

    $scope.deleteMovie = function () {
        FirebaseService.removeMovie($scope.movie);
        $location.path('/');
    }
});