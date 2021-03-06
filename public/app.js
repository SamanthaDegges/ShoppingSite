var app = angular.module('app', ['ui.router', 'stormpath', 'stormpath.templates', 'mm.foundation']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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

  .state('forgot', {
      url: '/forgot',
      templateUrl: 'partials/forgot-password/forgot-password.html'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'partials/about.html',
    controller: 'aboutCtrl'
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
    defaultPostLoginState: 'adminDash'
  });

  $rootScope.$on('$sessionEnd', function() {
    $state.transitionTo('home');
  });
});
