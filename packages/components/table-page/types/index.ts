import { RewriteFormProps } from '@packages/components/form/types'
import { RewriteTableProps } from '@packages/components/table/types'

export interface TablePageProps<T, D, FI> {
    form: RewriteFormProps<D, FI>,
    table: RewriteTableProps<T>
}
