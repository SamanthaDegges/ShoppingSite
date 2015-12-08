'use strict'

app.service("cartService", function($http) {

  this.purchase = function(purchaseData) {
    // var newPurchase = {
    //   submitDate: Date.now,
    //   item: purchaseData.item,
    //   images: item.images.featured,
    //   customerName: purchaseData.customerName
    // }
      return $http.post('/transactions', purchaseData);
  }

  this.removeTransaction = function(purchaseId) {
    $http.delete('/transactions/:transactionId', purchaseId).
    then(function(res) {
      alert("your item has been removed.")
    }, function(err) {
      alert("Removal unsuccessful. Error: " + err.data);
      console.log(err.data);
    })
  }

  this.editTransaction = function(editData) {
    $http.put('/transactions', editData).
    then(function(res) {
      alert('Your transaction has been edited.')
    }, function(err) {
      alert('Updating this transaction unsuccessful. Error: ' + err.data);
    })
  }

  this.getTransactions = function() {
    $http.get('/transactions').
    then(function(res) {
      console.log(res);
    }, function(err) {
      alert("error getting transactions. Error: "+ err.data);
      console.log(err.data);
    })
  }

});
