const path = require('path'); // eslint-disable-line jsx-a11y/href-no-hash
const config = require('./webpack.config');
const express = require('./server/config/express.js');

const port = process.env.PORT || 5555;
const app = express();

console.log('process.env.NODE_ENV --> --> ', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(config);
  const webpackMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(webpackMiddleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('/', (req, res) => {
    const html = webpackMiddleware.fileSystem.readFileSync(path.join(__dirname, '/app/index.html')).toString();
    res.write(html);
    res.end();
  });
}

// ROUTES //
require('./server/api/pets/pets.routes')(app);

app.get('/api/v1/test', (req, res) => {
  res.status(200).send('Light \'em up! We good to go!');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'server/public/index.html'));
});

app.listen(port, () => {
  console.log('get-all-pets Listening on port', port);
});
