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
