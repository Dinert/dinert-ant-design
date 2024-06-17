
import type {RewriteTableProps} from '@packages/components/table/types/index'

export const resizeTaleHeight = (scroll: RewriteTableProps['scroll'], tableClass: string): number => {
    let height = 0

    if(scroll && scroll.y === 'auto') {
        let tableDom = document.querySelector('.' + tableClass)
        let tableParentDom = tableDom?.parentElement
        tableParentDom?.classList.add('wrap_' + tableClass)
        let tableParentChildrenAllDom = document.querySelectorAll('.wrap_' + tableClass + " > *") as any

        let headDom = tableDom?.querySelector('.ant-table-header') as HTMLElement
        const headHeight = (headDom && headDom.offsetHeight) || 0

        let footerDom = tableDom?.querySelector('.ant-table-pagination') as HTMLElement
        const footerHeight = (footerDom && footerDom.offsetHeight) || 0
        const footerMT = (footerDom && parseInt(window.getComputedStyle(footerDom, null).marginTop)) || 0
        const footerBT = (footerDom && parseInt(window.getComputedStyle(footerDom, null).marginBottom)) || 0

        let titleDom = tableDom?.querySelector('.ant-table-title') as HTMLElement
        const titleHeight = (titleDom && titleDom.offsetHeight) || 0
        const titleMT = (titleDom && parseInt(window.getComputedStyle(titleDom, null).marginTop)) || 0
        const titleBT = (titleDom && parseInt(window.getComputedStyle(titleDom, null).marginBottom)) || 0

        const tableParentHeight = tableParentDom?.offsetHeight || 0

        let tableDomSilingHeight = 0
        ;[...tableParentChildrenAllDom].map((item: HTMLElement) => {
            if(item !== tableDom) {
                tableDomSilingHeight += item.offsetHeight || 0
            }
        })
        height = tableParentHeight - tableDomSilingHeight - headHeight - footerHeight - footerMT - footerBT -titleHeight - titleMT - titleBT
        footerDom = null as any
        headDom = null as any
        tableDom = null
        tableParentDom=  null
        tableParentChildrenAllDom = null
        titleDom = null as any
        return height
    }
    return height
}