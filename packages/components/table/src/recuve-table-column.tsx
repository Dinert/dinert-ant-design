

import React from 'react'
import type {RewriteTableProps} from '@packages/components/table/types/index'
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
                    const operations = reset.operations
                    let columnRender: typeof reset.render

                    if (dataIndex === 'operations' && operations) {
                        columnRender = (value, record, index) => {
                            const operationsDom: any[] = []

                            for (const prop in operations) {
                                const {message: originButtonText, onClick, ...operationsReset} = operations[prop]
                                let buttonText = typeof originButtonText === 'function' ? originButtonText({...item}, value, record, index) : originButtonText
                                buttonText = mapButtonText[prop] || buttonText as string


                                let second = operationsReset.second
                                second = prop === 'delete' ? second || true : second

                                const butttonDom = <Button type="link" key={prop}
                                    onClick={event => !second && onClick && onClick({...item, event, button: operations[prop]}, value, record, index)}
                                    {...{...operationsReset, danger: mapStatus[prop]}}
                                >{buttonText}</Button>

                                const popConfirmDom = <Popconfirm
                                    description={`确定要${buttonText}该条数据吗？`}
                                    title="警告"
                                    onConfirm={event => onClick && onClick({...item, button: operations[prop], event: event as React.MouseEvent<HTMLElement, MouseEvent>}, value, record, index)}
                                    {...operationsReset.confirm} key={prop}>{butttonDom}</Popconfirm>

                                operationsDom.push(second ? popConfirmDom : butttonDom)
                            }
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
