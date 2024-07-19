

import React from 'react'
import type {OperationsProps, RewriteTableProps} from '@packages/components/table/types/index'
import {Button, Table, Popconfirm} from 'antd'
import { dataTransformRod } from '@packages/utils/tools'


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
                    let columnRender: typeof reset.render
                    for (const prop in reset.operations) {
                        operations.push({
                            ...reset.operations[prop],
                            key: prop as any
                        })
                    }

                    if (dataIndex === 'operations' && operations) {
                        columnRender = (value, record, index) => {
                            const operationsDom: any[] = []
                            operations.forEach(operationItem => {
                                const {message: originButtonText, key: operationItemKey, onClick, ...operationsReset} = operationItem
                                let buttonText = typeof originButtonText === 'function' ? originButtonText({...item}, value, record, index) : originButtonText
                                buttonText = mapButtonText[operationItem.key] || buttonText as string


                                let second = operationsReset.second
                                second = operationItem.key === 'delete' ? second || true : second

                                const butttonDom = <Button
                                    type="link"
                                    key={operationItemKey}
                                    onClick={event => !second && onClick && onClick({...item, event, button: {message: buttonText, ...operationItem}}, value, record, index)}
                                    {...{...operationsReset, danger: mapStatus[operationItem.key]}}
                                >{buttonText}</Button>

                                const popConfirmDom = <Popconfirm
                                    key={operationItemKey}
                                    description={`确定要${buttonText}该条数据吗？`}
                                    title="警告"
                                    onConfirm={event => onClick && onClick({...item, button: {message: buttonText, ...operationItem}, event: event as React.MouseEvent<HTMLElement, MouseEvent>}, value, record, index)}
                                    {...operationsReset.confirm}>{butttonDom}</Popconfirm>

                                operationsDom.push(second ? popConfirmDom : butttonDom)
                            })

                            operations.sort((a: any, b: any) => {
                                return a.sort - b.sort
                            })

                            return <>{operationsDom}</>
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
                            className: reset.dataIndex + ' ' + reset.className,
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
