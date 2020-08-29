// 读取当前配置
const path = require('path')
// 引用插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    // 输出名称
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}