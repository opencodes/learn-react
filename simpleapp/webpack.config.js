var webpack = require('webpack');  

var config = {
   entry: "./js/app.js",
    
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    
   devServer: {
      inline: true,
      port: 8080
   },
    
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
                
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
}

module.exports = config;