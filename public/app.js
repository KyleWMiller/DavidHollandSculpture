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
      .state('Artwork', {
        url: '/Artwork',
        templateUrl: '/partials/artwork.html'
      })
      .state('BodyBuilding', {
        url: '/BodyBuilding',
        templateUrl: '/partials/bodybuilding.html'
      })
      .state('Bodies', {
        url: '/Bodies',
        templateUrl: '/partials/bodies.html'
      })
      .state('ReadAboutIt', {
        url: '/ReadAboutIt',
        templateUrl: '/partials/readaboutit.html'
      })
      .state('RecentWork', {
        url: '/RecentWork',
        templateUrl: '/partials/recentwork.html'
      })
      .state('EarlyExplorations', {
        url: '/EarlyExplorations',
        templateUrl: '/partials/earlyexplorations.html'
      })
      .state('BodyMap', {
        url: '/BodyMap',
        templateUrl: '/partials/bodymap.html'
      })
      .state('Stonework', {
        url: '/Stonework',
        templateUrl: '/partials/stonework.html'
      })
      .state('Installations', {
        url: '/Installations',
        templateUrl: '/partials/installations.html'
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
