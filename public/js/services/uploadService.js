'use strict'

app.service("uploadService", function($http) {

  this.getImages = function() {
    return $http.get('/uploads');
  };

  // this.submitImages = function(file) {
  //   return $http.post('/uploads', file);
  // }

});
