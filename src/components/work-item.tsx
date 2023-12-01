import useDimension from "@/hooks/dimension"
import { motion, useTransform } from "framer-motion"

export default function WorkItem({ data, scrollProgress, index }: { data: any, scrollProgress: any, index: number }) {
    const { height } = useDimension()

    const y = useTransform(scrollProgress, [0, 1], [0, (height * index) * .1])

    return (
        <motion.div key={index} style={{ y }}>
            <div className="w-full aspect-video overflow-hidden bg-neutral-200 border-2 border-black">
                <img className="w-full aspect-video object-cover" src={data.thumbnail} alt="" />
            </div>
            <p className="font-medium text-lg mt-2">{data.title}</p>
        </motion.div>
    )
}