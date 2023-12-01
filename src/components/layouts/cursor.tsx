import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
    const cursorSize = 48
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),

        opacity: useMotionValue(0)
    }

    const smoothOptions = { damping: 20 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),

        opacity: useSpring(mouse.opacity, smoothOptions)
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        mouse.x.set(clientX - cursorSize / 2)
        mouse.y.set(clientY - cursorSize / 2)
    }

    const manageMouseEnter = () => {
        mouse.opacity.set(1)
    }

    const manageMouseLeave = () => {
        mouse.opacity.set(0)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        window.addEventListener("mouseover", manageMouseEnter)
        window.addEventListener("mouseout", manageMouseLeave)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
            window.removeEventListener("mouseover", manageMouseEnter)
            window.removeEventListener("mouseout", manageMouseLeave)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 z-[100] mix-blend-difference">
            <motion.div
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    opacity: smoothMouse.opacity
                }}
                className="absolute w-12 h-12 bg-white bg-opacity-5 border-2 border-white border-opacity-75 rounded-full pointer-events-none">
            </motion.div>
        </div>
    )
}