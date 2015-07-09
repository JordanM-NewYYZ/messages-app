'use strict';

/**
 * @ngdoc service
 * @name messagesApp.email
 * @description
 * # email
 * Factory in the messagesApp.
 */
angular.module('messagesApp')
  .factory('EmailFactory', 
    function EmailFactory () {
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
