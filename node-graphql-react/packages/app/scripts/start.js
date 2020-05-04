const chalk = require('chalk');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const openBrowser = require('react-dev-utils/openBrowser');
const { paths } = require('../config');
const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config');
const WebpackDevServer = require('webpack-dev-server');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = parseInt(process.env.PORT, 10) || 3000;

const start = () => {
  const compiler = webpack(webpackConfig);
  const options = {
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());
    },
    clientLogLevel: 'none',
    compress: true,
    contentBase: paths.build,
    disableHostCheck: true,
    historyApiFallback: true,
    host: HOST,
    hot: true,
    injectClient: false,
    overlay: false,
    publicPath: '/',
    quiet: true,
    transportMode: 'ws',
  };
  const server = new WebpackDevServer(compiler, options);
  const urls = prepareUrls('http', HOST, PORT);

  server.listen(PORT, HOST, err => {
    if (err) {
      return console.log(err);
    }

    console.log(chalk.cyan('Starting the development server...\n'));

    return openBrowser(urls.localUrlForBrowser);
  });

  ['SIGINT', 'SIGTERM'].forEach(sig => {
    process.on(sig, () => {
      server.close();

      process.exit();
    });
  });
};

start();
