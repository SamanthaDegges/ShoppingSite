var app = angular.module('app');

app.controller('homeCtrl', function($scope, $stateParams, $state, listingService) {
  $state.transitionTo('home.listings');

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
