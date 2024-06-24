import {FormItemProps, FormProps } from 'antd'
import {MergeProp} from './utils'
import {
    RewriteInputProps,
    RewriteInputSearchProps,
    RewriteInputTextareaProps,
    RewriteInputNumberProps,
    RewriteSelectPropsProps,
    RewriteRadioGroupProps
} from './components'


export interface RewriteFormItemPropsMap{
    input: RewriteInputProps
    'input-search': RewriteInputSearchProps
    textarea: RewriteInputTextareaProps
    select: RewriteSelectPropsProps;
    // 'select-v2': RewriteSelectProps<O>;
    // custom: RewriteInputProps;
    // cascader: RewriteCascaderProps<O>;
    // 'input-autocomplete': RewriteAutocompleteProps;
    'input-number': RewriteInputNumberProps;
    // switch: RewriteSwitchProps;
    // datetime: RewriteDatePickerProps;
    // date: RewriteDatePickerProps;
    // dates: RewriteDatePickerProps;
    // week: RewriteDatePickerProps;
    // month: RewriteDatePickerProps;
    // year: RewriteDatePickerProps;
    // years: RewriteDatePickerProps;
    // datetimerange: RewriteDatePickerProps;
    // daterange: RewriteDatePickerProps;
    // monthrange: RewriteDatePickerProps;
    radio: RewriteRadioGroupProps;
    'radio-button': RewriteRadioGroupProps;
    // checkbox: RewriteCheckboxGroupProps<O>;
    // 'checkbox-button': RewriteCheckboxGroupProps<O>;
    // 'tree-select': RewriteTreeSelectProps<O>;
    // 'rate': RewriteRewriteRateProps<O>;
}

export interface CustomFormItemProps<D = any, O = any[], N extends keyof RewriteFormItemPropsMap = any> extends Partial<FormItemProps>{
    key?: any;
    tempKey?: any;
    type?: N extends keyof RewriteFormItemPropsMap ? N : keyof RewriteFormItemPropsMap;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    sort?: number;
    options?: RewriteFormItemPropsMap[N];
    showLabel?: boolean;
    required?: boolean;
    slot?: string | ((formItem: CustomFormItemProps<D, O, N>) => any)
}

type ToModelItem<D, FI> = D extends FI ? D : FI


type FormItemMap<D, FI> = {
    [P in keyof ToModelItem<D, FI>]: CustomFormItemProps<MergeProp<D, FI>, any[], ToModelItem<D, FI>[P] extends keyof RewriteFormItemPropsMap ? ToModelItem<D, FI>[P] : keyof RewriteFormItemPropsMap>;
}

export interface RewriteFormProps<D = any, FI = any> extends FormProps{
    formItem: Partial<FormItemMap<D, FI>>
    required?: boolean
    showLabel?: boolean
    name?: 'search' | 'horizontal';
    packUp?: boolean;
    onSearch?: () => void
    onReset?: () => void
    onUnFold?: () => void
}
