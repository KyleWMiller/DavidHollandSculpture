(function() {
  'use strict';

  angular.module('commentsControllers', ["firebase"])
      .controller('commentsController', commentsController)

  function commentsController($firebaseArray) {
    var commentsCtrl = this;

    var ref = new Firebase('https://sweltering-fire-9565.firebaseio.com/comments');

    commentsCtrl.comment = {};

    commentsCtrl.addComment = function() {
      console.log(commentsCtrl.comment);
      commentsCtrl.comment = {};
    }
  }
}());
