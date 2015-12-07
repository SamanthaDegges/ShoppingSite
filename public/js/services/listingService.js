'use strict'

app.service("listingService", function($http) {

  this.createListing = function(listing) {
    var newListing = {
      duration.startDate: listing.startDate,
      duration.endDate: listing.endDate,
      title: listing.title,
      description: listing.description,
      price: listing.Number,
      images: listing.images,
      status: listing.status,
      created: Date.now
    }
    $http.post('/', newListing).
    then(function(res) {
      console.log('listing creation successful', res);
    }, function(err) {
      alert("Your listing did not go through. Error "+ err.data);
    })
  }

  this.removeListing = function(listingId) {
    $http.delete('/:listingId', listingId).
    then(function(res) {
      alert("The listing has been removed.")
    }, function(err) {
      alert("Removal unsuccessful. Error: " + err.data);
      console.log(err.data);
    })
  }

  this.editListing = function(editData) {
    $http.put('/', editData).
    then(function(res) {
      alert('Your listing has been edited.')
    }, function(err) {
      alert('Updating this listing unsuccessful. Error: ' + err.data);
    })
  }

  this.getListings = function() {
    $http.get('/').
    then(function(res) {
      console.log(res);
    }, function(err) {
      alert("error getting listing. Error: "+ err.data);
      console.log(err.data);
    })
  }

});
