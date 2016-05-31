(function() {
  'use strict';

  angular.module('myApp', ['ui.router'])
    .config(MainRouter)
    .controller(MainController)


  function MainRouter($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: '/partials/slab.html'
      })
      .state('About', {
        url: '/About',
        templateUrl: '/partials/about.html'
      })
      .state('Contact', {
        url: '/Contact',
        templateUrl: '/partials/contact.html'
      })
      .state('Gallery', {
        url: '/Gallery',
        templateUrl: '/partials/gallery.html'
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
