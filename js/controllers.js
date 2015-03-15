var prismControllers = angular.module('prismControllers', []);

phonecatControllers.controller('galleryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('includes/work.html').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);