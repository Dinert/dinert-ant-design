

<style>
    .dinert-table{
        width: 100%;
        padding: 0 0 16px 0;
    }
    .vp-doc li + li{
        margin-top: 0;
    }
</style>

<script setup>
    const paginationData = `{
        currentPage: 1,
        pageSize: 15,
        pageSizes:[15, 30, 50, 70, 100],
        defaultPageSize:15,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 100
    }`;

    let showOperations = `'boolean' | '(scope: ScopeProps, column: RewriteTableColumnCtx, item: OperationsProps) => void'`
    let HeaderListProps = `'boolean' | '(item: HeaderListProps) => void'`
    let headerList = `'boolean' | {[key: string]: HeaderListProps}`
</script>


## Table 属性

| 属性名       | 说明                                                                          | 类型                                                                                               | 默认值 |
| ------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------ |
| tableColumns | 表格头的数据配置项                                                            | Array                                                                                              | 一     |
| class        | 表格的类名                                                                    | String                                                                                             | 一     |
| title        | 表格左上角的title                                                             | <dinert-api-typing type="enmu" details="Record<string, TableTitleProps> \| TableProps['title']" /> | 一     |
| rowIndex     | 表格序号                                                                      | RewriteTableColumnCtx                                                                              | 一     |
| errData      | 表格中无数据时显示的数据                                                      | String                                                                                             | -      |
| ......       | [更多配置，请参考](https://ant-design.antgroup.com/components/table-cn#table) | 一                                                                                                 | 一     |


## TableColumns 属性
| 属性名        | 说明                                                                                            | 类型   | 默认值 |
| ------------- | ----------------------------------------------------------------------------------------------- | ------ | ------ |
| maxOperations | 表格最大显示的操作按钮数，超出这个数显示更多，设置operations有效                                | Number | 3      |
| operations    | [表格操作按钮列表，详情请参阅下表](#operations-属性)                                            | Object | 一     |
| children      | 表格头下的数据配置项，多级表头                                                                  | Array  | 一     |
| ......        | [更多配置，请参考](https://element-plus.org/en-US/component/table.html#table-column-attributes) | 一     | 一     |

## Operations 属性
| 属性名  | 说明                                                                              | 类型                                                       | 默认值 |
| ------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| message | 名称                                                                              | String                                                     | 一     |
| click   | 点击事件                                                                          | Function                                                   | 一     |
| show    | 是否显示                                                                          | <dinert-api-typing type="enmu" :details="showOperations"/> |        | 一 |
| sort    | 操作的排序，数值越小列越靠前              | Number                                                     | 一     |
| ......  | [更多配置，请参考](https://element-plus.org/zh-CN/component/link.html#attributes) | 一                                                         | 一     |

## 事件
| 事件名         | 说明                     | 类型                                                                                                         |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| size-change    | page-size 改变时触发     | <dinert-api-typing type="Function" details="(value: number) => void"/>                                       |
| current-change | current-page 改变时触发  | <dinert-api-typing type="Function" details="(value: number) => void"/>                                       |
| checked-change | 点击隐藏显示操作栏时触发 | <dinert-api-typing type="Function" details="(data: Node, checked: boolean, childChecked: boolean) => void"/> |


## Title 属性
| 属性名  | 说明                                                                                | 类型     | 默认值 |
| ------- | ----------------------------------------------------------------------------------- | -------- | ------ |
| message | 名称                                                                                | String   | 一     |
| show    | 是否显示                                                                            | Boolean  |        | 一 |
| ......  | [更多配置，请参考](https://ant-design.antgroup.com/components/button-cn#api) | 一       | 一     |


