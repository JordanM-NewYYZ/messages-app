(angular.module('messagesApp')
  .directive('message', function MessageDirective () {
	'use strict';

    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: "scripts/directives/message.tmpl.html",
      controllerAs: 'message',

      controller: function ($routeParams, $scope, MessageFactory) { //$routeParams is passed to messageFactory for use in .get
        this.message = {};


        var getmessage = MessageFactory.getMessage($routeParams);

        // if(getmessage) {
        //   getmessage.then(angular.bind(this, function (response) {
        //     MessageFactory.message = response;
        //     this.message = MessageFactory.message;
        //     $scope.$parent.message.subject = this.message.subject;
        //   }));
        // }

      },
    }

  }));
