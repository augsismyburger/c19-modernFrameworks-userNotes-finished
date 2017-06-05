'use strict';

app.controller('loginCtrl', function($scope, authFactory, $location) {

    $scope.account = {
        email: "",
        password: ""
    };

	$scope.logout = () => {
		console.log("logout clicked");
		authFactory.logoutUser()
		.then(function(data){
			console.log("logged out?", data);
			$location.path("/login");
		}, function(error){
			console.log("error occured on logout");
		});
	};

    if(authFactory.isAuthenticated()){
    $scope.logout();
	}

  	$scope.login = () => {
    	console.log("you clicked login");
    	authFactory
	    .loginUser($scope.account)
	    .then( () => {
	        $scope.isLoggedIn = true;
	        console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
	        $location.path("/notelist");
	    });
	};


});
