'use strict'

app.service("uploadService", function($http) {

  this.upload = function(input){
    var image = {
      name: input.file.originalname,
      url: input.url,
      file: input.file.buffer
    }
    return $http.post('/uploads', image);
  }

  this.getImages = function() {
    return $http.get('/uploads');
  };

});
