// const { alias } = require("react-app-rewire-alias");

// module.exports = function override(config) {
//   alias({
//     "@components": "src/components"
//   })(config);

//   return config;
// };

const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components"
  })(config);

  // Thêm babel-plugin-module-resolver vào trong babel-loader
  config.module.rules[2].use[0].options.plugins.push([
    "module-resolver",
    {
      alias: {
        "@components": "./src/components"
      }
    }
  ]);

  return config;
};
