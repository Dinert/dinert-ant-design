
import type {RewriteTableProps} from '@packages/components/table/types/index'

export const resizeTaleHeight = (scroll: RewriteTableProps['scroll'], tableClass: string): number => {
    let height = 0

    if(scroll && scroll.y === 'auto') {
        const tableDom = document.querySelector('.' + tableClass)
        const tableParentDom = tableDom?.parentElement
        tableParentDom?.classList.add('wrap_' + tableClass)
        const tableParentChildrenAllDom = document.querySelectorAll('.wrap_' + tableClass + " > *") as any

        const headDom = tableDom?.querySelector('.ant-table-header') as HTMLElement
        const headHeight = headDom.offsetHeight || 0

        const footerDom = tableDom?.querySelector('.ant-table-pagination') as HTMLElement
        const footerHeight = footerDom.offsetHeight || 0

        const footerMT = parseInt(window.getComputedStyle(footerDom, null).marginTop) || 0
        const footerBT = parseInt(window.getComputedStyle(footerDom, null).marginBottom) || 0

        const tableParentHeight = tableParentDom?.offsetHeight || 0

        let tableDomSilingHeight = 0
        ;[...tableParentChildrenAllDom].map((item: HTMLElement) => {
            if(item !== tableDom) {
                tableDomSilingHeight += item.offsetHeight || 0
            }
        })
        height = tableParentHeight - tableDomSilingHeight - headHeight - footerHeight - footerMT - footerBT
        console.log(height, 'heightheight')
        return height
    }
    return height
}
