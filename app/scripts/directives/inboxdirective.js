'use strict';

/**
 * @ngdoc directive
 * @name messagesApp.directive:InboxDirective
 * @description
 * # InboxDirective
 */
angular.module('messagesApp')
  .directive('inbox', function InboxDirective () {

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "scripts/directives/inbox.tmpl.html",
      controllerAs: 'inbox',

      controller: function (InboxFactory) {
      	this.messages = [];
      },

      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the InboxDirective directive');
      // }
    };
  });
