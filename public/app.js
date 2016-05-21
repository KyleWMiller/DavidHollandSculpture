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

    $urlRouterProvider.otherwise('/')
  }

}());
