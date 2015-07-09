'use strict';

describe('Directive: InboxDirective', function () {

  // load the directive's module
  beforeEach(module('messagesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-inbox-directive></-inbox-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the InboxDirective directive');
  }));
});
