module.exports = function() {
  return {
    clientAllowedKeys: ['AUTH_KEY'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false
  };
};
