const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rv3za4',
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // retries: 1,
    baseUrl: 'http://qamid.tmweb.ru'
  },
});