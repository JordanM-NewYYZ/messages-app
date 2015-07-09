(angular.module('messagesApp')
  .factory('MessageFactory', 
    function MessageFactory ($q) { 
	'use strict';

	var exports = {};

		exports.getMessage = function(params) {
			if (params.id) {
				var deferred = $q.defer();
				$http.get('json/message/' + params.id + '.json')
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
