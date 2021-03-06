module.exports = {
  entry: "./components/App.js",
  output: {
    filename: "public/javascripts/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }
};
