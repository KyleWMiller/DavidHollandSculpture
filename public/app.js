(function() {
  'use strict';

  angular.module('myApp', ['commentsControllers', 'galleryControllers', 'ui.router', 'firebase'])
    .config(MainRouter)


  function MainRouter($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: '/partials/slab.html',
        controller: 'commentsController as commentsCtrl'
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
      .state('Minatures', {
        url: '/Minatures',
        templateUrl: '/partials/minatures.html'
      })
      .state('EarlyExplorations', {
        url: '/EarlyExplorations',
        templateUrl: '/partials/earlyexplorations.html'
      })
      .state('BodyParts', {
        url: '/BodyParts',
        templateUrl: '/partials/bodyparts.html'
      })
      .state('EngineeringDetails', {
        url: '/EngineeringDetails',
        templateUrl: '/partials/engineeringdetails.html'
      })
      .state('Figures', {
        url: '/Figures',
        templateUrl: '/partials/figures.html'
      })
      .state('Linear', {
        url: '/Linear',
        templateUrl: '/partials/linear.html'
      })
      .state('StrangeMachines', {
        url: '/StrangeMachines',
        templateUrl: '/partials/strangemachines.html'
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


}());
