var prismApp = angular.module('prismApp', [
  'ngRoute',
  'prismControllers',
	'ngAnimate'
]);

prismApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'includes/all.html',
        controller: 'allCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      
    $routeProvider.
      when('/web', {
        templateUrl: 'includes/web.html',
        controller: 'webCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      
    $routeProvider.
      when('/print', {
        templateUrl: 'includes/print.html',
        controller: 'printCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      
      $routeProvider.
      when('/all', {
        templateUrl: 'includes/all.html',
        controller: 'allCtrl'
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
      $routeProvider.
      when('/breakpoint', {
        templateUrl: 'includes/blog/breakpoint.html',
        controller: 'blogCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
  }]);
prismApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/invitation', {
        templateUrl: 'invitation.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/ps-party', {
        templateUrl: 'ps-party.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/portfolio-web', {
        templateUrl: 'portfolio-web.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/steep-hills', {
        templateUrl: 'steep-hills.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/safe-sound', {
        templateUrl: 'safe-sound.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/roasting', {
        templateUrl: 'roasting.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/pov', {
        templateUrl: 'pov.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/60at6', {
        templateUrl: '60at6.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/instep', {
        templateUrl: 'instep.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/thankful', {
        templateUrl: 'thankful.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
    $routeProvider.
      when('/transform', {
        templateUrl: 'transform.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/brains', {
        templateUrl: 'brains.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/miraculous', {
        templateUrl: 'miraculous.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/apocalypse', {
        templateUrl: 'apocalypse.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/easter', {
        templateUrl: 'easter.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/story', {
        templateUrl: 'story.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
       $routeProvider.
      when('/we-believe', {
        templateUrl: 'we-believe.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/hope-island', {
        templateUrl: 'hope-island.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/did-you-know', {
        templateUrl: 'did-you-know.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
      $routeProvider.
      when('/tell-the-world', {
        templateUrl: 'tell-the-world.html',
        controller: 'workCtrl'
      }).
      otherwise({
        redirectTo: '/oops'
      });
  }]);

prismApp.directive('galleryThumbs', function() { return { restrict: 'E', templateUrl: 'includes/gallery.html' }; });