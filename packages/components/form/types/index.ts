import {FormItemProps, FormProps } from 'antd'
import {MergeProp} from './utils'
import {
    RewriteInputProps,
    RewriteInputSearchProps
} from './components'


export interface RewriteFormItemPropsMap<O = any[]>{
    input: RewriteInputProps
    'input-search': RewriteInputSearchProps
    // select: RewriteSelectProps<O>;
    // 'select-v2': RewriteSelectProps<O>;
    // custom: RewriteInputProps;
    // textarea: RewriteTextareaProps;
    // cascader: RewriteCascaderProps<O>;
    // 'input-autocomplete': RewriteAutocompleteProps;
    // 'input-number': RewriteInputNumberProps;
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
    // radio: RewriteRadioGroupProps<O>;
    // checkbox: RewriteCheckboxGroupProps<O>;
    // 'checkbox-button': RewriteCheckboxGroupProps<O>;
    // 'tree-select': RewriteTreeSelectProps<O>;
    // 'radio-button': RewriteRadioGroupProps<O>;
    // 'rate': RewriteRewriteRateProps<O>;
}

export interface CustomFormItemProps<D = any, O = any[], N extends keyof RewriteFormItemPropsMap = any> extends Partial<FormItemProps> {
    key?: any;
    tempKey?: any;
    type: N extends keyof RewriteFormItemPropsMap ? N : keyof RewriteFormItemPropsMap;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    sort?: number;
    options?: RewriteFormItemPropsMap<O>[N];
    showLabel?: boolean;
    required?: boolean;
}

type ToModelItem<D, FI> = D extends FI ? D : FI


type FormItemMap<D, FI> = {
    [P in keyof ToModelItem<D, FI>]: CustomFormItemProps<MergeProp<D, FI>, any[], ToModelItem<D, FI>[P] extends keyof RewriteFormItemPropsMap ? ToModelItem<D, FI>[P] : keyof RewriteFormItemPropsMap>;
}

export interface RewriteFormProps<D = any, FI = any> extends FormProps{
    formItem: Partial<FormItemMap<D, FI>>
}