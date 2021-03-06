const webpack = require('webpack'),
      HTMLWebpackPlugin = require('html-webpack-plugin'),
      autoprefixer = require('autoprefixer'),
      path = require('path');


module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: ['react-dev-utils/webpackHotDevClient',
          path.resolve('src/main.js')],
  resolve: { modules: [path.resolve('src'),
                       path.resolve('node_modules')],
             extensions: ['.js', '.jsx']},
  output: { path: path.resolve('.tmp'),
            filename: '[name].js',
            publicPath: '/'},
  plugins: [ new webpack.HotModuleReplacementPlugin(),
             new HTMLWebpackPlugin({ template: path.resolve('public/index.html') })],
  devServer: { contentBase: '.tmp', hot: true, historyApiFallback: true, port: 3000},
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader',
               options: { cacheDirectory: true,
                          plugins: ['react-hot-loader/babel']}}},
      { test: /\.(css|scss|sass)$/,
        use: [ { loader: 'style-loader' },
               { loader: 'css-loader',
                 options: { sourceMap: true }},
               { loader: 'postcss-loader',
                 options: { sourceMap: true,
                            plugins: () => [ autoprefixer({ browsers: [ '>1%',
                                                                        'last 4 versions',
                                                                        'Firefox ESR',
                                                                        'not ie < 10']})]}},
               { loader: 'sass-loader',
                 options: { sourceMap: true }}]},
      { test: /\.(jpe?g|png|gif|ico|svg|woff|woff2|ttf|eot|otf)$/i,
        use: [ { loader: 'file-loader',
                 options: { name: '[name].[ext]' }}]}]}};