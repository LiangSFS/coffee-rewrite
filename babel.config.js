module.exports = {
  presets: [
    [
      '@vue/babel-preset-app',
      {
        useBuiltIns: 'usage',
        targats: { 'browers': ['> 1%'] }
      }
    ]
  ],
  'env': {
    'test': { // jest 测试配置项目使用的是babel-prese-env，默认的Babel配置禁用了对ES modules的转译功能（由webpack处理），但是Jest test是直接运行在Node上的，需要在测试时开启这个功能。
      'presets': [
        ['@vue/babel-preset-app', { 'target': { 'node': 'current' } }]
      ]
    }
  },
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': 3,
        'useESModules': false
      }
    ]
  ]
}
