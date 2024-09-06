
import path from 'path'
import {defineConfig} from 'vitepress'
import react from '@vitejs/plugin-react'
import {mdPlugin} from './plugins/markdown-config'

function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
}
export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/dinert-ant-design/' : '/',
    vite: {
        resolve: {
            alias: {
                '@packages': _resolve('../../packages'),
                '@docs': _resolve('../../docs'),
            }
        },
        plugins: [
            react(),
        ],
        server: {
            port: 8955
        }
    },

    themeConfig: {
        siteTitle: 'dinert-ant-design',
        nav: [
            {text: '指南', link: '/guide/installation'},
            {text: '组件', link: '/examples/form/basic'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/Dinert/dinert-ant-design'},
        ],
        sidebar: {
            '/guide/': [
                {
                    text: '基础',
                    items: [
                        {
                            text: '安装',
                            link: '/guide/installation'
                        },
                        {
                            text: '快速开始',
                            link: '/guide/quickstart'
                        },
                    ]
                },
            ],
            '/examples/': [
                {
                    text: '组件',
                    items: [
                        {
                            text: 'Form（表单）',
                            target: '/examples/form/basic',
                            collapsed: true,
                            base: '/examples/form/',
                            items: [
                                {
                                    text: '基础用法',
                                    link: 'basic',
                                },
                                {
                                    text: 'input 输入框',
                                    link: 'input',
                                },
                                {
                                    text: 'autocomplete 自动补全输入框',
                                    link: 'autocomplete',
                                },

                                {
                                    text: 'input-search 输入框查询',
                                    link: 'input-search',
                                },
                                {
                                    text: 'input-number 数字输入框',
                                    link: 'input-number',
                                },
                                {
                                    text: 'textarea 文本域',
                                    link: 'textarea',
                                },
                                {
                                    text: 'select 选择框',
                                    link: 'select',
                                },
                                {
                                    text: 'date 时间选择器（时、日、周、月、年）',
                                    link: 'date',
                                },
                                {
                                    text: 'radio 单选按钮',
                                    link: 'radio',
                                },
                                {
                                    text: 'checkbox 多选框',
                                    link: 'checkbox',
                                },
                                {
                                    text: 'switch 开关',
                                    link: 'switch',
                                },
                                {
                                    text: 'slider 滑动输入条',
                                    link: 'slider',
                                },
                                {
                                    text: 'rate 评分',
                                    link: 'rate',
                                },
                                // {
                                //     text: 'tree-select 树形选择',
                                //     link: 'tree-select',
                                // },

                                {
                                    text: 'cascader 级联选择器',
                                    link: 'cascader',
                                },
                                {
                                    text: '属性',
                                    link: 'explain',
                                },

                            ]
                        },
                        {
                            text: 'Table（表格）',
                            target: '/examples/table/basic',
                            collapsed: true,
                            base: '/examples/table/',
                            items: [
                                {
                                    text: '基础用法',
                                    link: 'basic',
                                },
                                {
                                    text: '高级用法',
                                    link: 'advanced',
                                },
                                {
                                    text: '属性',
                                    link: 'explain',
                                }
                            ]
                        },
                        {
                            text: 'TablePage（表格查询）',
                            target: '/examples/table-page/basic',
                            collapsed: true,
                            base: '/examples/table-page/',
                            items: [
                                {
                                    text: '基础用法',
                                    link: 'basic',
                                },
                                {
                                    text: '高级用法',
                                    link: 'advanced',
                                },
                            ]
                        },
                        {
                            text: 'modal（对话框）',
                            target: '/examples/modal/basic',
                            collapsed: true,
                            base: '/examples/modal/',
                            items: [
                                {
                                    text: '基础用法',
                                    link: 'basic',
                                },
                                {
                                    text: '高级用法',
                                    link: 'advanced'
                                },
                                {
                                    text: '属性',
                                    link: 'explain',
                                },
                            ]
                        }
                    ]

                }
            ]
        }
    },
    markdown: {
        lineNumbers: true,
        config: md => mdPlugin(md)
    }
})
