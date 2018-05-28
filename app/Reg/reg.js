'use strict';

angular.module('myApp.Reg', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Reg', {
    templateUrl: 'Reg/reg.html',
    controller: 'RegCtrl'
  });
}])

.controller('RegCtrl', [function() {

}]);