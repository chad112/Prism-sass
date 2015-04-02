var prismControllers = angular.module('prismControllers', []);

prismControllers.controller('allCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('').success(function(data) {
      $scope.phones = data;
			$scope.pageClass = 'page-all';
			$scope.click = function(){
    	$scope.active = true;
}
    });

    $scope.orderProp = 'age';
  }]);
prismControllers.controller('printCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
		$scope.pageClass = 'page-print';
  }]);
prismControllers.controller('webCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
		$scope.pageClass = 'page-web';
  }]);
prismControllers.controller('blogCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('blog.html').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);
prismControllers.controller('workCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('includes/gallery.html').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);