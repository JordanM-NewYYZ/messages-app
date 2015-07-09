'use strict';

/**
 * @ngdoc service
 * @name messagesApp.InboxFactory
 * @description
 * # InboxFactory
 * Factory in the messagesApp.
 */
angular.module('messagesApp')
  .factory('InboxFactory', 
    function InboxFactory ($http) {
      var exports = {};

      exports.messages = [];


      exports.getMessages = function () {
        return $http.get('json/emails.json'); // This is where a real backend would go in the future
      };






      return exports;

  });
