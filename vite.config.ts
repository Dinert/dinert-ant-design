import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // 打包文件目录
        outDir: 'es',

        sourcemap: true, // 是否打包map文件
        // 压缩
        // minify: false,
        rollupOptions: {
            // 忽略打包vue文件
            external: ['vue', 'element-plus', 'lodash'],
            input: ['./packages/index.ts'],

            output: [
                {
                    format: 'es',
                    // 打包后文件名
                    entryFileNames: '[name].mjs',

                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    // 配置打包根目录
                    dir: 'es',
                },
                {
                    // 打包格式
                    format: 'cjs',
                    //   //打包后文件名
                    entryFileNames: '[name].js',

                    //   preserveModules: true,
                    exports: 'named',
                    //   //配置打包根目录
                    dir: 'lib',
                },
                {
                    format: 'umd',
                    exports: 'named',
                    dir: 'dist',
                    name: 'dinert-element-plus',
                    globals: {
                        'vue': 'Vue',
                        'ElementPlus': 'element-plus',
                        'lodash': 'lodash'
                    },
                }
            ],
        },
        lib: {
            entry: './index.ts',
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@packages': `${path.resolve(__dirname, './packages')}`,
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx',]
    },
    server: {
        port: 8956,
    },

})
