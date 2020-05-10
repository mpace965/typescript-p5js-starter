const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCdnPlugin = require("webpack-cdn-plugin");

module.exports = (env, argv) => {
  const optMin = argv.mode === "production" ? ".min" : "";

  return {
    entry: "./src/index.ts",
    devtool: "source-map",
    devServer: {
      host: "0.0.0.0",
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new WebpackCdnPlugin({
        modules: [
          {
            name: "p5",
            var: "p5",
            path: `lib/p5${optMin}.js`,
          },
        ],
        publicPath: "/node_modules",
        prod: argv.mode === "production",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      sourceMapFilename: "bundle.js.map",
      publicPath: ".",
    },
  };
};
