// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // 入口文件路径
  output: {
    file: './index.js', // 输出文件路径
    format: 'cjs', // 输出模块格式为 CommonJS
    sourcemap: false, // 生成 source map
  },
  plugins: [
    typescript(), // 使用 Rollup 插件处理 TypeScript
  ],
  external: ['react', 'axios'], // 将 react 设置为外部依赖，不会打包到最终文件中
};