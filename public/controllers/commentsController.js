(function() {
  'use strict';

  angular.module('commentsControllers', ["firebase"])
      .controller('commentsController', commentsController)

  function commentsController($firebaseArray  ) {
    var commentsCtrl = this;

    var ref = new Firebase('https://sweltering-fire-9565.firebaseio.com/comments');

    commentsCtrl.comment = {};
    commentsCtrl.commentsDatabase = $firebaseArray(ref);

    // get all comments
    $firebaseArray(ref).$loaded().then(function (data) {
      commentsCtrl.comments = data;
    })

    // add comment
    commentsCtrl.addComment = function() {
      commentsCtrl.commentsDatabase.$add(commentsCtrl.comment)
      $firebaseArray(ref).$loaded().then(function (data) {
        commentsCtrl.comments = data;
      })
      commentsCtrl.comment = {};
    }

    commentsCtrl.cookie = function () {
      var cookie = "The welcome modal will no longer show"
      document.cookie = cookie
    }
  }
}());
