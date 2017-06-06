'use strict';

const app = angular.module('NoteApp', ["ngRoute"]);

let isAuth = (authFactory) => 
    new Promise ((resolve, reject) => {
        authFactory.isAuthenticated()
        .then((userExists) => {
            console.log('user exists', userExists);
            if (userExists) {
                console.log('go ahead');
                resolve();
            } else {
                console.log('rejected');
                reject();
            }
    });
});


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
        controller: 'noteListCtrl',
        resolve: {isAuth}
    }).
    when('/addnote', {
        templateUrl: 'partials/newNote.html',
        controller: 'newNoteCtrl',
        resolve: {isAuth}
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