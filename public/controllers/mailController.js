(function() {
  'use strict';

  angular.module('mailControllers', [])
    .controller('mailController', mailController)

  mailController.$inject = ['emailFactory']

  function mailController(emailFactory) {
    var mailCtrl = this;

    mailCtrl.email = {};

    mailCtrl.sendEmail = function() {

      emailFactory.send(mailCtrl.email)
        .then(function(response) {
          // console.log(response)
          mailCtrl.email = {};
          console.log("Successfully sent email.");
        })
    }
  }
}());
