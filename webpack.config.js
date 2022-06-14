var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/index.tsx",
  },
  output: {
    path: path.join(__dirname, "../dist"),
    //note: we changed `bundle` name into a variable `[name]` to get the key values in `entry` property instead of declaring the name statically.
    //[chunkhash] - this is a large string of characters that uses hash. If vendor or javascript files were updated, webpack will automatically bundle the contents of the file then generate a different hash.
    filename: "bundle.tsx",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
        },
        test: /\.js$/,
        exclude: /node_modules/, //excludes node_modules folder from being transpiled by babel. We do this because it's a waste of resources to do so.
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    //`manifest` - Gives the browser a better understanding that tells whether the vendor file has actually got changed.
    // new webpack.optimize.CommonsChunkPlugin({
    //     names: ['vendor', 'manifest']
    // }), //We need to include this plugin so that it never duplicates the libraries that were included in `vendor.js` within `bundle.js` as well
    new HtmlWebpackPlugin({
      template: "src/index.tsx",
    }), //this plugin is responsible for injecting the entry scripts of webpack (such as `bundle.js` and `vendor.js`) inside the html file without specifying them manually.
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV), //we will set the correct variable for `process.env.NODE_ENV` variable inside the `scripts` property in `package.json`
    }), //This adds windows-scoped variables that will be defined in bundle.js
    // new BundleAnalyzerPlugin()
  ],
};
