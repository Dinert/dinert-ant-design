

import React, { useState } from 'react'
import type {RewriteTableProps} from '@packages/components/table/types/index'
import {Table} from 'antd'

import RecuveTableColumn from '@packages/components/table/src/recuve-table-column'
import { getUuid } from '@packages/utils/tools'
import { resizeTaleHeight } from '../hooks'
import useWindowResize from '@packages/hooks/useWindowResize'

const  App: React.FC<RewriteTableProps>  = (props) => {
    const {tableColumns, ...reset} = props
    const [tableClass] = useState('table_' + getUuid())
    useWindowResize(() => {
        resizeTaleHeight(tableClass)
    }, 100, true)

    return (
        <Table {...reset} className={tableClass}>
            {RecuveTableColumn(props)}
        </Table>
    )
}


export default App