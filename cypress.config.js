const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://start.upsiide.com/study/01m9a0vl/?language=en&audienceUuid=3ca5a27e-dca7-48f2-a540-34ae933afb12'
  },
});
