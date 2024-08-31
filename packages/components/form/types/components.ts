
// import {MergeProp} from './utils'
import {
    InputProps,
    InputNumberProps,
    SelectProps,
    RadioGroupProps,
    SpaceProps,
    AutoCompleteProps,
    SwitchProps,
    SliderSingleProps,
} from 'antd'
import { SearchProps } from 'antd/es/input/Search'
import { PasswordProps } from 'antd/es/input/Password'
import { CheckboxGroupProps } from 'antd/es/checkbox'
import { SliderRangeProps } from 'antd/es/slider'

export type RewriteInputProps = Partial<InputProps>
export type RewriteAutocompleteProps = Partial<AutoCompleteProps>
export type RewriteInputSearchProps = Partial<SearchProps>
export type RewriteInputPasswordProps = Partial<PasswordProps>
export type RewriteInputTextareaProps = Partial<InputProps>
export type RewriteInputNumberProps = Partial<InputNumberProps>
export type RewriteSelectPropsProps = Partial<SelectProps>
export type RewriteRadioGroupProps = Partial<RadioGroupProps & {direction: SpaceProps['direction']}>
export type RewriteCheckboxGroupProps = Partial<CheckboxGroupProps & {direction: SpaceProps['direction']}>
export type RewriteSwitchProps = Partial<SwitchProps>
export type RewriteSliderProps = Partial<Pick<SliderRangeProps, 'range'> & Omit<SliderSingleProps, 'range'>>

// export type RewriteTextareaProps = Partial<InputProps & Pick<typeof ElInput, 'onInput'| CommonFn>>

// export type RewriteSelectProps<O = any[]> = Partial<Omit<ExtractPropTypes<typeof SelectProps>, 'options'> &
// {options: O | SelectOptionProxy[], label: string, value: string }
// & Pick<typeof ElSelect, CommonFn | 'onVisible-change' | 'onRemove-tag'>
// >
// export type RewriteCascaderProps<O = any[]> = Partial<Omit<ExtractPropTypes<typeof cascaderProps>, 'options' | 'props'> & {optison: O, props: Partial<MergeProp<CascaderProps, TreeOptionProps>>} & Pick<typeof ElCascader, CommonFn | 'onVisible-change' | 'onRemove-tag'>>

// export type RewriteAutocompleteProps = Partial<AutocompleteProps & Pick<typeof ElAutocomplete, 'onSelect' | 'onChange'>>

// export type RewriteInputNumberProps = Partial<InputNumberProps & Pick<typeof ElInputNumber, CommonFn>>


// export type RewriteDatePickerProps = Partial<DatePickerProps & Pick<typeof ElDatePicker, CommonFn | 'onVisible-change' | 'onCalendar-change' | 'onPanel-change'>>

// export type RewriteRadioGroupProps<O = any[]> = Partial<RadioGroupProps & {options: O | RadioProps[], value: string} & Pick<typeof ElRadioGroup, 'onChange'>>

// export type RewriteCheckboxGroupProps<O = any[]> = Partial<CheckboxGroupProps & {options: O | CheckboxProps[], value: string} & Pick<typeof ElCheckbox, 'onChange'>>

// export type RewriteTreeSelectProps<O = any[]> = Partial<Omit<TreeProps, 'props'> & Omit<ExtractPropTypes<typeof SelectProps>, 'options'> &
// {options: O | SelectOptionProxy[], label: string, value: string, data: O | SelectOptionProxy[]} &
// Pick<typeof ElTreeSelect, CommonFn> & Pick<typeof ElTree,
// 'onCurrent-change'| 'onCheck' | 'onNode-click' | 'onCurrent-change' | 'onNode-expand' |'onCheck-change' | 'onNode-click' | 'onNode-contextmenu' | 'onNode-collapse' | 'onNode-drag-start'
// | 'onNode-drag-end' | 'onNode-drop'|'onNode-drag-leave' | 'onNode-drag-enter' | 'onNode-drag-over'>>


// export type RewriteRewriteRateProps<O = any[]> = Partial<Omit<RateProps, 'options'> & {options: O} & Pick<typeof ElRate, 'onChange'>>
