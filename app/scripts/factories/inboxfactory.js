'use strict';

/**
 * @ngdoc service
 * @name messagesApp.InboxFactory
 * @description
 * # InboxFactory
 * Factory in the messagesApp.
 */
angular.module('messagesApp')
  .factory('InboxFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
