import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

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
            external: ['react', 'antd', 'react-dom', 'react/jsx-runtime', 'lodash', '@ant-design/icons', 'immer', 'use-immer'],
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
                    name: 'dinert-ant-design',
                    globals: {
                        'react': 'react',
                        'antd': 'antd',
                        'react-dom': 'ReactDOM',
                        'react/jsx-runtime': 'react/jsx-runtime'
                    },
                }
            ],
        },
        lib: {
            entry: './index.ts',
        },
    },
    plugins: [
        react(),
        dts({
            entryRoot: './packages',

            outDir: ['./es/src', './lib/src'],

            // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsconfigPath: './tsconfig.json',
        }),
    ],
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
