ElokuvaApp.service('FirebaseService', function ($firebase) {
    var firebaseref = new Firebase('https://dazzling-torch-1566.firebaseio.com/movies');
    var moviessync = $firebase(firebaseref);
    var movies = moviessync.$asArray();

    this.getMovies = function () {
        return movies;
    }

    this.addMovie = function (movie) {
        movies.$add(movie);
    }
});