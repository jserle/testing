'use strict';
angular.module('myApp', [
  'ngRoute',
  'myApp.Auth',
  'myApp.Reg',
  'myApp.version'
])

    .run(function($rootScope) {
        $rootScope.moduleName = "myApp";
        $rootScope.message = "Hello AngularJS";
        $rootScope.question = {
            text: '1',
            author: '2',
            date: '20/10/2013',
            answers:
                [{
                    text: '1',
                    author: '2',
                    date: '20/10/2013',
                    rate:2
                },{
                    text: '1',
                    author: '2',
                    date: '21/10/2013',
                    rate:3
                },{
                    text: '1',
                    author: '2',
                    date: '22/10/2013',
                    rate:0
                }]
        },
        $rootScope.voteUp = function (answer){
            answer.rate++;
        };
        $rootScope.voteDown = function (answer){
            answer.rate--;
        };
        $rootScope.dateAuth = {
            login: '',
            password: ''
        }
        $rootScope.authorizationButton = function (answer, AuthForm){
            debugger;
            if(AuthForm.$valid){
                alert("valid");
                console.log(answer.login)
                console.log(answer.password)
            }
            else {
                alert("invalid");
            }
        };
    })
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo: '/Auth'});
    }])
    .filter('filter_name', function() {
        return function (param) {
            return some_value;
        }
    })

