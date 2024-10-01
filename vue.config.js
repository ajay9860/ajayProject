const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 8000
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        http: 'axios'
      })
    ]
  }
};
