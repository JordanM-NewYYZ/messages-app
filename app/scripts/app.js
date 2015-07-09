(angular
  .module('messagesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      })
      .otherwise({
        redirectTo: '/inbox'
      });
  }));
