var app = angular.module('app');

app.controller('adminLoginCtrl', function($scope, $http) {
  console.log('adminCtrl is working.');
  $scope.login = "true";


  $scope.toggleLogin = function(){
      console.log('login toggled,');
    return $scope.login = !$scope.login;

  }
});
