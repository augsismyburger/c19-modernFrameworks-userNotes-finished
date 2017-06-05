'use strict';

app.controller('newNoteCtrl', function($scope, $location, dbFactory, authFactory) {

    $scope.myNote = {
        task: ""
    };

    $scope.newNote = () => {
        dbFactory.newNote($scope.myNote)
        .then(() => {
            $location.path('/notelist');
        });
    };
});