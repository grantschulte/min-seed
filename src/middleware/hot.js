import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../../webpack.config";
import webpack from "webpack";

const bundler = webpack(config());

const middleware = [
  webpackDevMiddleware(bundler, {
    filename: config().output.filename,
    publicPath: config().output.publicPath,
    stats: {
      colors: true
    }
  })
];

export { middleware as wpMiddleware };
