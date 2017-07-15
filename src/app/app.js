(function () {
  'use strict';

  var myApp = angular
    .module('myApp',['ngRoute','ngResource','firebase'])

  myApp.config(function () {
    var config = {
      apiKey: "AIzaSyB9bftwKPnskMvQqmTuxUHZ4mhyVyUOge8",
    authDomain: "goattinder-e90d4.firebaseapp.com",
    databaseURL: "https://goattinder-e90d4.firebaseio.com"
    };

    firebase.initializeApp(config);
  });

  myApp.controller('todoController', ['$scope','$firebaseArray', function($scope, $firebaseArray) {

    var taskRef = firebase.database().ref('task');
    var tasks = $firebaseArray(taskRef);

    

  }]);

})();
