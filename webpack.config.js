var config = {
  entry: './app/main.js',
  output: {
    filename: './build/app.js'
  },
  module: {
            loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {
                presets: ['react', 'es2015']
              }
            }
            ]
          }
};

module.exports = config
