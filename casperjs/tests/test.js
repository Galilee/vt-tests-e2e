'use strict';

casper.test.begin('Demo Application', 4, function suite(test) {
  casper.start("http://localhost:3000", function () {
    test.assertHttpStatus(200, "Web server returned page correctly");
    test.assertTitle("Test CasperJS", "Demo APP homepage title is the one expected");
    test.assertExists('form', "main form is found");
    this.fill('form', {
      input: "test"
    }, true);
  });

  casper.then(function () {
    test.assertEval(function () {
      return __utils__.findAll("#list > li").length == 1;
    }, "We retrieve 1 item");
  });

  casper.run(function () {
    test.done();
  });
});
