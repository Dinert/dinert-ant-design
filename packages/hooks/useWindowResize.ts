/**
 * 监听浏览器缩放，使用防抖函数做触发次数太多的处理
 */
import lodash from 'lodash'
import { useEffect } from 'react'

const useWindowResize = (resize: () => void, delay: number = 0, immediate: boolean = false) => {

    const handleResize = () => {
        resize()
    }

    const onResize = lodash.debounce(() => {
        handleResize()
    }, delay)

    if (immediate) {
        handleResize() // 手动触发一次
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    })
}

export default useWindowResize
