var app = angular.module('app');

app.controller('listingsCtrl', function($scope, listingService) {
  console.log('ctrl is working.');

  $scope.listings;
  $scope.check = "true";

  $scope.toggleShow = function(listing) {
    $scope.check = !$scope.check;
    $scope.listing = listing;
    console.log('listing is: ', $scope.listing);
  }

  listingService.getListings().
  then(function(res) {
    console.log('res is: ', res.data);
    $scope.listings = res.data;
    $scope.images = ['http://placehold.it/300x100&text=[300x100]','http://placehold.it/400x300&text=[400x300]']
  }, function(err) {
    alert("Error getting listing. Error: " + err.data);
    console.log(err.data);
  });

});
