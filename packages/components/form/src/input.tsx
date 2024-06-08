import { Input } from "antd"
import {CustomFormItemProps} from '@packages/components/form/types/index'

const InputC: React.FC<CustomFormItemProps> = (formItem) => {
    if(formItem['type'] === 'input') {
        return (
            <Input {...formItem.options}></Input>
        )
    }else if(formItem['type'] === 'input-search') {
        return (
            <Input.Search {...formItem.options} ></Input.Search>
        )
    }

}

export default InputC
