angular.module('app', ['ngRoute'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
          $locationProvider.html5Mode(true);
          $routeProvider
          .when('/',   {templateUrl: 'views/default.html'})
          .when('/a', {templateUrl: 'views/a.html'})
          .when('/b', {templateUrl: 'views/b.html'})
          .when('/c', {templateUrl: 'views/c.html'})
          .otherwise({redirectTo: '/'});
        }]);