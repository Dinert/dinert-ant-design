

import React from 'react'
import type {RewriteTableProps} from '@packages/components/table/types/index'
import {Button, message, Table} from 'antd'

const mapMessage: {[key: string]: string} = {
    add: '新增',
    edit: '编辑',
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
                    const operationsDom: any[] = []

                    if (dataIndex === 'operations' && operations) {
                        for (const prop in operations) {
                            const {message, ...operationsReset} = operations[prop]
                            let tempMessage = typeof message === 'function' ? message({...reset, key: prop}) : message
                            tempMessage = mapMessage[prop] || tempMessage
                            operationsDom.push(<Button type="link" key={prop} {...operationsReset}>{tempMessage}</Button>)
                        }
                        reset.render = () => <>{operationsDom}</>
                    }

                    if (children && children.length) {
                        return (
                            <Table.ColumnGroup {...reset} key={reset.dataIndex}>
                                {children && children.length && RecuveTableColumn({...tableReset, tableColumns: children}) as any}
                            </Table.ColumnGroup>
                        )
                    } else {

                        return (<Table.Column {...{...reset}} key={reset.dataIndex}></Table.Column>)
                    }

                })
            }
        </>

    )
}


export default RecuveTableColumn
