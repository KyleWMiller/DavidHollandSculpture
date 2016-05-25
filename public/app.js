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

    $urlRouterProvider.otherwise('/')
  }

function MainController() {
  $(document).ready(function(){
  $('.materialboxed').materialbox();
});
}

}());
