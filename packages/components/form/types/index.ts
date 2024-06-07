import {FormItemProps, FormProps } from 'antd'

export interface RewriteFormProps extends FormProps{
    formItem: Partial<FormItemProps>
}