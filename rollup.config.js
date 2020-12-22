import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'example/TodoApp.vue',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  external: ['vue'],
  plugins: [
    nodeResolve(),
    vue(),
    commonjs(),
  ]
}
