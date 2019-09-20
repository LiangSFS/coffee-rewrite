## 尝试使用vue-cli@3.x （主要是使用vue-cli@2.x）重构 咖啡网站

## Demo

网站截图( 原网站使用PHP的 laravel框架引入 Vue、Boostrap、Swiper)

![coffee](/img/coffee.jpg)



原项目的目录结构 (laravel 框架下的resources 存放前端代码)

![coffee-directory](/img/coffee-directory.jpg)



已经重构好的 咖啡 网站  ，限于条件   vue 路由模式 改为  hash  

线上  demo   地址 ： [https://liangsfs.github.io/coffee-rewrite/](https://liangsfs.github.io/coffee-rewrite/) 【用手机原生浏览器打开】

***  注意 ！！！ 一、 我没有做后台，请求数据是gitHub 上只能用hash 模式 ，所以在页面切换时在某些浏览器不生效 ,但是页面布局没问题               二、 因为网页 请求数据在gitHub （我另外的项目，gitHub 每天的访问很多）上， 加载 有时会失败（橘色的提示、红色提示是我写的测试），但不是我的网页写的有问题，是网速 （请多刷新几次）***

 

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

 

### 19.9.14     

  项目开始  第一次提交(带有HelloWorld.vue)的空项目(init   Commits on Sep 14, 2019)

​        一、postcss一系列 loaders  将  px  （设计稿的原尺寸 ） 转化为 vw  单位以实现 移动端适配  （已兼容大部分移动设备）

​        二、 babel-loader 的 ES6 以上语法 转译 兼容各大浏览器



### 19.9.15  

​               一、 添加  compression-webpack-plugin 压缩  HTML、css 文件

​                二、 添加 image-webpack-plugin 压缩 本地 静态图片文件

​                三、添加optimization.splitChunks    runtimeChunks 配置项  优化打包

​                四、尝试添加 webpack dll 打包策略 ，结合 externals 以及相关plugins 插件，但是文件引入仍存在一定问题，还需要研究【未实现】

​                五、postcss-write-svg {utf8: false} (npm包) 结合background-image () 处理 移动端1px问题

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



### 19.9.16  

​                    一、添加 tabBar底部导航组件，导入矢量字体图标 （symbol）创建 iconSvg 组件创建.eslintignore  当lint 时 忽略  其所带的js 文件 ，引入 svg-sprite-loader 处理这类svg 字体图标

​                    二、封装api  接口请求 （引用 axios 库）、封装message 通知 组件 （在除 home 导航，其他导航都指向 About.vue,  在About组件的 mounted() 钩子函数 直接调用this.$mesage({type: 'error'})   可以切换到 观看效果）

​                   三、借用mock 网站 创建 模拟数据，图片数据请求链接 指向该gitHub 线上另个项目（coffee-pictrue）中的图片              

​                   四、vue.config.js devServer.proxy dev端 代理配置 yarn serve  请求 模拟数据并加载页面已实现



### 19.9.17    

​                 一 、修复了 vue-awesome-swiper  数据通过异步接口获取时，loop : true ,autoplay.disableOnInteraction: true (部分swiper 设置不生效).

​                 二、 代理Mock地址切换到了 gitHub 另一个 项目中（coffee-json），easy-mock网站的模拟数据接口不稳定 

​                 三、 在 iphone X （高度过高）和 iphone 5 （高度过低） 的 特殊尺寸（相对比 iphone 6 7 8）  下，添加 部分样式 以在视图上兼容（实际上，更合理的做法是 针对这种 特殊尺寸展示不同内容【即 针对其尺寸作一个设计稿】）

​                四 、 在主页面 ,两个swiper 的触摸滑动相互影响Bug, 将 banner 抽离出来作为Banner 子组件在引入 ，因此 今天  一 问题要做相应调整【已处理好】

​                五、主题（theme ）组件添加、还有api 接口未完成 

​                六、修复 因为 cssnano 插件版本升级后 配置       css中  z-index  会被重置为 1 

```javascript
'cssnano': {
  // preset: 'advanced', // 需要额外安装 yarn add  cssnano-preset-advanced --dev
  // autoprefixer: false, // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个
  // zindex: false // 只要启用了这个插件, 不设置该属性，z-index的值就会重置为1
  'cssnano-preset-advanced': { // cssnano 版本升级后  上面的配置已失效
    zindex: false,
    autoprefixer: false       
  }
}
```
 ### 19.9.18

​               一、添加了一个ModalCover  通用组件   可扩展弹出动效。在 theme （主题）组件已应用

拖拽问题 和  阻止默认事件尝试 【暂时没有好的想法】    使用 移动端的touch事件

​               二、 添加一个 v-drag  自定义指令  ，处理 今天  一 问题， 性能优化考虑  组件卸载时 取消监听事件

​               三、添加动态数据swiper 在每个 主题 (theme) ，修复swiper 分页器样式问题，less 和postcss 中  postcss-write-svg  兼容问题

​               四、各个swiper 请求数据 图片 各处已放上，之前的页面lazy 懒加载添加，优化加载体验，

swiper  内置 lazy  在不自动切换时 第一个图片一直处于加载（用户体验不好）【已处理】



### 19.9.19

​                一、修复 swiper 分页器 、箭头位置、返回按钮等css样式，为theme (主题)组件 模态层添加高斯模糊

​                二、添加  list （菜单） 组件、修改 webpack  打包 优化(optimization) 重新合理化 分包

​                三、添加 list.util.js文件  组件( 分离出各个 工具函数文件)、utils/common.js (添加 throttle、debounce等常用函数)

​                四、菜单 数据上传、锚点定位 同样 添加了懒加载、 调整 兼容大部分移动端 1px  的 svg  元素属性

​                五、 监听滚动 、滚动处理 工具函数 移至 list.util.js  文件  、考虑性能优化 在组件销毁时 删除 监听事件    

### 19.9.20

​                一、重修 页面 样式 、图片 加载 、首页(home)【已完成】

​                二、修复 离开 theme 主题 页面（通过浏览器的返回按钮）、页面样式回到最初的样式

​                三、vue-awesome-swiper 初始化时 init : true【不要设为false ,当离开该组件时没有点开swiper  init一直是 false，vue 处理swiperDOM 元素会出问题】 ，再次刷新时 （动态数据）调用init（）