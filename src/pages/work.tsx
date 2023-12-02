import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"

const workData = [
    {
        id: 1,
        title: "Mie Ayam Abadi",
        thumbnail: "/img/mie-ayam-abadi-cover-design.png",
        slug: "mie-ayam-abadi"
    },
    {
        id: 2,
        title: "Kaca Film",
        thumbnail: "/img/kaca-film-cover-design.png",
        slug: "kaca-film"
    },
    {
        id: 3,
        title: "Advan Retail Management",
        thumbnail: "/img/arm-cover-design.png",
        slug: "advan-retail-management"
    }
]

const linkVariant = {
    initial: { opacity: 0, y: 50 },
    show: (index: number) => ({ opacity: 1, y: 0, transition: { type: "spring", delay: .1 * index } })
}

const imageVariant = {
    hover: {
        scale: 1.1
    }
}

const titleVariant = {
    hover: {
        y: -40
    }
}

const springTransition = {
    type: "spring"
}

const MotionLink = motion(Link)

export default function Work() {
    return (
        <div>
            <Head>
                <title>Work — {process.env.APP_NAME}</title>
            </Head>
            <section className="pt-32">
                <span className="text-lg px-16 font-medium">All Projects</span>
                <div className="grid grid-cols-3 gap-8 px-16 py-8">
                    {workData.map((row, index: number) => (
                        <MotionLink href={`/work/${row.slug}`} key={index} initial="initial" whileInView="show" whileHover="hover" viewport={{ once: true }} variants={linkVariant} custom={index} transition={{ type: "spring", damping: 20 }}>
                            <motion.div transition={springTransition} variants={imageVariant} className="w-full aspect-video overflow-hidden bg-neutral-200 border-2 border-black">
                                <img className="w-full object-cover aspect-video" src={row.thumbnail} alt={`${row.title} Thumbnail`} />
                            </motion.div>
                            <motion.p variants={titleVariant} transition={springTransition} className="font-medium text-lg mt-2">{row.title}</motion.p>
                        </MotionLink>
                    ))}
                </div>
            </section>
        </div>
    )
}
