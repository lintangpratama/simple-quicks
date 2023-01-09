/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Api": path.resolve(__dirname, "src/api"),
      "@Utils": path.resolve(__dirname, "src/utils"),
      "@Data": path.resolve(__dirname, "src/data"),
      "@Config": path.resolve(__dirname, "src/config"),
    },
  },
};