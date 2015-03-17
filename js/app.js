var prismApp = angular.module('prismApp', [
  'ngRoute',
  'prismControllers'
]);

prismApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'includes/all.html',
        controller: 'galleryCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      
    $routeProvider.
      when('/web', {
        templateUrl: 'includes/web.html',
        controller: 'galleryCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      
    $routeProvider.
      when('/print', {
        templateUrl: 'includes/print.html',
        controller: 'galleryCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      
      $routeProvider.
      when('/all', {
        templateUrl: 'includes/all.html',
        controller: 'galleryCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
  }]);

prismApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/blog', {
        templateUrl: 'blog.html',
        controller: 'blogCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
  }]);
