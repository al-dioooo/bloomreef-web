import { useRect } from '@studio-freight/hamo'
import { useLenis } from '@studio-freight/react-lenis'
import { mapRange } from '@/libs/maths'
import { useEffect, useRef } from 'react'
// import s from '@/styles/scrollbar.module.scss'

export function Scrollbar() {
    const thumbRef = useRef()
    const lenis = useLenis()
    const [innerMeasureRef, { height: innerHeight }] = useRect()
    const [thumbMeasureRef, { height: thumbHeight }] = useRect()

    useLenis(
        ({ scroll, limit }) => {
            const progress = scroll / limit

            // @ts-ignore
            thumbRef.current.style.transform = `translate3d(0,${progress * (innerHeight - thumbHeight)
                }px,0)`
        },
        [innerHeight, thumbHeight],
    )

    useEffect(() => {
        let start = null

        function onPointerMove(e) {
            if (!start) return
            e.preventDefault()

            const scroll = mapRange(
                start,
                innerHeight - (thumbHeight - start),
                e.clientY,
                0,
                lenis.limit,
            )
            lenis.scrollTo(scroll, { immediate: true })
        }

        function onPointerDown(e) {
            start = e.offsetY
        }

        function onPointerUp() {
            start = null
        }

        thumbRef.current?.addEventListener('pointerdown', onPointerDown, false)
        window.addEventListener('pointermove', onPointerMove, false)
        window.addEventListener('pointerup', onPointerUp, false)

        return () => {
            thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false)
            window.removeEventListener('pointermove', onPointerMove, false)
            window.removeEventListener('pointerup', onPointerUp, false)
        }
    }, [lenis, innerHeight])

    return (
        <div className="fixed inset-y-0 right-0 z-[2]">
            <div ref={innerMeasureRef} className="h-full relative">
                <div ref={(node) => {
                    thumbRef.current = node
                    thumbMeasureRef(node)
                }} className="min-h-[10vw] w-[.5vw] bg-red-500 absolute right-0 cursor-grab" />
            </div>
        </div>
    )
}