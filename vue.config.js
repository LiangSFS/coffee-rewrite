// const webpack = require('webpack')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 路径处理函数
function resolve (dir) {
  return path.join(__dirname, './', dir)
}

// 设置BASE_URL
// (function setBaseUrl(mode) {
//   process.env.BASE_URL = mode === "production"? "./":"./";
// }(envMode ()))

// 当dll 变化时 add-asset-html-webpack-plugin 插件 自动重新导入
// const autoAddDllRes = function () {
//   const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
//   return new AddAssetHtmlPlugin([{ // 往html中注入dll js
//     publicPath: './dll/', // 注入到html中的路径
//     outputPath: 'dll', // 最终输出的目录
//     filepath: resolve('src/assets/dll/*.js'),
//     includeSourceMap: false,
//     typeOfAsset: 'js' // options js、css; default js
//   }])
// }

module.exports = {
  publicPath: envMode() === 'production' ? '/coffee-rewrite/' : '/', // 当静态资源和HTML文件都放在服务器上的直接子路径
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: envMode() === 'production',
  productionSourceMap: false,
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://easy-mock.com/mock/5d7f67c2fab82468ca6debb1/eg',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  css: {
    // extract: true   //默认 生产环境下是 true，开发环境下是 false
    loaderOptions: {
      css: {
        // filename: "./static/[name]~[contenthash:4].css"
      }
    }
  },
  chainWebpack: config => { // 当 prefetch 插件被禁用时，你可以通过 webpack 的内联注释手动选定要提前获取的代码区块：import(/* webpackPrefetch: true */ './someAsyncComponent.vue')
  //   // 移除 prefetch 插件     // Prefetch 链接将会消耗带宽。如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。
  //   config.plugins.delete('prefetch')
  //
  //   // 或者
  //   // 修改它的选项：
  //   config.plugin('prefetch').tap(options => {
  //     options[0].fileBlacklist = options[0].fileBlacklist || []
  //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
  //     return options
  //   })

    // set  svg-sprite-loader
    // babel 不对 icons 文件夹中的文件做处理
    // config.module.rule('js')
    //   .test(/\.js$/)
    //   .use('babel-loader')
    //   .exclude.add(resolve('src/assets/icons'))
    //   .end()

    const svgRule = config.module.rule('icons')

    // 清除已有的 所有loader
    svgRule.uses.clear()
    // 添加要替换的loader    只处理 icons 中的 svg 文件
    svgRule.include.add(resolve('src/assets/icons'))
      .end()
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // 开启图片压缩
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        // bypassOnDebug: ture,  //webpack@1.x   Using this, no processing is done when webpack 'debug' mode is used and the loader acts as a regular file-loader
        disable: true // same functionality as bypassOnDebug webpack@2.x and newer
      })
      .end()

    // console.log(options, options.pluginOptions);
    // 开启 css 和 html压缩
    if (envMode() === 'production') {
      config.plugin('compressionPlugin')
        .use(new CompressionPlugin({ // 配置 css 和 html压缩
          test: /\.html$|\.css/, // 匹配文件名
          threshold: 1024, // 对超过1k(1024)的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }))
        .end()
    }
  },
  configureWebpack: {
    // entry: envMode() === 'production' ? './src/main.js' : './src/main.dev.js',
    // output: {
    //   filename: './static/[name].[hash:4].js'
    // },
    optimization: {
      minimize: envMode() === 'production', // 开发环境不压缩
      splitChunks: {
        chunks: 'all', // 共有三个值 initial (初始模块) 、 async (按需加载模块) 和 all (全部模块)
        // minSize: 30000, // 模块超过30k自动被抽离成公共模块
        // minChunks: 1, // 模块被引入 >= 1 次 , 便分割
        // maxAsyncRequests: 5, // 异步加载chunk的并发请求数量<= 5
        // maxInitialRequests: 3, // 一个入口并发加载的 chunk熟练 <= 3  //为了满足这两个条件，webpack有可能受限于包的最大数量值，生成的代码体积往上增加。
        // name: true, // 默认由模块名+hash命名，名称相同时多个模块将合并为一个，可以设置为function
        // automaticNameDelimiter: '~', // 命名分割符  e.g. vendors~main.js
        cacheGroups: { // 缓存组，会继承和覆盖splitChunks的配置
          // default: {
          //   minChunks: 2, // 模块被引用>=2 次，拆分至vendors 公共模块
          //   priority: -20, // 优先级
          //   reuseExistingChunk: true // 默认使用已有模块
          // },
          // vendors: {
          //   test: /node_modules/, // 表示默认拆分node_modules中的模块
          //   priority: -10
          // }
          libs: {
            name: 'chunk-libs',
            test: /node_modules/,
            priority: 20,
            chunks: 'initial'
          },
          vueAswsomeSwiper: {
            name: 'chunk-vueAswsomeSwiper',
            priority: 30,
            test: /[\\/]node_modules[\\/]_?vue-aswsome-swiper(.*)/ /// / in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('./src/component'), // 公共组件库
            minChunks: 3, // 模块被引入 >= 3 次 , 便分割
            priority: 10,
            reuseExistingChunk: true // 默认使用已有模块
          }

        }
      },
      runtimeChunk: 'single' // 将(多入口或者单入口)的webpack运行时文件打包成一个 runtime文件

    },
    // externals: {
    //   ...(envMode() === 'production' ? {
    //     'Vue': 'vue',
    //     'Router': 'vue-outer',
    //     'Vuex': 'vuex',
    //     'axios': 'axios',
    //     'swiper': 'swiper' } : {})
    // },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        inject: true
      })
      // ...(envMode() === 'production' ? [autoAddDllRes()] : []),
      // ...(envMode() === 'production' ? [
      //   new webpack.DllReferencePlugin({
      //     manifest: require('./vue.dll.manifest.json')
      //   })
      // ] : [])
    ]
  },
  pluginOptions: {
    // CompressionPlugin: new CompressionPlugin({ // 配置 css 和 html 压缩
    //   test: /\.html$|\.css/, // 匹配文件名
    //   threshold: 6144, // 对超过6k(6*1024)的数据压缩
    //   deleteOriginalAssets: false // 不删除源文件
    // })
  }
}

// 确定模式
function envMode () {
  return process.env.NODE_ENV
}
