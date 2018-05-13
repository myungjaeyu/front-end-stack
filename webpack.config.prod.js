const autoprefixer = require('autoprefixer'),
      HTMLWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      path = require('path');


module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [path.resolve('src/main.js')],
  resolve: { modules: [path.resolve('src'),
                       path.resolve('node_modules')],
             extensions: ['.js', '.jsx']},
  output: { path: path.resolve('dist'),
            filename: '[name].[hash].js',
            publicPath: ''},
  plugins: [ new CleanWebpackPlugin(['dist']),
             new MiniCssExtractPlugin({ filename: '[name].css'}),
             new HTMLWebpackPlugin({ template: path.resolve('public/index.html')})],
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader',
               options: { cacheDirectory: true}}},
      { test: /\.(css|scss|sass)$/,
        use: [ MiniCssExtractPlugin.loader,
              { loader: 'css-loader',
                options: { sourceMap: true }},
              { loader: 'postcss-loader',
                options: { sourceMap: true,
                plugins: () => [ autoprefixer({
                  browsers: [ '>1%',
                              'last 4 versions',
                              'Firefox ESR',
                              'not ie < 10']})]}},
              { loader: 'sass-loader',
                options: { sourceMap: true }}]},
      { test: /\.(jpe?g|png|gif|ico|svg|woff|woff2|ttf|eot|otf)$/i,
        use: [{ loader: 'file-loader',
                options: { name: '[name].[ext]'}}]}]}};