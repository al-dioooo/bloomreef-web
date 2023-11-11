import { CircleDecoration } from "@/components/graphics/decoration"
import { ArrowNarrowDown, Asterisk } from "@/components/icons/outline"
import useDimension from "@/hooks/dimension"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const whatWeDoItems = ["Digital Experience", "Business Strategy"]

export default function Landing() {
    // Scroll container refs
    const heroSectionContainer = useRef()
    const workSectionContainer = useRef()
    const runningSectionContainer = useRef()

    // Window dimension hooks
    const { height } = useDimension()

    // Scroll Listeners
    const { scrollYProgress: scrollYProgressOnHero } = useScroll({
        // @ts-ignore
        target: heroSectionContainer,
        offset: ['start start', 'end start']
    })

    const { scrollYProgress: scrollYProgressOnWork } = useScroll({
        // @ts-ignore
        target: workSectionContainer,
        offset: ['start end', 'end start']
    })

    const { scrollYProgress: scrollYProgressOnRunning } = useScroll({
        // @ts-ignore
        target: runningSectionContainer,
        offset: ['start end', 'end start']
    })

    // Animation controls
    

    return (
        <div>
            {/* Bloomreef, a digital-first website agency */}
            {/* @ts-ignore */}
            <section ref={heroSectionContainer} className="relative h-screen px-16 pb-8 pt-32 flex flex-col w-full">
                <div className="z-[1]">
                    <h1 className="text-6xl leading-normal italic font-display font-medium">
                        <motion.div style={{ y: useTransform(scrollYProgressOnHero, [0, 1], [0, height * .3]) }} className="z-[1] relative">An-incredible</motion.div>
                        <motion.div style={{ y: useTransform(scrollYProgressOnHero, [0, 1], [0, height * .25]) }}>
                            <span className="bg-white"><span className="text-red-500">—</span> Software House.</span>
                        </motion.div>
                    </h1>
                    <motion.div style={{ y: useTransform(scrollYProgressOnHero, [0, 1], [0, height * .2]) }} className="max-w-md mt-16">
                        <p className="leading-loose font-medium inline bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, corrupti consequuntur voluptatibus vero optio porro!</p>
                    </motion.div>
                </div>
                <div className="self-end -mt-72 w-2/3">
                    <div className="aspect-cinema w-full overflow-hidden flex items-end">
                        <motion.img style={{ y: useTransform(scrollYProgressOnHero, [0, 1], [0, height * .3]) }} className="w-full" src="/img/black-marble-bg.jpg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <div className="rounded-full border-2 p-2">
                        <ArrowNarrowDown className="w-12 h-12" />
                    </div>
                </div>
            </section>
            {/* What we do ... */}
            {/* @ts-ignore */}
            <section ref={runningSectionContainer} className="py-8">
                {whatWeDoItems.map((row, index) => (
                    <div key={index} className={`${index % 2 === 0 ? "justify-start" : "justify-end"} flex items-center space-x-4 overflow-hidden max-w-full`}>
                        {[...Array(3)].map(() => (
                            <motion.div key={index} style={{ x: useTransform(scrollYProgressOnRunning, [0, 1], [0, index % 2 === 0 ? (-height * .8) : height * .8]) }} className="flex-shrink-0">
                                <p className="text-7xl mt-2 inline-flex items-center space-x-4">
                                    <span className="rounded-full p-4 border-2">
                                        <Asterisk className="w-12 h-12 text-red-500" strokeWidth={1.5} />
                                    </span>
                                    <span>{row}</span>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </section>
            {/* Image separator */}
            {/* <section className="relative">
                <div className="aspect-cinema overflow-hidden">
                    <img src="/img/black-sea-marble-bg.jpg" alt="" />
                </div>
            </section> */}
            {/* Latest work, grid */}
            {/* @ts-ignore */}
            <section ref={workSectionContainer} className="py-8">
                <span className="text-lg px-16 font-medium">Our latest work</span>
                <div className="grid grid-cols-3 gap-8 px-16 py-8">
                    {[...Array(3)].map((row, index) => (
                        <motion.div key={index} style={{ y: useTransform(scrollYProgressOnWork, [0, 1], [0, (height * index) * .1]) }}>
                            <div className="w-full aspect-video overflow-hidden">
                                <img className="w-full" src="https://placehold.co/1600x900/EEE/31343C?font=playfair-display&text=Playfair%20Display" alt="" />
                            </div>
                            <p className="font-medium text-lg mt-2">Project Title</p>
                        </motion.div>
                    ))}
                </div>
                {/* Just decoration */}
                <div className="mt-32 mb-8 flex items-center justify-center relative">
                    <motion.span style={{ rotate: useTransform(scrollYProgressOnWork, [0, 1], [0, height * .8]) }}><Asterisk className="w-6 h-6" strokeWidth={1.5} /></motion.span>
                    <span className="absolute z-[1] inset-0 flex justify-center items-center"><CircleDecoration className="scale-110 text-red-500 -rotate-[9deg]" strokeWidth={2} /> </span>
                </div>
            </section>
            {/* Latest work, flex scrollable */}
            {/* <section className="py-8">
                <span className="text-lg px-16 font-medium">Our latest work</span>
                <div className="flex items-center space-x-16 overflow-x-auto max-w-full px-16 py-8">
                    {[...Array(16)].map(() => (
                        <div className="w-[30rem] flex-shrink-0">
                            <img className="w-full aspect-video" src="https://placehold.co/1600x900/EEE/31343C?font=playfair-display&text=Playfair%20Display" alt="" />
                            <p className="font-medium text-lg mt-2">Project Title</p>
                        </div>
                    ))}
                </div>
            </section> */}
            {/* We are ... */}
            <section className="py-16 pl-32 pr-16 relative">
                <div className="space-y-12">
                    <h4 className="leading-normal">
                        <div className="text-3xl font-medium">What others take for granted,</div>
                        <div className="text-5xl font-semibold font-display italic">we pursue to infinity.</div>
                    </h4>
                    <p className="leading-loose font-medium">
                        <span className="text-red-500">—</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officiis, voluptate laboriosam enim architecto adipisci cupiditate. Reiciendis ipsam pariatur natus rem, voluptates, voluptate aut ducimus sint consectetur suscipit eius atque.
                    </p>
                </div>
            </section>
        </div>
    )
}
