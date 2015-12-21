var app = angular.module('app');

app.controller('adminDashCtrl', function($scope, listingService, uploadService) {
  console.log("adminDashCtrl is working.");
  $scope.uploads;

  // ACCORDION FUNCTIONALITY
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.newListing;

  $scope.submitListing = function(newListing) {
    console.log('submit triggered');
    listingService.createListing(newListing).
    then(function(res) {
      console.log('listing creation successful', res);
    }, function(err) {
      console.log('error occurred.', err);
      alert("Your listing did not go through. Error "+ err.data);
    });
  }

  $scope.showImages = function() {
    uploadService.getImages().
    then(function(res) {
      console.log('res is: ', res.data);
      $scope.uploads = res.data;
    }, function(err) {
      alert("There's been an error loading images from database. Error: ", err.data);
    });
  }

  // $scope.uploadFile = function(input) {
  //   $scope.image = input;
  //   console.log('Triggered. Input is: ', $scope.image);
  //   uploadService.upload($scope.image).
  //   success(function(res){
  //     console.log('input is: ', $scope.image);
  //     console.log(res);
  //   }).error(function(res){
  //     console.log(res);
  //   });
  // }

});
