'use strict';

describe('Service: Ajax', function () {

  // load the service's module
  beforeEach(module('ezinvoiceApp'));

  // instantiate service
  var Ajax;
  beforeEach(inject(function (_Ajax_) {
    Ajax = _Ajax_;
  }));

  it('should do something', function () {
    expect(!!Ajax).toBe(true);
  });

});
