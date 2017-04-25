const path = require('path');
const root = path.resolve(__dirname);

module.exports = {
  entry: './client/app.jsx',

  output: {
    filename: 'app.js',
    path: path.resolve(root, 'public', 'javascripts/')
  },

  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }

};
