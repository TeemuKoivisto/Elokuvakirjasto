ElokuvaApp.controller('UserController', function($scope, $location, AuthenticationService){
  
  $scope.logIn = function(){
    AuthenticationService.logUserIn($scope.email, $scope.password)
    .then(function(){
        window.location.reload();
      $location.path('/movies');
    })
    .catch(function(){
      $scope.message = 'Väärä sähköpostiosoite tai salasana!'
    });
  }

  $scope.register = function(){
      console.log("1");
    AuthenticationService.createUser($scope.newEmail, $scope.newPassword)
    .then(function(){
        console.log("2");
      AuthenticationService.logUserIn($scope.newEmail, $scope.newPassword)
      .then(function(){
          window.location.reload();
        $location.path('/movies');
      });
    })
    .catch(function(){
        console.log("virhe");
      $scope.message = 'Tapahtui virhe! Yritä uudestaan';
    });
  }
});