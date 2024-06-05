const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert'),
    os: require.resolve('os-browserify'),
    url: require.resolve('url'),
    fs: require.resolve('browserify-fs'),
    path: require.resolve('path-browserify'),
    vm: require.resolve('vm-browserify'),
  });
  config.ignoreWarnings = [/Failed to parse source map/];

  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
