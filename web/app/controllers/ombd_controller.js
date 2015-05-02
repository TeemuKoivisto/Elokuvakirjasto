ElokuvaApp.controller('OmbdController', function ($scope, OmbdService, $routeParams, $location) {
    OmbdService.findMovie('lord').success(function (movies) {
        $scope.movies = movies.Search;
    });

    $scope.titlefield = "";
    $scope.yearfield = "";

    $scope.searchMovie = function () {
        console.log("hello");
        if ($scope.titlefield) {
            OmbdService.findMovie($scope.titlefield, $scope.yearfield).success(function (movies) {
                console.log("tuliko ulos mitään " + movies);
                console.log("entä onko tällä search " + movies.Search);
                if (movies.Search) {
                    $scope.movies = movies.Search;
                } else {
                    $scope.movies = [];
                }
            });
        }
    }
});