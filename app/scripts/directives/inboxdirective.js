(angular.module('messagesApp')
  .directive('inbox', function InboxDirective () {
	'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "scripts/directives/inbox.tmpl.html",
      controllerAs: 'inbox',

      controller: function (InboxFactory) {
      	this.messages = [];
      	var ctrl = this;

      	this.deleteMessage = function(id, index) {	//Delegates the delete function into the InboxFactory
      		InboxFactory.deleteMessage(id, index);
      	};

      	this.goToMessage = function(id) {
      		InboxFactory.goToMessage(id);
      	}

      	InboxFactory.getMessages()	// This is going to do what I did in the controller earlier to retrieve the messages
      		.then(angular.bind(this, function then() { //The bind makes sure that the 'this' on line 24 and the 'this' on line 25 are the same
      			console.log(arguments)
      			this.messages = InboxFactory.messages;
      		}) );
      },

      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the InboxDirective directive');
      // }
    };
  }));
