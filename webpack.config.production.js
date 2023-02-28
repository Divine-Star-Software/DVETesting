const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: 'production',
  target: "web",
  entry: "./compiled/prod/client/index.js",
  output: {
    filename: "DVE.js",
    path: path.resolve(__dirname, "debug/electron/app/PROD"),
  },
  externals: {
    worker_threads: "commonjs worker_threads",
    perf_hooks: "commonjs perf_hooks",
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
   optimization: {
    minimizer: [new TerserPlugin({})],
  }, 
};
