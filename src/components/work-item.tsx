import useDimension from "@/hooks/dimension"
import { motion, useTransform } from "framer-motion"
import Link from "next/link"

const MotionLink = motion(Link)

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

export default function WorkItem({ data, scrollProgress, index }: { data: any, scrollProgress: any, index: number }) {
    const { height } = useDimension()

    const y = useTransform(scrollProgress, [0, 1], [0, (height * index) * .1])

    return (
        // <motion.div key={index} style={{ y }}>
        //     <div className="w-full aspect-video overflow-hidden bg-neutral-200 border-2 border-black">
        //         <img className="w-full aspect-video object-cover" src={data.thumbnail} alt="" />
        //     </div>
        //     <p className="font-medium text-lg mt-2">{data.title}</p>
        // </motion.div>
        <MotionLink style={{ y }} href={`/work/${data.slug}`} key={index} whileHover="hover" transition={{ type: "spring", damping: 20 }}>
            <motion.div transition={springTransition} variants={imageVariant} className="w-full aspect-video overflow-hidden bg-neutral-200 border-2 border-black">
                <img className="w-full object-cover aspect-video" src={data.thumbnail} alt={`${data.title} Thumbnail`} />
            </motion.div>
            <motion.p variants={titleVariant} transition={springTransition} className="font-medium text-lg mt-2">{data.title}</motion.p>
        </MotionLink>
    )
}