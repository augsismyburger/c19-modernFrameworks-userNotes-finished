'use strict';

const app = angular.module('NoteApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
    }).
    when('/registration', {
        templateUrl: 'partials/registration.html',
        controller: 'registrationCtrl'
    }).
    when('/notelist', {
        templateUrl: 'partials/noteList.html',
        controller: 'noteListCtrl'
    }).
    when('/addnote', {
        templateUrl: 'partials/newNote.html',
        controller: 'newNoteCtrl'
    }).
    otherwise('/login');
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});