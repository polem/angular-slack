/* global describe, it, beforeEach, inject */
'use strict';

describe('slack', () => {
  beforeEach(module('angular-slack'));

  var Slack;
  var $httpBackend;

  beforeEach(inject($injector => {
    Slack =  $injector.get('Slack');
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('#notify', () => {

    it('should call http service with correct parameters', () => {

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
