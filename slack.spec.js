/* global describe, it, beforeEach, inject */
'use strict';

describe('slack', function () {

  beforeEach(module('angular-slack'));

  var Slack,
    $httpBackend;

  beforeEach(inject(function ($injector) {
    Slack =  $injector.get('Slack');
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('#notify', function () {

    it('should call http service with correct parameters', function () {

      var message = {
        'text':'Hello world',
        'channel':'@someone',
        'username':'angular-slack'
      };

      var data = {
        'payload': message
      };

      $httpBackend.expectPOST('https://myteam.slack.com/services/hooks/incoming-webhook?token=token', data, undefined).respond(201, '');

      Slack.notify('myteam', 'token', message);

      $httpBackend.flush();
    });
  });

});
