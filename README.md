## 尝试使用vue-cli@3.x 重构 咖啡网站

## Demo

网站截图( 原网站使用PHP的 laravel框架引入 Vue、Boostrap、Swiper)

![coffee](D:\web测试\project_rewrite\vue-rewrite\img\coffee.jpg)



原项目的目录结构 (laravel 框架下的resources 存放前端代码)

![coffee-directory](D:\web测试\project_rewrite\vue-rewrite\img\coffee-directory.jpg)

## Usage

vue-cli@3.x 重构项目 vue.config.js 从零配置 内置webpack（附带热替换）（现在【暂定】引入axios 和 vue-awesome-swiper）

```
yarn or npm install // 安装依赖包

//本地模拟 仍是借用 Webpack   devServe 服务器   
yarn serve or npm run serve    //浏览器  打开 http://localhost:3000

yarn run build   //打包线上压缩资源 


yarn test:unit  //    jest单元测试


yarn lint   // ESLint 检测并修改文件
```

 

19.9.14     项目开始  第一次提交(带有HelloWorld.vue)的空项目

​        一、postcss一系列 loaders  将  px  （设计稿的原尺寸 ） 转化为 vw  单位以实现 移动端适配  （已兼容大部分移动设备）

​        二、 babel-loader 的 ES6 以上语法 转译 兼容各大浏览器

19.9.15   一、 添加  compression-webpack-plugin 压缩  HTML、css 文件

​                二、 添加 image-webpack-plugin 压缩 本地 静态图片文件

​                三、添加optimization.splitChunks    runtimeChunks 配置项  优化打包

​                四、尝试添加 webpack dll 打包策略 ，结合 externals 以及相关plugins 插件，但是文件引入人存在一定问题，还需要研究

​                五、postcss-with-svg {utf8: false} (npm包) 结合background-image () 处理 移动端1px问题

​                        e.g.  @svg square {
​                                             @rect {
​                                                 fill: var(--color, black);   //css  定义变量 新属性  是由其他 postcss 处理
​                                                 width: 100%;
​                                                height: 100%;
​                                              } 
​                                   }

​                        example {

​                                  background: white svg(square param(--color #00b1ff));
​                         }

​                        至此  项目基本配置已大致完成 、home  组件完成、topTitle通用组件完成、jest 单元测试 

 19.9.16      一、添加 tabBar底部导航组件，导入矢量字体图标 （symbol）创建 iconSvg 组件创建.eslintignore  当lint 时 忽略  其所带的js 文件 ，引入 svg-sprite-loader 处理这类svg 字体图标

​                    二、封装api  接口请求 （引用 axios 库）、封装message 通知 组件 （在除 home 导航，其他导航都指向 About.vue,  在About组件的 mounted() 钩子函数 直接调用this.$mesage({type: 'error'})   可以切换到 观看效果）

​                   三、借用mock 网站 创建 模拟数据，图片数据请求链接 指向该gitHub 线上另个项目（coffee-pictrue）中的图片              

​                   四、vue.config.js devServer.proxy dev端 代理配置 yarn serve  请求 模拟数据并加载页面已实现