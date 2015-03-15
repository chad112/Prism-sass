var prismApp = angular.module('prismApp', [
  'ngRoute',
  'prismControllers'
]);

prismApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'includes/work.html',
        controller: 'galleryCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
  }]);