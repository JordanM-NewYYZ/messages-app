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
  	    this.title = "NTG Messaging"

  	    console.log(InboxFactory);

  });
