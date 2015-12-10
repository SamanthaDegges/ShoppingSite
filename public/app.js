var app = angular.module('app', ['ui.router', 'stormpath', 'stormpath.templates', 'mm.foundation']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'partials/home.html',
    controller: 'homeCtrl'
  })

  .state('home.listings', {
    templateUrl: 'partials/home.listings.html',
    controller: 'listingsCtrl'
  })

  .state('adminLogin', {
    url: '/adminLogin',
    templateUrl: 'partials/adminLogin.html',
    controller: 'adminLoginCtrl'
  })

  .state('adminDash', {
    sp: { authenticate: true },
    url: '/adminDash',
    templateUrl: 'partials/adminDash.html',
    controller: 'adminDashCtrl'
  })
});

app.run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'adminLogin',
    defaultPostLoginState: 'adminDash',
    defaultPostLogoutState: 'home'
  });
});
