(function() {
  'use strict';

  angular.module('commentsControllers', ["firebase"])
      .controller('commentsController', commentsController)

  function commentsController($firebaseArray) {
    var commentsCtrl = this;

    // var ref = new Firebase('https://sweltering-fire-9565.firebaseio.com/comments');

    commentsCtrl.comment = {};
    commentsCtrl.comments = [{name: "Kyle Miller",
                              content: "I felt the complexity of this image based off of something that I felt/I am an art major and I know what I am talking about. This piece invoked this emotion and I am now a complete humanbeing. ...."},
                             {name: "Archit Mahto",
                              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad nesciunt commodi, magni adipisci architecto explicabo sit porro, odio dicta ipsa mollitia veniam in necessitatibus consequatur, quod assumenda fugiat, sapiente?"}];

    commentsCtrl.addComment = function() {
      commentsCtrl.comments.push(commentsCtrl.comment);
      commentsCtrl.comment = {};
    }
  }
}());
