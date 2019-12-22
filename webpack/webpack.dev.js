const merge = require('webpack-merge');
import commonConfig from './webpack.common';

module.exports = merge(commonConfig, {
  mode: 'development',
});