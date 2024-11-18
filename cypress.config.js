const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // Define a url principal do sistema
    viewportHeight: 720, // Altura base
    viewportWidth: 1280, // Largura base
    setupNodeEvents(on, config) {
    },
  },
});
