const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const dotEnvPath = isProduction ? ".env.production" : ".env.local";

  return {
    entry: "./src/index.tsx",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      chunkFilename: "[name].[contenthash].js",
    },
    mode: isProduction,
    devtool: isProduction ? false : "source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",

            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: isProduction
                    ? "[hash:base64:15]"
                    : "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name][ext][query]",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name][ext][query]",
          },
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new Dotenv({
        path: dotEnvPath,
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
          chunkFilename: "[name].[contenthash].css",
        }),
      isProduction && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      port: 3000,
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: isProduction,
            },
          },
        }),
      ],
      splitChunks: {
        chunks: "all",
        maxInitialRequests: 5,
        maxAsyncRequests: 5,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, ".webpack_cache"),
    },
  };
};
