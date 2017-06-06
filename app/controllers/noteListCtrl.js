'use strict';

app.controller('noteListCtrl', function($scope, dbFactory, $location, $window, authFactory) {

    $scope.logout = function() {
        authFactory.logoutUser().
        then( function(data) {
            console.log('dats', data);
            $location.path("/login");
	    	$scope.$apply();
        });
    };

    let getNoteList = function() {
        console.log('shits workin');
        dbFactory.getNoteList()
        .then((notes) => {
            $scope.notes = notes;
        });
    };
    getNoteList();

});