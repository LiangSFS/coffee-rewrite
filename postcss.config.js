module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {}, // aspect-ratio属性不能和其他属性内容写在一起，否则编译出来的属性只会留下aspect-ratio的值
    'postcss-write-svg': {
      'utf8': false
    },
    'postcss-cssnext': {}, // postcss-cssnext其实就是cssnext。该插件可以让我们使用CSS未来的特性
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750（ 使用750px宽度的，那么100vw = 750px，即1vw = 7.5px）
      // viewportHeihgt: 1334, // 视窗的宽度，对应的是我们设计稿的高度，一般是 1334 也可以不配置
      unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加，建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于 “1px” 不转换为视窗单位， 也可以设置为想要的值
      mediaQuery: false //  不允许媒体查询中 转换 “px”
    },
    'postcss-viewport-units': {},
    'cssnano': {
      // preset: 'advanced', // 需要额外安装 yarn add  cssnano-preset-advanced --dev
      // autoprefixer: false, // 由于cssnext和cssnano都具有autoprefixer,事实上只需要一个
      // zindex: false // 只要启用了这个插件, 不设置该属性，z-index的值就会重置为1
      'cssnano-preset-advanced': { // cssnano 版本升级后  上面的配置已失效
        zindex: false,
        autoprefixer: false
      }
    }
  }
}
