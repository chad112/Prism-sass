var prismControllers = angular.module('prismControllers', []);

prismControllers.controller('galleryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('includes/work.html').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);
prismControllers.controller('blogCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('blog.html').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);