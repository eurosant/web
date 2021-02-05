const fs = require("fs");
const merge = require("webpack-merge");
const dev = require("./webpack.dev.js");

module.exports = merge(dev, {
  devServer: {
    port: 8080,
    host: 'localhost',
    https: true,
    key: fs.readFileSync('./private/apartamentosplayasanjuan.es+4-key.pem'),
    cert: fs.readFileSync('./private/apartamentosplayasanjuan.es+4.pem'),
    ca: fs.readFileSync('./private/CA.pem'),
  },
});
