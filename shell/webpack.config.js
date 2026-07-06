const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  mode: "development",

  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },

  output: {
    publicPath: "/",
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
      name: "shell",
      remotes: {
        productList: "productList@https://vue-mfe-list.netlify.app/remoteEntry.js",
        productDetails: "productDetails@https://vue-mfe-detail.netlify.app/remoteEntry.js",
      },
      shared: {
        vue: { singleton: true },
        "vue-router": { singleton: true },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
