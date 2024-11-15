import { CircleDecoration } from "@/components/graphics/decoration"
import TeamList from "@/components/team-list"
import useDimension from "@/hooks/dimension"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { useRef } from "react"

const teams = [
    {
        name: "R. Usman Hasan Saputra",
        img: "/img/memoji/usman.png",
        position: "Developer"
    },
    {
        name: "Muhammad Naufal Musyaffa",
        img: "/img/memoji/naufal.png",
        position: "Developer"
    },
    {
        name: "Muhammad Rifky Afrizal",
        img: "/img/memoji/rifky.png",
        position: "QA Tester"
    },
    {
        name: "Nuh Risaldi Suherman",
        img: "/img/memoji/risaldi.png",
        position: "QA Tester"
    },
    {
        name: "Aldio Lisafron",
        img: "/img/memoji/aldio.png",
        position: "Developer"
    }
]

export default function Company() {
    // Scroll container refs
    const imageSectionContainer = useRef()

    const teamListContainer = useRef()

    // Window dimension hooks
    const { height } = useDimension()

    // Scroll listeners
    const { scrollYProgress: scrollYProgressOnImage } = useScroll({
        // @ts-ignore
        target: imageSectionContainer,
        offset: ['start end', 'end start']
    })

    return (
        <div>
            <Head>
                <title>Company — {process.env.APP_NAME}</title>
            </Head>
            <section className="pb-16 pt-32 px-16 relative flex justify-between">
                <div className="space-y-12">
                    <h4 className="leading-normal">
                        <div className="text-3xl font-medium">We are</div>
                        <div className="text-5xl font-semibold font-display italic">Bloomreef</div>
                    </h4>
                    <p className="leading-loose font-medium max-w-md">
                        A dedicated team obsessed with your brand&apos;s mission.
                    </p>
                </div>
            </section>
            {/* Image separator */}
            {/* @ts-ignore */}
            {/* <section ref={imageSectionContainer} className="relative">
                <div className="aspect-[32/9] overflow-hidden flex flex-col justify-center">
                    <motion.img className="w-full" style={{ y: useTransform(scrollYProgressOnImage, [0, 1], [0, height * .3]) }} src="/img/black-sea-marble-bg.jpg" alt="" />
                </div>
                <div className="absolute inset-0 bg-white m-16 flex items-center justify-center font-display italic text-3xl">
                    A dedicated team obsessed with your brand's mission
                </div>
            </section> */}
            {/* Teams, grid */}
            {/* @ts-ignore */}
            {/* <section className="py-8 text-center space-y-8">
                <div className="flex items-center justify-center relative">
                    <span className="text-lg px-16 font-medium">Teams</span>
                    <span className="absolute z-[1] inset-0 flex justify-center items-center"><CircleDecoration className="scale-110 text-red-500 -rotate-[9deg]" strokeWidth={2} /> </span>
                </div>
                <div className="flex space-x-16 justify-center">
                    {teams.map((row, index) => (
                        <motion.div key={index}>
                            <div className="aspect-square overflow-hidden rounded-full w-48 bg-neutral-100">
                                <img className="w-full aspect-square rounded-full object-cover" src={row.img} alt="" />
                            </div>
                            <p className="font-medium text-lg mt-2">{row.name}</p>
                            <p className="font-medium text-sm text-neutral-500">{row.position}</p>
                        </motion.div>
                    ))}
                </div>
            </section> */}
            <section className="py-8 px-16">
                {/* @ts-ignore */}
                <TeamList items={teams} />
            </section>
        </div>
    )
}
