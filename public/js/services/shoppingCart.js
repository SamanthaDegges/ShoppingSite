'use strict'

app.service("shoppingCart", function($http) {

  this.purchase = function(purchaseData) {
    var newPurchase = {
      submitDate: Date.now,
      item: cart.itemId,
      images: item.images.featured,
      customerName: cart.name
    }
      $http.post('/transactions', newPurchase).
      then(function(res) {
        console.log('purchase successful', res);
      }, function(err) {
        alert("Your transaction did not go through. Error "+ err.data);
      })
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
