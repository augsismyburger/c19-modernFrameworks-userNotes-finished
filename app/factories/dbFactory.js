'use strict';

app.factory('dbFactory', function($q, $http, FBCreds, authFactory) {

    let newNote = (newNote) => {
        return $q((resolve, reject) => {
            newNote.uid = authFactory.getUser();
            let holder = JSON.stringify(newNote);
            $http.post(`${FBCreds.databaseURL}.json`, holder)
            .then((newNoteOb) => {
                resolve(newNoteOb);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let getNoteList = () => {
        let currentUser = authFactory.getUser();
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/.json?orderBy="uid"&equalTo="${currentUser}"`)
          .then ((notesObj) => {
            let itemCollection = notesObj.data;
            resolve(itemCollection);
            console.log('the dats', itemCollection);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {getNoteList, newNote};

});