angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('petition', {
    url: '/petition',
    templateUrl: 'templates/petition.html',
    controller: 'petitionCtrl'
  })

  .state('myGovernment', {
    url: '/myGovernment',
    templateUrl: 'templates/myGovernment.html',
    controller: 'myGovernmentCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('changePassword', {
    url: '/changePassword',
    templateUrl: 'templates/changePassword.html',
    controller: 'changePasswordCtrl'
  })

  .state('signup', {
    url: '/signUp',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('whatSNew', {
    url: '/WhatsNew',
    templateUrl: 'templates/whatSNew.html',
    controller: 'whatSNewCtrl'
  })

  .state('allBills', {
    url: '/allBills',
    templateUrl: 'templates/allBills.html',
    controller: 'allBillsCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});