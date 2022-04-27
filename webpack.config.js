const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@service': path.resolve(__dirname, 'cypress/services'),
      '@page': path.resolve(__dirname, 'cypress/pages'),
    },
  },
};
