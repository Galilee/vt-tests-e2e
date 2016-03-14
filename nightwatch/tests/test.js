'use strict';

require('./../../server.test')('./nightwatch/public');

module.exports = {
  'Demo application loaded': function (client) {
    client
      .url('http://localhost:3000')
      .pause('1000');

    client.expect.element('body').to.be.visible;
    client.assert.title('Test WatchNight');
    client.setValue('input[type=text]', 'test')
    client.click('a[id=submit]');
    client.expect.element('#list li').to.be.visible;
    client.end();
  },
};
