(function() {
  'use strict';

  angular.module('mailFactory', [])
    .factory('emailFactory', emailFactory)

  emailFactory.$inject = ['$http'];

  function emailFactory($http) {
    var emailData = {};
    var emailUrl  = '/sendEmail';

    emailData.send = function (email) {
      return $http.post(emailUrl, email);
    }

    return emailData;
  }
}());
