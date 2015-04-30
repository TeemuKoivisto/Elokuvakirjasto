ElokuvaApp.controller('EditMovieController', function ($scope, FirebaseService, $routeParams, $location) {
    FirebaseService.getMovie($routeParams.id, function(data) {
        console.log("data nimi on " + data.name);
        $scope.movie = data;
    });

    $scope.namefield = "";
    $scope.directorfield = "";
    $scope.releasefield = "";
    $scope.descriptionfield = "";

    $scope.editMovie = function () {
        var edited = {
            name: $scope.namefield,
            director: $scope.directorfield,
            release: $scope.releasefield,
            description: $scope.descriptionfield
        }
        FirebaseService.editMovie(edited);
        $location.path('/');
    }
});