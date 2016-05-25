(function() {
  'use strict';

  angular.module('myApp', ['ui.router'])
    .config(MainRouter)


  function MainRouter($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
      .state('HomePage', {
        url: '/',
        templateUrl: '/partials/home.html'
      })
      .state('About', {
        url: '/About',
        templateUrl: '/partials/about.html'
      })
      .state('Contact', {
        url: '/Contact',
        templateUrl: '/partials/contact.html'
      })

    $urlRouterProvider.otherwise('/')
  }

}());
