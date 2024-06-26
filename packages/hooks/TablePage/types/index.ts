import type {RewriteFormProps} from '../../../components/form/types'

import type {RewriteTableProps, RewriteTableColumnCtx} from '../../../components/table/types/index'

// export interface DinertTablePageProps<T = any, D = any, FI = any> extends RewriteFormProps<D, FI>, RewriteTableProps<T>{
// }


export interface DinertTablePageProps<T = any, D = any, FI = any> {
    table: RewriteTableProps<T>
    form: RewriteFormProps<D, FI>
}


export interface TableParams<T = any> {
    data: T[];
    page?: number;
    pageNum?: number;
    pageSize?: number;
    total?: number;
    totalPages?: number;
}

export interface AjaxTableProps {
    name?: 'reset' | 'delete' | 'search' | 'current' | 'size';
    currentPage?: number;
    pageSize?: number;
}


export interface Scope<T = any>{
    $index?: number;
    $cellIndex?: number;
    column?: RewriteTableColumnCtx<T>;
    data?: RewriteTableColumnCtx<T>;
    row?: T;
    // store?: TableInstance;
    _self?: any;
}

export type ScopeFn<T> = (scope?: Scope<T>) => void
