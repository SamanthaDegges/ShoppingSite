var app = angular.module('app');

app.controller('homeCtrl', function($scope, $stateParams, $state) {
  console.log('home ctrl is working.');
 //$scope.listingsGrid = true; //listing Profile will hide
 $scope.listingProfile= true; //listing Grid will hide. This breaks footer.
  $state.transitionTo('home.listings');
});
