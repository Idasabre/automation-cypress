const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl : "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.js'
  },
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports", // Directory for storing reports
      overwrite: false,             // Do not overwrite existing reports
      html: true,                   // Generate an HTML report
      charts: true,                 // Include charts in the report
      timestamp: "mmddyyyy_HHMMss", // Unique report names
      json: true,                   // Generate a JSON report
      embeddedScreenshots: true,    // Embed screenshots in HTML
      inlineAssets: true,           // Embed screenshots and other assets in the report
    },
});
