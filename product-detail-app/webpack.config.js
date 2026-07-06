const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  mode: "development",

  devServer: {
    port: 8082,
  },

  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".js", ".vue"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),

    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),

    new ModuleFederationPlugin({
      name: "productDetails",
      filename: "remoteEntry.js",

      exposes: {
        "./App": "./src/App.vue",
      },

      shared: {
        vue: {
          singleton: true,
        },
        "vue-router": { singleton: true },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
