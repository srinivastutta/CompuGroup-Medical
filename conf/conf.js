// An example configuration file.
var HtmlScreenshotReporter = require('C:\\Users\\pc\\node_modules\\protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});


exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  },

  framework: 'jasmine',

  specs: ['../tests/loginTest.js'],

  params: {
    url: 'https://demo.clickdoc.de/cms-de/',
    validUserId: 'dirk.nonn@cgm.com#1111',
    validPassword: 'recruitingTest1!',
    invalidUserId: 'testmail.com',
    invalidPassword: 'abcdefg',
    userName: 'Max Mustermann',
    userProfileTitle: 'Mein Profil | CLICKDOC',
    emptyResultMessage: 'AUF DER LINKEN SEITE KANNST DU DIE ARZTSUCHE STARTEN.'

  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 80000
  },
  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {
    var jasmineReporters = require('C:\\Users\\pc\\node_modules\\jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    var fs = require('C:\\Users\\pc\\node_modules\\fs-extra');

    fs.emptyDir('screenshots/', function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  //HTMLReport called once tests are finished
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('C:\\Users\\pc\\node_modules\\protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }
};
