

import React from 'react'
import type {RewriteTableProps} from '@packages/components/table/types/index'
import {Table} from 'antd'

const  RecuveTableColumn: React.FC<RewriteTableProps>  = (props) => {
    const {tableColumns, ...tableReset} = props
    return (
        <>
            {
                tableColumns.map(item => {
                    const {children, ...reset} = item
                    if(children && children.length) {
                        return (
                            <Table.ColumnGroup {...reset} key={reset.dataIndex}>
                                {children && children.length && RecuveTableColumn({...tableReset,tableColumns: children}) as any}
                            </Table.ColumnGroup>
                        )
                    }else {
                        return (<Table.Column {...reset} key={reset.dataIndex}></Table.Column>)
                    }

                })
            }
        </>

    )
}


export default RecuveTableColumn