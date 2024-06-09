
import { ForwardedRef, forwardRef } from "react"
interface myRef<T> {
  /**用myRef来代替原本的ref  */
  myRef?: ForwardedRef<T>;
}
/**创建使用forwardref的组件，且保留原组件的泛型。 代价是传递ref，得通过props - myRef
 * - 使用 forwardRef 包裹后，泛型将丢失，所以多包裹一层，只是为了保留泛型。但是想传递ref就只能通过myRef传递，不能直接使用ref属性 ，因为会报错"ref不是props"
 * @param originalComponent 原组件，需要两个参数，第一个参数是props，第二个参数是ref。
 * @template T props的类型
 * @template D ref的类型
 * @returns 新组件，可以正常使用泛型
 * @example
 * 普通无泛型组件：
 * const Xxx = myForwardref<propType,refType>(function Xxx(props, ref){ ... }) //此时ref和组件props会自动获得泛型传递的类型
 *
 * 有泛型的组件就比较麻烦，不能直接传递myForwardref的泛型，而是需要在函数里面自己传递类型：
 * const Xxx = myForwardref(function Xxx<T>(props: propType<T>, ref: ForwardedRef<refType>){ ... }) //其实就是ts类型的传递方式不同，泛型组件的泛型需要写在里面，才能获取到泛型。且注意需要给refType加上 ForwardedRef<refType>
 *
 * 需要暴露数据给外部，就：
 * useImperativeHandle(ref, () => ({ xxxx })); //暴露出内部方法
 */
const myForwardref = function <T, D>(originalComponent: (props: T, ref: ForwardedRef<D>) => JSX.Element) {
  const ForwardRefComponent = forwardRef(originalComponent)
  ForwardRefComponent.displayName = "ForwardRefComponent"
  return function NewComponent(props: T & myRef<D>) {
    return <ForwardRefComponent {...(props as any)} ref={props.myRef} />
  }
}
export default myForwardref
