const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "css", to: "css" },
        { from: "js/vendor", to: "js/vendor" },
        { from: "icon.svg", to: "icon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "404.html", to: "404.html" },
        { from: "about.html", to: "about.html" },
        { from: "musicians.html", to: "musicians.html" },
        { from: "concerts.html", to: "concerts.html" },
        { from: "contact.html", to: "contact.html" },
        { from: "Alex.html", to: "Alex.html" },
        { from: "Charis.html", to: "Charis.html" },
        { from: "Lily.html", to: "Lily.html" },
        { from: "Paddy.html", to: "Paddy.html" },
        { from: "Isabella.html", to: "Isabella.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
      ],
    }),
  ],
});
