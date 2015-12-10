var app = angular.module('app');

app.controller('adminDashCtrl', function($scope) {
  console.log("adminDashCtrl is working.");

  // ACCORDION FUNCTIONALITY
   $scope.items = ['Item 1', 'Item 2', 'Item 3'];

   $scope.addItem = function() {
     var newItemNo = $scope.items.length + 1;
     $scope.items.push('Item ' + newItemNo);
   };
});
