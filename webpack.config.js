var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var PATHS = {
   srcjs: "src/js",
   distsrcjs: "dist/src/js"
};

module.exports = {
   entry: {
      app: path.resolve(__dirname, PATHS.srcjs + "/" + "app.jsx"),
      vendors: ['react', 'bootstrap']
   },
   output: {
      path: path.resolve(__dirname, PATHS.distsrcjs),
      filename: 'indexwp.js'
   },
   module: {
      loaders: [{
            test: /\.jsx/,
            loader: 'babel-loader'
         }
      ]
   }
};

