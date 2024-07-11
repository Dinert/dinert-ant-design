import * as veaury from 'veaury'
const {applyReactInVue} = veaury
export const getModule = (path: string) => {
    const moduleObj = (import.meta as any).glob('../../components/**/*.tsx', {eager: true})
    const initializePath = `../../components/${path}.tsx`
    if (moduleObj[initializePath]) {
        return applyReactInVue(moduleObj[initializePath].default)
    } else {
        throw Error('当前路由引入错误')
    }
}
