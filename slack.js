'use strict';

angular.module('angular-slack', [])
.factory('Slack', ['$http', function ($http) {

  var Slack = function() {
  };

  Slack.prototype.notify = function (team, token, message) {

    var config = {
      'params' : {
        'token': token
      },
      'headers': {'Content-Type': 'application/x-www-form-urlencoded'}
    };

    var data = {
      'payload': message
    };

    return $http.post('https://' + team + '.slack.com/services/hooks/incoming-webhook', data, config);

  };

  return new Slack();
}]);

