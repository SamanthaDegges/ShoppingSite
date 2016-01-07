'use strict'

app.service("uploadService", function($http) {

  this.getImages = function() {
    return $http.get('/uploads');
  };

  this.assignImages = function(listing) {
    return $http.put('uploads', listing);
  }
  // this.submitImages = function(file) {
  //   return $http.post('/uploads', file);
  // }

});
