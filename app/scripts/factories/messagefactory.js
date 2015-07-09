(angular.module('messagesApp')
  .factory('MessageFactory', 
    function MessageFactory ($q, $http) { 
	'use strict';

	var exports = {};

		exports.getMessage = function(params) {
			if (params.id) { //Checks to see if there is an id on the params
				var deferred = $q.defer();
				$http.get('json/messages/' + params.id + '.json') //Params is passed in via the directive through $routeParams (passes in an entire object, not just id)
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject(data);
				})
				return deferred.promise;
			}
		};

		return exports;

  	}));