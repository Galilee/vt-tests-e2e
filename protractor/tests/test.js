'use strict';

require('./../../server.test')('./protractor/public');

describe('Demo application loaded', function () {
  it('should add one and two', function () {
    browser.get('http://localhost:3000');

    var input = element(by.model('form.input'));
    var submit = element(by.id('submit'));
    var result = element.all(by.repeater('input in inputs'));

    var keys = ['test', 'test2'];

    keys.forEach(function (key)  {
      input.sendKeys(key);
      submit.click();
    });

    expect(result.count()).toEqual(keys.length);
  });
});
