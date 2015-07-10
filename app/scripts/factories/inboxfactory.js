angular.module('messagesApp')
  .factory('InboxFactory',  
    function InboxFactory ($q, $http, $location) { //Because InboxFactory is defined, I have access to InboxFactory in other spots
    'use strict';
      var exports = {};

      // exports.unreadCount = function() {
      //   count = 0
      //   exports.status.length + count
      //   console.log(count)
      // }
 

      exports.messages = [];



        //Below: creates a function called getMessages that's getting exported, and then create a 
      //deferred object called deferred, and then make a call to this endpoint which is json, and then whenever you get
      //this response, add that to the messages array which is defined on line 15, and then resolve the promise with that
      //data as well. If there's an error, reject the promise.

      exports.getMessages = function () {
        var deferred = $q.defer();
        return $http.get('json/messages.json') // This is where a real backend would go in the future
          .success(function (data) {
            exports.messages = data; //Sends the messages into exports
            deferred.resolve(data); //And then resolve the data into a this and then function

          })
          .error(function (data) {
            deferred.reject(data);
          });

        return deferred.promise
      };

      exports.deleteMessage = function(id, index) { //Because of the two-way binding, this will now delete the messages. (Only removed from memory, not from the json)
        this.messages.splice(index, 1);
      };

      exports.showMessage = function(id) {
        if (angular.active.isNumber(id) ) {
          console.log('inbox/message/' + id);


          // $location.path('inbox/message/' + id) //Must add $location dependency. This is how to change routes
        }
      }





      return exports;

  });
