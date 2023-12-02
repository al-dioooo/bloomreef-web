import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { usePathname } from "next/navigation"

const MotionLink = motion(Link)

export default function CTA() {
    const pathname = usePathname()

    const { scrollYProgress } = useScroll()

    return (
        <MotionLink href="/contact" className={`${pathname === '/contact/' ? 'border-red-500' : ''} px-12 py-2 rounded-full border-2 hover:border-black hover:bg-red-500 hover:text-white transition inline-flex items-center space-x-4 font-semibold`}>
            {pathname === '/contact/' ? (
                <span>Say Hi!</span>
            ) : (
                <span>Let&apos;s Talk</span>
            )}
        </MotionLink>
    )
}