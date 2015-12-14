var app = angular.module('app');

app.controller('adminDashCtrl', function($scope, listingService) {
  console.log("adminDashCtrl is working.");

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

});
