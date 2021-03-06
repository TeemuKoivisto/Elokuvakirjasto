describe('Add movie', function () {
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
        spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('AddMovieController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
     * toBeCalled-oletusta.
     */
    it('should be able to add a movie by its name, director, release date and description', function () {
        var elokuva = {
            name: "gravity",
            director: "en muista",
            release: "2010",
            description: "joku elokuva en oikeen muista mikä oli"
        }
        FirebaseServiceMock.addMovie(elokuva);
        var movies = FirebaseServiceMock.getMovies();
        expect(movies.length).toBe(3);
        expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
    });

    /*	
     * Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
     * Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
     * EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
     * not.toBeCalled-oletusta (muista not-negaatio!).
     */
    it('should not be able to add a movie if its name, director, release date or description is empty', function () {
        var elokuva = {
            name: "gravity",
            director: "en muista",
            release: "2010",
            description: "joku elokuva en oikeen muista mikä oli"
        }
        FirebaseServiceMock.addMovie(elokuva);
        var movies = FirebaseServiceMock.getMovies();
        expect(movies.length).toBe(3);
        expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
    });
});