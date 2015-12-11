var app = angular.module('app');

app.controller('adminLoginCtrl', ['$scope','$auth','$socialLogin',function ($scope,$auth,$socialLogin) {
  console.log('adminCtrl is working.');
  $scope.login = "true";
  $scope.socialLoginProviders = [];

  $scope.toggleLogin = function(){
      console.log('login toggled,');
    return $scope.login = !$scope.login;
  }

  // Load list of social login providers from server.
  $socialLogin.getProviders().then(function(providers) {
    // Convert into an array.
    $scope.socialLoginProviders = Object.keys(providers).map(function(providerName) {
      var provider = providers[providerName];
      provider.name = providerName;
      return provider;
    });

    // Filter out the enabled providers.
    $scope.socialLoginProviders = $scope.socialLoginProviders.filter(function(provider) {
      return provider.enabled;
    });
  }).catch(function(err) {
    throw new Error('Could not load social providers from back-end: ' + err.message);
  });

  $scope.formModel = {
    username: '',
    password: ''
  };
  $scope.posting = false;
  $scope.submit = function(){
    $scope.posting = true;
    $scope.error = null;
    $auth.authenticate($scope.formModel)
      .catch(function(response){
        $scope.posting = false;
        $scope.error = response.data && response.data.error || 'An error occured when communicating with server.';
      });
  };
}]);

// 'use strict';
//
// angular.module('stormpath')
//
// .controller('SpLoginFormCtrl', ['$scope','$auth','$socialLogin',function ($scope,$auth,$socialLogin) {
//   $scope.socialLoginProviders = [];
//
//   // Load list of social login providers from server.
//   $socialLogin.getProviders().then(function(providers) {
//     // Convert into an array.
//     $scope.socialLoginProviders = Object.keys(providers).map(function(providerName) {
//       var provider = providers[providerName];
//       provider.name = providerName;
//       return provider;
//     });
//
//     // Filter out the enabled providers.
//     $scope.socialLoginProviders = $scope.socialLoginProviders.filter(function(provider) {
//       return provider.enabled;
//     });
//   }).catch(function(err) {
//     throw new Error('Could not load social providers from back-end: ' + err.message);
//   });
//
//   $scope.formModel = {
//     username: '',
//     password: ''
//   };
//   $scope.posting = false;
//   $scope.submit = function(){
//     $scope.posting = true;
//     $scope.error = null;
//     $auth.authenticate($scope.formModel)
//       .catch(function(response){
//         $scope.posting = false;
//         $scope.error = response.data && response.data.error || 'An error occured when communicating with server.';
//       });
//   };
// }])
