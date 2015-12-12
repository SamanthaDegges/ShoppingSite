var app = angular.module('app');

app.controller('homeCtrl', function($scope, $stateParams, $state, listingService) {
  $state.transitionTo('home.listings');
  // $scope.listings;
  //
  // $scope.check = "true";
  //
  // $scope.toggleShow = function(listing) {
  //   $scope.check = !$scope.check;
  //   $scope.listing = listing;
  //   console.log('listing is: ', $scope.listing);
  // }
  //
  // listingService.getListings().
  // then(function(res) {
  //   console.log('res is: ', res.data);
  //   $scope.listings = res.data;
  //   $scope.images = ['http://placehold.it/300x100&text=[300x100]','http://placehold.it/400x300&text=[400x300]']
  // }, function(err) {
  //   alert("error getting listing. Error: " + err.data);
  //   console.log(err.data);
  // })
  // console.log('home ctrl is working.');

  $('.carousel').slick({
    autoplay: true,
    speed: 3000,
    cssEase: 'ease',
    fade: true,
    draggable: true,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false
  });

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
