'use strict';

/**
 * @ngdoc function
 * @name messagesApp.controller:InboxctrlCtrl
 * @description
 * # InboxctrlCtrl
 * Controller of the messagesApp
 */
angular.module('messagesApp')
  .controller('InboxCtrl', 
  	function InboxCtrl (InboxFactory) {
  	console.log(InboxFactory)

  	    InboxFactory.getMessages().success(function(data) {
  	    	debugger;
  	    })

  	    this.title = "NTG Messaging"
  });
