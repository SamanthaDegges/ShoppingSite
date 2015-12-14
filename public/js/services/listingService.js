'use strict'

app.service("listingService", function($http) {

  this.createListing = function(listing) {
    var newListing = {
      duration: {startDate: listing.startDate, endDate: listing.endDate},
      title: listing.title,
      description: listing.description,
      price: listing.priceNum,
      featuredImage: listing.featured,
      images: listing.images,
      status: listing.status,
      created: Date.now
    }
    return $http.post('/listings', newListing);
  }


  this.removeListing = function(listingId) {
    $http.delete('listings/:listingId', listingId).
    then(function(res) {
      alert("The listing has been removed.")
    }, function(err) {
      alert("Removal unsuccessful. Error: " + err.data);
      console.log(err.data);
    })
  }

  this.editListing = function(editData) {
    $http.put('/listings', editData).
    then(function(res) {
      alert('Your listing has been edited.')
    }, function(err) {
      alert('Updating this listing unsuccessful. Error: ' + err.data);
    })
  }

  this.getListings = function() {
    return $http.get('/listings');
  };

});
