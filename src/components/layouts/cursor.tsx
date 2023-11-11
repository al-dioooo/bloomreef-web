import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
    const cursorSize = 48
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
        scale: useMotionValue(0)
    }

    const smoothOptions = { damping: 20 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
        scale: useSpring(mouse.scale, smoothOptions)
    }

    const manageMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        mouse.x.set(clientX - cursorSize / 2)
        mouse.y.set(clientY - cursorSize / 2)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])

    return (
        <motion.div
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute w-12 h-12 bg-white bg-opacity-5 border-2 border-white border-opacity-75 rounded-full pointer-events-none">
        </motion.div>
    )
}