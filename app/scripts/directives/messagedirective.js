(angular.module('messagesApp')
  .directive('message', function MessageDirective () {
	'use strict';

    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: "scripts/directives/message.tmpl.html",
      controllerAs: 'message',

      controller: function ($routeParams, $scope, MessageFactory) {

      }
    }

  }));
