var app = angular.module('app');

app.controller('adminDashCtrl', function($scope, listingService, uploadService) {
  console.log("adminDashCtrl is working.");

  // ACCORDION FUNCTIONALITY
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.newListing;
  $scope.listingId;

  $scope.submitListing = function(newListing) {
    console.log('submit triggered');
    listingService.createListing(newListing).
    then(function(res) {
      console.log('listing creation successful', res);
      $scope.listingId = res.data._id;
      console.log('Id is: ', $scope.listingId);
    }, function(err) {
      console.log('error occurred.', err);
      alert("Your listing did not go through. Error "+ err.data);
    });
  };

  $scope.assignImages = function(listing) {
    console.log('assignImages triggered.');
    listingService.assignImages(listingId).
    then(function(res) {
      console.log('Images successfully assigned to this product listing.');
    }, function(err) {
      console.log('Error. Images unsuccessfully assigned to product listing.', err.data);
    })
  };

  // $scope.showImages = function() {
  //   uploadService.getImages().
  //   then(function(res) {
  //     console.log('res is: ', res.data);
  //     $scope.uploads = res.data;
  //   }, function(err) {
  //     alert("There's been an error loading images from database. Error: ", err.data);
  //   });
  // }
  // $scope.file;
  // $scope.submitImages = function(file) {
  //   console.log('submitImages triggered. Passing in: ', file);
  //   uploadService.submitImages(file).
  //   then(function(res) {
  //     console.log('submitForm res is: ', res);
  //     // $scope.images = res.data;
  //   }, function(err) {
  //     console.log('Error submitting form: ', err.data);
  //   });
  // }

});
