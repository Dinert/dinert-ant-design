

<script setup>
    const arr  = ['input' ,
                'select' ,
                'textarea' ,
                'input-number' ,
                'input-autocomplete'
                , 'switch'
                , 'datetime'
                , 'date'
                , 'week'
                , 'month'
                , 'year'
                , 'datetimerange'
                , 'daterange'
                , 'monthrange'
                , 'custom' , 'radio' , 'tree-select' , 'radio-button'
                , 'rate'
                , 'checkbox'
                , 'cascader'].join(' | ')
    const colLayout = "{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }"
</script>


## form 属性
| 属性名    | 说明                                                           | 类型                                                                        | 默认值 |
| --------- | -------------------------------------------------------------- | --------------------------------------------------------------------------- | ------ |
| formItem  | 表单组件列表对象，[详细请参阅下面formItem属性](#formitem-属性) | <dinert-api-typing type="object" details="{[key: string]: FormItemProps}"/> | \{\}   |
| showLabel | 是否显示每个表单组件的值，不显示表单组件                       | boolean                                                                     | 一     |
| name      | 值为'search'时在查询中使用，值为horizontal时在弹窗中使用       | <dinert-api-typing type="enmu" details="'search' \| 'horizontal'"/>         | 一     |
| required  | 是否验证每个表单组件是否必填                                   | boolean                                                                     | 一     |
| packUp    | 第一次加载是否默认展开超出的组件                               | boolean                                                                     | false  |
| row       | [Row](https://ant-design.antgroup.com/components/grid-cn#row)  | 一                                                                          | false  |
| col       | [Col](https://ant-design.antgroup.com/components/grid-cn#col)  | 一                                                                          | false  |
| onSearch  | 点击查询的事件                                                 | Function                                                                    | 一     |
| onReset   | 点击重置的事件                                                 | Function                                                                    | 一     |
| onUnFold  | 点击展开的事件                                                 | Function                                                                    | 一     |
| ......    | [更多配置，请参考](https://ant.design/components/form-cn#form) | 一                                                                          | 一     |

## formItem 属性
| 属性名    | 说明                                                                          | 类型                                                                              | 默认值 |
| --------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------ |
| type      | 表单组件类型                                                                  | <dinert-api-typing type="enmu" :details="arr"/>                                   | 一     |
| label     | 表单组件的名称                                                                | <dinert-api-typing type="enmu" details="'string' \| (formItem) => any"/>          | 一     |
| vif       | 是否渲染该表单组件                                                            | <dinert-api-typing type="enmu" details="boolean' \| (initialValues) => boolean"/> | 一     |
| sort      | 表单组件的列的排序，数值越小组件越靠前                                        | Number                                                                            | 一     |
| options   | 组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法 | Object                                                                            | 一     |
| showLabel | 是否直接显示表单组件的值                                                      | boolean                                                                           | 一     |
| slot      | 自定义组件插槽                                                                | <dinert-api-typing type="enmu" details="'string' \| (formItem) => any"/>          | 一     |
| required  | 是否必填                                                                      | Boolean                                                                           | 一     |
| ......    | [更多配置，请参考](https://ant.design/components/form-cn#formitem)            | 一                                                                                | 一     |
