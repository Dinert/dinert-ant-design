import type {TableProps, TableColumnProps, ButtonProps, PopconfirmProps, MenuProps, ModalProps} from 'antd'

export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
}

export interface ScopeProps<T = any> {
    $index: number;
    cellIndex: number;
    column: RewriteTableColumnCtx<T>;
    row: T;
    _self: any;
}

export interface OperationsProps<T = any> extends Partial<Omit<ButtonProps, 'onClick'>>{
    message?: string | ((column: RewriteTableColumnCtx<T>, value: any, rows: T, index: number) => void);
    onClick?: (column: RewriteTableColumnCtx<T> & {event: React.MouseEvent<HTMLElement, MouseEvent>, button?: OperationsProps<T>}, value: any, rows: T, index: number) => any
    sort?: number;
    second?: boolean | 'messageBox';
    confirm?: Partial<PopconfirmProps>;
    key?: any;
    modal?: Partial<ModalProps>;
}

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnProps<T>>, 'children'>{
    maxOperations?: number;
    operations?: Record<string, OperationsProps<T>>;
    children?: Array<RewriteTableColumnCtx<T>>;
}

export interface TableTitleProps<T> extends Partial<Omit<ButtonProps, 'slot'>>{
    message?: string
    slot?: TableProps<T>['title'],
    show?: boolean
}

export interface RewriteTableProps<T = any> extends Omit<TableProps<T>, 'title'> {
    title?: Record<string, TableTitleProps<T>> | TableProps<T>['title'],
    tableColumns: Array<RewriteTableColumnCtx<T>>;
    errData?: string;
    setting?: boolean;
    key?: any;
    rowIndex?: Partial<RewriteTableColumnCtx<T>>;
    class?: string;
}

export type SelectTable = {setChecked: (num: any) => void, getCheckedKeys: () => void, setCheckedNodes: () => void} | null


