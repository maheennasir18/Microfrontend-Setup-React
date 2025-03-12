const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "demo",
    projectName: "app2",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
      "react-dom/client": "react-dom/client"
    }
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
