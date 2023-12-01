import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const listVariants = {
    initial: { paddingLeft: 0, paddingRight: 0, paddingTop: '1rem', paddingBottom: '1rem' },
    hover: { paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }
}

const imageVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: .5, opacity: 0 }
}

export default function TeamList({ items }: { items: any }) {
    const [show, setShow] = useState<number | undefined>()

    return (
        <div className="flex flex-col divide-y w-full border-y h-fit">
            {items.map((row: any, index: number) => (
                <motion.div key={index} variants={listVariants} transition={{ type: "spring", damping: 20 }} initial="initial" whileHover="hover" onMouseEnter={() => setShow(index)} onMouseLeave={() => setShow(undefined)} className="group text-xl relative transition flex items-center justify-between">
                    <div className="font-medium">
                        <span>{row.name}</span>
                    </div>
                    <span className="font-semibold">{row.position}</span>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <AnimatePresence mode="wait">
                            {show === index && (
                                <div className="relative z-10">
                                    <motion.img variants={imageVariants} initial="initial" animate="animate" exit="exit" transition={{ type: "spring", damping: 20, stiffness: 200 }} className="w-36 h-36 aspect-square object-cover z-20 relative" src={row.img} alt={`${row.name}'s Potrait`} />
                                    <motion.div style={{ WebkitMaskImage: `url("${row.img}")`, WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "top", WebkitMaskSize: "9rem" }} variants={imageVariants} initial="initial" animate="animate" exit="exit" transition={{ type: "spring", damping: 20, stiffness: 300 }} className="w-36 h-36 bg-black z-10 absolute inset-0" />
                                    <motion.div style={{ WebkitMaskImage: `url("${row.img}")`, WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "top", WebkitMaskSize: "9rem" }} variants={imageVariants} initial="initial" animate="animate" exit="exit" transition={{ type: "spring", damping: 20, stiffness: 400 }} className="w-36 h-36 bg-red-500 z-[9] absolute inset-0" />
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}