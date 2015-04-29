describe('Movie list', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('ElokuvaApp');

        FirebaseServiceMock = (function () {
            var movies = [{
                    name: "$scope.namefield",
                    director: "$scope.directorfield",
                    release: "$scope.releasefield",
                    description: "$scope.descriptionfield"
                },
                {
                    name: "asdf",
                    director: "michael bay",
                    release: "1111",
                    description: "paskaa"
                },
            ];
            return {
                // Toteuta FirebaseServicen mockatut metodit tähän
                addMovie: function (message) {
                    movies.push(message);
                },
                getMovies: function () {
                    return movies;
                },
                removeMovie: function (index) {
                    movies.splice(index, 1);
                }
            }
        })();

        // Lisää vakoilijat
         spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('ListMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should list all movies from the Firebase', function () {
        var movies = FirebaseServiceMock.getMovies();
        expect(movies.length).toBe(2);
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
        expect(movies[1].description).toBe("paskaa");
    });

    /* 
     * Testaa, että elokuvan pystyy poistamaan Firebasesta.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to remove a movie', function () {
        expect(true).toBe(false);
    });
});