const CracoAlias = require("craco-alias");

module.exports = {
  Plugin: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: ".",
        jsConfigPath: "jsconfig.paths.json",
        debug: false,
      },
    },
  ],
};
