import { defineComponent, h } from "vue"
import VueWrapper from "./index"

const VueResolver = (component) => {
    console.log(component, 'componenttt')
    return defineComponent({
        inheritAttrs: false,
        setup(props, ctx) {
            return () => h(
                VueWrapper,
                {
                    component: component,
                    ...props,
                    ...ctx.attrs,
                },
                ctx.slots.default
            )
        }
    })
}

export default VueResolver
