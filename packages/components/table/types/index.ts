import type {TableProps, TableColumnProps, ButtonProps, PopconfirmProps} from 'antd'

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
    // messageBox?: Partial<ElMessageBoxOptions>;
}

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnProps<T>>, 'children'>{
    checked?: boolean;
    show?: boolean | ((column: RewriteTableColumnCtx<T>) => boolean);
    // hidden?: boolean | ((column: RewriteTableColumnCtx<T>, value: any, rows: T, index: number) => boolean)
    onClick?: (column: RewriteTableColumnCtx<T>) => void
    // setting?: boolean;
    maxOperations?: number;
    operations?: Record<string, OperationsProps<T>>;
    sort?: number;
    children?: Array<RewriteTableColumnCtx<T>>;
}


export interface RecuveTableColumnProps<T = any>{
    onlyClass?: string;
    popoverValue?: boolean;
    table: RewriteTableProps;
    children?: Array<RewriteTableColumnCtx<T>>;
    defaultCheckedKeys?: any[];
}

export interface RewriteTableProps<T = any> extends TableProps<T> {
    tableColumns: Array<RewriteTableColumnCtx<T>>;
    errData?: string;
    setting?: boolean;
    key?: any;
    rowIndex?: Partial<RewriteTableColumnCtx<T>>;
    class?: string;
}


export interface HeaderListProps extends Partial<ButtonProps>{
    message?: string;
    click?: (item: HeaderListProps) => void;
    sort?: number;
    show?: boolean | ((item: HeaderListProps) => boolean);
}


export type SelectTable = {setChecked: (num: any) => void, getCheckedKeys: () => void, setCheckedNodes: () => void} | null


