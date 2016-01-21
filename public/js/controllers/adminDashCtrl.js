var app = angular.module('app');

app.controller('adminDashCtrl', function($scope, listingService, uploadService) {

  $scope.newListing;
  $scope.listingId;
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  Date.prototype.toDateInputValue = function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  };
  $scope.minDate = new Date().toDateInputValue();

  $scope.submitListing = function(newListing) {
    listingService.createListing(newListing).
    then(function(res) {
      if (res.data.errors) {
        alert("Error creating this listing. The following fields are required: " + Object.keys(res.data.errors) + '.' );
      } else {
        alert("Listing was successfully created. Database id#: " + res.data._id + '.');
        console.log(res.data);
        $scope.listingId = res.data._id;
      }
    }, function(err) {
      console.log('Error occurred in POST request: ', err);
      alert("Your listing did not go through. Error "+ err.data);
    })
  };

});
