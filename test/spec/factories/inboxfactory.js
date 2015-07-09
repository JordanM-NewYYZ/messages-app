'use strict';

describe('Service: InboxFactory', function () {

  // load the service's module
  beforeEach(module('messagesApp'));

  // instantiate service
  var InboxFactory;
  beforeEach(inject(function (_InboxFactory_) {
    InboxFactory = _InboxFactory_;
  }));

  it('should do something', function () {
    expect(!!InboxFactory).toBe(true);
  });

});
