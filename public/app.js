var app = angular.module('app', ['ui.router', 'stormpath', 'stormpath.templates', 'mm.foundation']);

app.config(function($stateProvider, $urlRouterProvider) { //, $locationProvider
  $urlRouterProvider.otherwise('/home');

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

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

app.run(function($stormpath, $rootScope, $state){
  $stormpath.uiRouter({
    loginState: 'adminLogin',
    defaultPostLoginState: 'adminDash',
    defaultPostLogoutState: 'home'
  });

  // $rootScope.$on('$sessionEnd', function() {
  //   $state.transitionTo('home');
  // });
});
