import { CircleDecoration } from "@/components/graphics/decoration"
import { Asterisk } from "@/components/icons/outline"
import useDimension from "@/hooks/dimension"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Work() {
    // Scroll container refs
    const workSectionContainer = useRef()

    // Window dimension hooks
    const { height } = useDimension()

    const { scrollYProgress: scrollYProgressOnWork } = useScroll({
        // @ts-ignore
        target: workSectionContainer,
        offset: ['start start', 'end start']
    })

    return (
        <div className="">
            {/* @ts-ignore */}
            <section ref={workSectionContainer} className="pt-32">
                {/* <span className="text-lg px-16 font-medium">Our latest work</span> */}
                <motion.div transition={{ staggerChildren: 1 }} className="grid grid-cols-3 gap-8 px-16 py-8">
                    {[...Array(6)].map((row, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", damping: 20 }}>
                            <div className="w-full aspect-video overflow-hidden">
                                <img className="w-full" src="https://placehold.co/1600x900/EEE/31343C?font=playfair-display&text=Playfair%20Display" alt="" />
                            </div>
                            <p className="font-medium text-lg mt-2">Project Title</p>
                        </motion.div>
                    ))}
                </motion.div>
                {/* Just decoration */}
                <div className="mb-8 flex items-center justify-center relative">
                    <motion.span style={{ rotate: useTransform(scrollYProgressOnWork, [0, 1], [0, height * .8]) }}><Asterisk className="w-6 h-6" strokeWidth={1.5} /></motion.span>
                    <span className="absolute z-[1] inset-0 flex justify-center items-center"><CircleDecoration className="scale-110 text-red-500 -rotate-[9deg]" strokeWidth={2} /> </span>
                </div>
            </section>
        </div>
    )
}
