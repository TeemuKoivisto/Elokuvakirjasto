ElokuvaApp.controller('OmbdController', function ($scope, OmbdService, $routeParams, $location) {
    OmbdService.findMovie('lord').success(function (movies) {
        $scope.movies = movies.Search;
    });

    $scope.titlefield = "";
    $scope.yearfield = "";

    $scope.searchMovie = function () {
        if ($scope.titlefield) {
            OmbdService.findMovie($scope.titlefield, $scope.yearfield).success(function (movies) {
                if (movies.Search) {
                    $scope.movies = movies.Search;
                } else {
                    $scope.movies = [];
                }
            });
        }
//        else {
//            $scope.movies = "";
//        }
    }
});