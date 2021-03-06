var config = {
   entry: './app/js/main.js',
    
   output: {
      path:'./public/js',
      filename: 'bundle.js'
   },
    
   devServer: {
      inline: true,
      port: 8080
   },
    
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
                
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;