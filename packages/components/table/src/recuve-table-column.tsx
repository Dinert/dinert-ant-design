

import React from 'react'
import type {OperationsProps, RewriteTableProps} from '@packages/components/table/types/index'
import {Button, Table, Popconfirm, Space, Popover, Modal, Flex} from 'antd'
import { dataTransformRod } from '@packages/utils/tools'
import { DownOutlined } from '@ant-design/icons'


const mapButtonText: Record<string, string> = {
    view: '查看',
    edit: '编辑',
    delete: '删除',
    remove: '删除'
}

const mapStatus: Record<string, any> = {
    delete: true,
    remove: true
}

const RecuveTableColumn: React.FC<RewriteTableProps> = props => {
    const {tableColumns, ...tableReset} = props

    return (
        <>
            {
                tableColumns.map(item => {
                    const {children, ...reset} = item
                    const dataIndex = reset.dataIndex
                    const operations: OperationsProps[] = []
                    let maxOperations = reset.maxOperations || 3

                    let columnRender: typeof reset.render

                    for (const prop in reset.operations) {
                        operations.push({
                            ...reset.operations[prop],
                            key: prop as any
                        })
                    }

                    const operationsLen = operations.length
                    maxOperations = operationsLen > maxOperations ? maxOperations - 1 : maxOperations


                    operations.sort((a: any, b: any) => {
                        return a.sort - b.sort
                    })
                    if (dataIndex === 'operations' && operations) {
                        columnRender = (value, record, index) => {
                            const operationsDom: any[] = []
                            const defaultOperations = operations.slice(0, maxOperations)
                            const moreOperations = operations.slice(maxOperations, operations.length)

                            defaultOperations.forEach(operationItem => {
                                const {message: originButtonText, second: operationItemSecond, key: operationItemKey, onClick, ...operationsReset} = operationItem
                                let buttonText = typeof originButtonText === 'function' ? originButtonText({...item}, value, record, index) : originButtonText
                                buttonText = mapButtonText[operationItem.key] || buttonText as string

                                let second = operationItemSecond
                                second = mapStatus[operationItem.key] ? second || true : second

                                const butttonDom = <Button
                                    type="link"
                                    key={operationItemKey}
                                    onClick={event => {
                                        if (second === 'messageBox') {
                                            Modal.confirm({
                                                title: '警告',
                                                content: `确定要${buttonText}该条数据吗？`,
                                                onOk() {
                                                    onClick && onClick({...item, event, button: {message: buttonText, ...operationItem}}, value, record, index)
                                                },
                                                ...operationItem.modal
                                            })
                                        } else {
                                            onClick && onClick({...item, event, button: {message: buttonText, ...operationItem}}, value, record, index)
                                        }
                                    }
                                    }
                                    {...{...operationsReset, danger: mapStatus[operationItem.key]}}
                                >{buttonText}</Button>

                                const popconfirmDom = <Popconfirm
                                    key={operationItemKey}
                                    description={`确定要${buttonText}该条数据吗？`}
                                    title="警告"
                                    onConfirm={event => onClick && onClick({...item, button: {message: buttonText, ...operationItem}, event: event as React.MouseEvent<HTMLElement, MouseEvent>}, value, record, index)}
                                    {...operationsReset.confirm}>{butttonDom}</Popconfirm>


                                operationsDom.push(typeof second === 'boolean' && second ? popconfirmDom : butttonDom)
                            })

                            if (moreOperations && moreOperations.length) {
                                const moreOperationsDom: any[] = []
                                moreOperations.forEach(operationItem => {
                                    const {key: operationItemKey, second: operationItemSecond, onClick, ...operationsReset} = operationItem

                                    let buttonText = typeof operationItem.message === 'function' ? operationItem.message({...item}, value, record, index) : operationItem.message
                                    buttonText = mapButtonText[operationItem.key] || buttonText as string

                                    let second = operationItemSecond
                                    second = operationItem.key === 'delete' ? second || true : second

                                    const butttonDom = <Button key={operationItemKey}
                                        style={{padding: '0'}}
                                        type="link"
                                        onClick={event => {
                                            if (second) {
                                                Modal.confirm({
                                                    title: '警告',
                                                    content: `确定要${buttonText}该条数据吗？`,
                                                    onOk() {
                                                        onClick && onClick({...item, event, button: {message: buttonText, ...operationItem}}, value, record, index)
                                                    },
                                                    ...operationItem.modal
                                                })
                                            } else {
                                                onClick && onClick({...item, event, button: {message: buttonText, ...operationItem}}, value, record, index)
                                            }
                                        }}
                                        {...{...operationsReset, danger: mapStatus[operationItem.key]}}
                                    >{buttonText}</Button>

                                    moreOperationsDom.push(butttonDom)
                                })

                                operationsDom.push(
                                    <Popover
                                        content={<Flex vertical align="flex-start">{moreOperationsDom}</Flex>}
                                        key={'allReset'}
                                        placement="bottom">
                                        <Space>
                                            <Button type="link" className="more">
                                                更多<DownOutlined />
                                            </Button>
                                        </Space>
                                    </Popover>
                                )
                            }

                            return <Space>{operationsDom}</Space>
                        }
                    } else {
                        columnRender = value => {
                            return dataTransformRod(value)
                        }
                    }

                    if (children && children.length) {
                        return (
                            <Table.ColumnGroup {...reset} key={reset.dataIndex}>
                                {children && children.length && RecuveTableColumn({...tableReset, tableColumns: children}) as any}
                            </Table.ColumnGroup>
                        )
                    } else {

                        return (<Table.Column {...{
                            ...reset,
                            className: reset.dataIndex + ' ' + (reset.className || ''),
                            render: reset.render || columnRender
                        }}
                        key={reset.dataIndex}></Table.Column>)
                    }

                })
            }
        </>

    )
}


export default RecuveTableColumn
