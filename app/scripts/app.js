'use strict';

/**
 * @ngdoc overview
 * @name messagesApp
 * @description
 * # messagesApp
 *
 * Main module of the application.
 */
angular
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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      })

      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .otherwise({
        redirectTo: '/inbox'
      });
  });
