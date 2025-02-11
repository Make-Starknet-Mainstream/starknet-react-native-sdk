module.exports = require('./build/app.plugin');

// This file is used by Expo to configure the native modules and permissions
module.exports.default = (config) => {
  // Add required dependencies
  config = addExpoSecureStore(config);
  config = addExpoCrypto(config);
  return config;
};

function addExpoSecureStore(config) {
  if (!config.dependencies) {
    config.dependencies = [];
  }
  config.dependencies.push('expo-secure-store');
  return config;
}

function addExpoCrypto(config) {
  if (!config.dependencies) {
    config.dependencies = [];
  }
  config.dependencies.push('expo-crypto');
  return config;
}
