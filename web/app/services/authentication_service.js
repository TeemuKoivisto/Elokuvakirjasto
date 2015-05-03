ElokuvaApp.service('AuthenticationService', function ($firebase, $firebaseAuth) {
    var firebaseRef = new Firebase('https://dazzling-torch-1566.firebaseio.com/movies');
    var firebaseAuth = $firebaseAuth(firebaseRef);

    this.logUserIn = function (email, password) {
        return firebaseAuth.$authWithPassword({
            email: email,
            password: password
        });
    }

    this.logUserOut = function () {
        firebaseAuth.$unauth();
    };

    this.createUser = function (email, password) {
        return firebaseAuth.$createUser({
            email: email,
            password: password
        });
    }

    this.checkLoggedIn = function () {
        return firebaseAuth.$waitForAuth();
    }

    this.getUserLoggedIn = function () {
        return firebaseAuth.$getAuth();
    }
});