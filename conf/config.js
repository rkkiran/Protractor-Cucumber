var reporter = require('cucumber-html-reporter');
 
exports.config = {
    directConnect:true,
    capabilities: {
      browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   
    onPrepare : async () => {
        await browser.manage().window().maximize();
        await browser.waitForAngularEnabled(false);

      },
    onComplete: async () => {       
        var options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber_report.json',
        output:   './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
    }    
   };
   reporter.generate(options); 
      setTimeout(() => {
        browser.close();
            }, 100);    
    },
    specs: ['../featureFiles/*.feature'],
   
    cucumberOpts: {
      format:'json:reports/cucumber_report.json',
      require: [ 
          '../stepDef/*.steps.js',
          '../hooks/*.js'
        ]
    }
  }