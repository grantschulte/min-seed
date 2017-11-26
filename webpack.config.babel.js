import path from "path";
import webpack from "webpack";
import { dirs, wpConfig, config } from "./src/config";

import ExtractTextPlugin from "extract-text-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import UglifyWebpackPlugin from "uglifyjs-webpack-plugin";
import { default as ImageminPlugin } from "imagemin-webpack-plugin";

module.exports = (env) => {

  // Get environment specifc env vars. Alternatively, you
  // can use the env variable passed into this module via
  // the webpack cli call. At this time, we're using the
  // applications config env variable set by .env:

  const envVars = wpConfig(config.env);

  // Return webpack config object:

  return {
    entry: {
      "app": [
        path.join(dirs.src.assets, "index.js")
      ]
    },

    output: {
      path: dirs.build.public,
      filename: "scripts/[name].js",
      publicPath: "/"
    },

    module: {
      rules: [
        {
          test:/\.(s*)css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: "postcss-loader?parser=postcss-scss",
                options: {
                  plugins: [
                    require("autoprefixer")(),
                    require("postcss-clean")()
                  ]
                }
              },
              "sass-loader"
            ]
          })
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff",
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: `file-loader?name=${dirs.public}/fonts/[name].[ext]`
        },
        {
          test: /\.(ico|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: `file-loader?name=${dirs.public}/images/[name].[ext]`
        }
      ]
    },

    /*
     * Resolve module folders. This allows us to import files into
     * other files (in the client directory) without messy relative paths.
     */

    resolve: {
      modules: [
        "node_modules"
      ]
    },

    plugins: [
      new webpack.DefinePlugin(envVars),
      new ExtractTextPlugin({
        filename: "styles/[name].css"
      }),
      new CopyWebpackPlugin([
        {
          from: `${dirs.src.assets}/images/**/*`,
          to: `${dirs.build.public}/images`,
          flatten: true
        },
        {
          from: `${dirs.src.assets}/fonts/**/*`,
          to: `${dirs.build.public}/fonts`,
          flatten: true
        }
      ]),
      new UglifyWebpackPlugin(),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i
      })
    ],

    devtool: "source-map",

    stats: {
      colors: true
    }
  };
};
