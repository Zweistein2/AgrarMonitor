/* eslint-disable */
const fs = require("fs");
const {DefinePlugin} = require("webpack");
const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;

module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: "de",
      fallbackLocale: "en",
      localeDir: "",
      enableLegacy: false,
      runtimeOnly: true,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        "process.env": {
          PACKAGE_VERSION: '"' + version + '"',
        },
      }),
    ],
  },
};
