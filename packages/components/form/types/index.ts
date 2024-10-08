import {ColProps, FormItemProps, FormProps, RowProps } from 'antd'
import {MergeProp} from './utils'
import {
    RewriteInputProps,
    RewriteInputSearchProps,
    RewriteInputTextareaProps,
    RewriteInputNumberProps,
    RewriteSelectPropsProps,
    RewriteRadioGroupProps,
    RewriteInputPasswordProps,
    RewriteAutocompleteProps,
    RewriteCheckboxGroupProps,
    RewriteSwitchProps,
    RewriteSliderProps,
    RewriteRateProps,
    RewriteDatePickerProps,
    RewriteCascaderProps
} from './components'


export interface RewriteFormItemPropsMap{
    input: RewriteInputProps
    'input-search': RewriteInputSearchProps
    'input-password': RewriteInputPasswordProps
    textarea: RewriteInputTextareaProps
    select: RewriteSelectPropsProps
    autocomplete: RewriteAutocompleteProps
    slider: RewriteSliderProps
    // 'select-v2': RewriteSelectProps<O>;
    // custom: RewriteInputProps;
    cascader: RewriteCascaderProps
    'cascader-panel': RewriteCascaderProps
    // 'input-autocomplete': RewriteAutocompleteProps;
    'input-number': RewriteInputNumberProps
    switch: RewriteSwitchProps
    datetime: RewriteDatePickerProps
    date: RewriteDatePickerProps
    dates: RewriteDatePickerProps
    week: RewriteDatePickerProps
    month: RewriteDatePickerProps
    quarter: RewriteDatePickerProps
    quarterrange: RewriteDatePickerProps
    year: RewriteDatePickerProps
    yearrange: RewriteDatePickerProps
    weekrange: RewriteDatePickerProps
    datetimerange: RewriteDatePickerProps
    daterange: RewriteDatePickerProps
    monthrange: RewriteDatePickerProps
    radio: RewriteRadioGroupProps
    'radio-button': RewriteRadioGroupProps
    checkbox: RewriteCheckboxGroupProps
    // 'checkbox-button': RewriteCheckboxGroupProps<O>;
    // 'tree-select': RewriteTreeSelectProps<O>;
    'rate': RewriteRateProps
}

export interface CustomFormItemProps<D = any, O = any[], N extends keyof RewriteFormItemPropsMap = any> extends Partial<Omit<FormItemProps, 'label'>>{
    key?: any
    tempKey?: any
    type?: N extends keyof RewriteFormItemPropsMap ? N : keyof RewriteFormItemPropsMap
    vif?: boolean | ((initialValues: D) => boolean)
    sort?: number
    options?: RewriteFormItemPropsMap[N]
    showLabel?: boolean
    required?: boolean
    initialValues?: D
    col?: ColProps
    slot?: any | ((formItem: CustomFormItemProps<D, O, N>) => any)
    label?: string | ((formItem: CustomFormItemProps<D, O, N>) => any)
}

type ToModelItem<D, FI> = D extends FI ? D : FI


type FormItemMap<D, FI> = {
    [P in keyof ToModelItem<D, FI>]: CustomFormItemProps<MergeProp<D, FI>, any[], ToModelItem<D, FI>[P] extends keyof RewriteFormItemPropsMap ? ToModelItem<D, FI>[P] : keyof RewriteFormItemPropsMap>;
}

export interface RewriteFormProps<D = any, FI = any> extends Omit<FormProps, 'initialValues'>{
    formItem: Partial<FormItemMap<D, FI>>
    initialValues: Partial<D>
    required?: boolean
    showLabel?: boolean
    name?: 'search' | 'horizontal'
    row?: RowProps
    col?: ColProps
    packUp?: boolean
    onSearch?: () => void
    onReset?: () => void
    onUnFold?: () => void
}
