const withTM = require("next-transpile-modules")(["ui", "utils"]);

module.exports = withTM({
  images: {
    domains: ["i.ibb.co"],
  },
  reactStrictMode: true,
});
