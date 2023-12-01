import useDimension from "@/hooks/dimension"
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { useRef } from "react"

export default function AsteriskSpinner({ className, strokeWidth, baseVelocity = 100 }: { className?: string, strokeWidth?: number, baseVelocity?: number }) {
    const baseRotate = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    const rotate = useTransform(baseRotate, (value) => value * baseVelocity)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseRotate.set(baseRotate.get() + moveBy)
    })

    // Window dimension hooks
    // const { height } = useDimension()

    return (
        <motion.span style={{ rotate }}>
            <svg xmlns="http://www.w3.org/2000/svg" className={className} width={24} height={24} viewBox="0 0 24 24" strokeWidth={strokeWidth ?? 1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12l8 -4.5"></path>
                <path d="M12 12v9"></path>
                <path d="M12 12l-8 -4.5"></path>
                <path d="M12 12l8 4.5"></path>
                <path d="M12 3v9"></path>
                <path d="M12 12l-8 4.5"></path>
            </svg>
        </motion.span>
    )
}