var app = angular.module('app');

app.controller('homeCtrl', function($scope, $stateParams, $state, listingService, cartService) {
  $state.transitionTo('home.listings');
  $scope.listings;

  $scope.check = "true";

  $scope.toggleShow = function() {
    return $scope.check = !$scope.check;
    console.log($scope.check);
  }

  listingService.getListings().
  then(function(res) {
    console.log('res is: ', res.data);
    $scope.listings = res.data;
  }, function(err) {
    alert("error getting listing. Error: " + err.data);
    console.log(err.data);
  })
  console.log('home ctrl is working.');

  // $scope.purchaseData = {
  //   submitDate: Date.now,
  //   item: 'itemId',
  //   images: [123,123,133],
  //   customerName: 'Samantha Blahblah'
  // }

// THIS WORKS BUT RUNS ON LOAD.
  // ADD THIS: $scope.purchase = function() {}

  //cartService.purchase($scope.purchaseData).
  // then(function(res) {
  //   console.log('purchase attempted', res);
  // }, function(err) {
  //   alert("Your transaction did not go through. Error "+ err.data);
  // });

});
