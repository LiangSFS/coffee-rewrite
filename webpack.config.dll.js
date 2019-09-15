/**
 *  Created by liangsfs on 2019-09-15
 */
//   ！！ 注意 ！！  在生产环境下 先打包生成dll文件

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dllPath = path.resolve(__dirname, './src/assets/dll') // dll文件存放目录

module.exports = {
  mode: 'production',
  entry: {
    // 把该项目公共不变库组合在一起
    vue: ['vue', 'vue-router', 'vuex', 'axios', 'swiper']
  },
  output: {
    filename: '[name]~[hash].dll.js', // 生成的dll 文件名
    path: dllPath,
    library: '_dll_[name]' // output.library支持输入string或者object(从 webpack 3.1.0 版本开始支持; 限于 libraryTarget: “umd” 时使用)类型的值。output.library的值被如何使用会根据output.libraryTarget的取值不同而不同。而默认output.libraryTarget的取值是var，如果如下配置：output: {library: "myDemo"} 如果在 HTML 页面中使用script标签引入打包结果文件，那么变量myDemo对应的值将会是入口文件(entry file)的返回值。

  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*.js'], // 清除之前旧的dll文件
      root: dllPath
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, './', '[name].dll.manifest.json') // manifest.json 描述动态链接库包含了哪些内容
    })

  ]

}
