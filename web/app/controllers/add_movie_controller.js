ElokuvaApp.controller('AddMovieController', function($scope, FirebaseService, $location){
	$scope.namefield="";
        $scope.directorfield="";
        $scope.releasefield="";
        $scope.descriptionfield="";
        
        $scope.createNewMovie = function() {
            var movie = {
                name: $scope.namefield,
                director: $scope.directorfield,
                release: $scope.releasefield,
                description: $scope.descriptionfield
            }
            FirebaseService.addMovie(movie);
            $location.path('/');
        }
});