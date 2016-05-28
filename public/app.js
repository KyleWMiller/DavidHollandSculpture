(function() {
  'use strict';

  angular.module('myApp', ['ui.router'])
    .config(MainRouter)
    .controller(MainController)


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
      .state('Slab', {
        url: '/Slab',
        templateUrl: '/partials/slab.html'
      })

    $urlRouterProvider.otherwise('/')
  }

function MainController() {
  
  // Javascript for the image pop out
  $(document).ready(function(){
  $('.materialboxed').materialbox();
})

}

}());
