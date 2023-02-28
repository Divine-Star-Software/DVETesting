const path = require("path");
module.exports = {
  mode: "development",
  target: "web",
  entry: "./compiled/client/index.js",
  output: {
    filename: "DVE.js",
    path: path.resolve(__dirname, "debug/electron/app/DVE"),
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

  devtool: "source-map",
  watch: true,
};
