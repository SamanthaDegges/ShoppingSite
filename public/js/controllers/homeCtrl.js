var app = angular.module('app');

app.controller('homeCtrl', function($scope, $stateParams, $state, listingService) {
  $state.transitionTo('home.listings');
  $scope.listings;

  listingService.getListings().
  then(function(res) {
    console.log('res is: ', res.data);
    $scope.listings = res.data;
  }, function(err) {
    alert("error getting listing. Error: "+ err.data);
    console.log(err.data);
  })
  console.log('home ctrl is working.');




});
