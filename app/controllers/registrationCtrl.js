'use strict';

app.controller('registrationCtrl', function($scope, $location, authFactory) {

    $scope.account = {
        email: "",
        password: ""
    };

	$scope.register = () => {
    	console.log("you clicked register");
	    authFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    })
	    .then( (userData) => {
	      console.log("UserCtrl newUser:", userData );
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user:", error);
	    });
  	};

  	$scope.login = () => {
    	console.log("you clicked login");
    	authFactory
	    .loginUser($scope.account)
	    .then( () => {
	        $scope.isLoggedIn = true;
	        console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
            $location.path("/notelist");
	    	$scope.$apply();
	    });
	};
});
