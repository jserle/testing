'use strict';

angular.module('myApp.Auth', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Auth', {
      templateUrl: 'Auth/auth.html',
      controller: 'AuthCtrl'
    });
  }])
  .controller('AuthCtrl', [function($rootScope) {}])
  .filter('formatText', function(){
      return function(text){
          if(text.indexOf("Oops")!==-1){
              return "***";
          }
          else{
              return text;
          }
      }
  });
