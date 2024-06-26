// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
export default {
  input: './src/index.ts', // 入口文件路径
  output: [
    {
      name: 'fl-hooks',
      file: './dist/index.js', // 输出文件路径
      format: 'es', // 输出模块格式为 CommonJS
      sourcemap: false, // 生成 source map
    },
    {
      name: 'fl-hooks',
      file: './dist/index.umd.js', // 输出文件路径
      format: 'umd', // 输出模块格式为 CommonJS
      sourcemap: false, // 生成 source map
    }
  ],
  plugins: [
    resolve(),
    typescript(), // 使用 Rollup 插件处理 TypeScript
    terser(),
  ],
  external: ['react', 'axios', 'echarts'], // 将 react 设置为外部依赖，不会打包到最终文件中
};
