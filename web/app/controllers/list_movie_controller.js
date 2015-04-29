ElokuvaApp.controller('ListMovieController', function($scope, FirebaseService){
        $scope.movies = FirebaseService.getMovies();
});