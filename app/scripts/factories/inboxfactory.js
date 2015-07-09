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
    function InboxFactory ($q, $http) { //Because InboxFactory is defined, I have access to InboxFactory in other spots
      var exports = {};

      // exports.unreadCount = function() {
      //   count = 0
      //   exports.status.length + count
      //   console.log(count)
      // }
 

      exports.messages = [];



      //Between lines 24 and 36, creates a function called getMessages that's getting exported, and then create a 
      //deferred object called deferred, and then make a call to this endpoint which is json, and then whenever you get
      //this response, add that to the messages array which is defined on line 15, and then resolve the promise with that
      //data as well. If there's an error, reject the promise.

      exports.getMessages = function () {
        var deferred = $q.defer();
        return $http.get('json/emails.json') // This is where a real backend would go in the future
          .success(function (data) {
            exports.messages = data; //Sends the messages into exports
            deferred.resolve(data); //And then resolve the data into a this and then function

          })
          .error(function (data) {
            deferred.reject(data);
          });

        return deferred.promise
      };

      exports.deleteMessage = function(id, index) { //Because of the two-way binding, this will now delete the messages.
        this.messages.splice(index, 1);
      };





      return exports;

  });
