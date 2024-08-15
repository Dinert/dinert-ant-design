import { RewriteModalProps } from '../components'
import lodash from 'lodash'
import { Dispatch, useState } from 'react'


class UseModal {

    options: RewriteModalProps
    open: [RewriteModalProps['open'], Dispatch<RewriteModalProps['open']>]
    stateOpen: RewriteModalProps['open']
    updateOpen: Dispatch<RewriteModalProps['open']>


    private readonly defaultOptions: RewriteModalProps = {
        open: false
    }
    constructor(options: RewriteModalProps) {

        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)

        this.open = useState<RewriteModalProps['open']>(this.options.open || false)
        this.stateOpen = this.open[0]
        this.updateOpen = this.open[1]
    }
}


export default UseModal
