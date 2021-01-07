const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: 'http://127.0.0.1:8000',
  },
  chainWebpack: config => {
    config.resolve.alias.set('@hieroglify', path.resolve(__dirname, 'externalLibs'));
  }
};
