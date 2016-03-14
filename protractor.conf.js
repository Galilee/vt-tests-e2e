'use strict';

module.exports.config = {
  framework: 'jasmine',
  specs: ['protractor/tests/**/*.js'],
  seleniumServerJar: './bin/selenium-server-standalone-2.52.0.jar',
  chromeDriver: './bin/chromedriver',
  capabilities: {
    'browserName': 'chrome'
  },
}
