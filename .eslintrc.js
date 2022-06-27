// ESlint配置项
module.exports = {
  // 提供预定义的环境变量
  env: {
    browser: true,
    es2021: true,  // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true,
  },
  // 指定要使用的解析器
  parser: 'vue-eslint-parser',
  // 给解析器传入一些其他的配置参数，比如我们之前安装的@typescript-eslint/parser就可以在这里进行配置
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: "latest",  // 支持的es版本
    sourceType: 'module', // 代模块类型，默认为script，我们设置为module
  },
  // 使用预设的 lint 包，如果要我们自己去设置各个规则未免会显得繁琐，所以可以直接使用业界的最佳实践
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  // 增强 ESlint 功能
  plugins: ['@typescript-eslint'],
  
}