'use strict';

app.controller('noteListCtrl', function($scope, dbFactory, $location) {

    $scope.getNoteList = function() {
        dbFactory.getNoteList()
        .then((notes) => {
            $scope.notes = notes;
        });
    };
    $scope.getNoteList();

});