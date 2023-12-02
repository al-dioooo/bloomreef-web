import { ArrowNarrowDown, ArrowNarrowLeft, Link as LinkIcon } from "@/components/icons/outline"
import useDimension from "@/hooks/dimension"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const data = {
    id: 1,
    title: "Mie Ayam Abadi",
    thumbnail: "/img/mie-ayam-abadi-cover-design.png",
    description: "Aplikasi untuk mengelola pemesanan dan pemasangan yang terjadi di semua toko yang dimiliki perusahaan, dan merancang basis data untuk menyimpan data pemesanan dan pemasangan yang terjadi sehingga perusahaan dapat membentuk laporan secara digital.",
    url: {
        label: "guguskarangmekar.com/mie-ayam-abadi",
        href: "https://guguskarangmekar.com/mie-ayam-abadi/"
    },
    photos: [
        {
            src: "/img/mie-ayam-abadi-cover-design.png",
            alt: "Mie Ayam Abadi Cover Design"
        }
    ]
}

export default function Detail() {
    // Scroll container refs
    const imageSectionContainer = useRef()

    // Window dimension hooks
    const { height } = useDimension()

    // Next.js router hooks
    const router = useRouter()

    // Scroll listeners
    const { scrollYProgress: scrollYProgressOnImage } = useScroll({
        // @ts-ignore
        target: imageSectionContainer,
        offset: ['start end', 'end start']
    })

    return (
        <div>
            <Head>
                <title>{data.title} — {process.env.APP_NAME}</title>
            </Head>
            {/* @ts-ignore */}
            <section ref={imageSectionContainer} className="pb-32">
                <div className="aspect-[32/9] overflow-hidden flex flex-col justify-end relative">
                    <motion.img className="w-full" style={{ y: useTransform(scrollYProgressOnImage, [0, 1], [0, height * .3]) }} src={data.thumbnail} alt="" />
                    {/* Overlary */}
                    <motion.div style={{ opacity: useTransform(scrollYProgressOnImage, [0, height], [0, height]) }} className="absolute inset-0 bg-black"></motion.div>
                    <div className="absolute inset-0 px-16 pt-32">
                        <button onClick={() => router.back()} className="flex items-center space-x-4 text-white">
                            <div className="rounded-full border-2 p-1 border-neutral-200">
                                <ArrowNarrowLeft className="w-8 h-8" />
                            </div>
                            <span className="uppercase tracking-widest">Back</span>
                        </button>
                    </div>
                </div>
                <div className="flex mt-8 px-16">
                    <div className="w-1/3"></div>
                    <div className="w-2/3">
                        <h1 className="text-5xl font-semibold font-display italic">{data.title}</h1>
                        <p className="leading-loose mt-8">{data.description}</p>
                        <a href={data.url.href} target="_blank" className="flex items-center space-x-2 group mt-16 w-fit">
                            <div className="p-1 border-2 border-neutral-200 rounded-full group-hover:border-red-500 transition">
                                <LinkIcon />
                            </div>
                            <span className="font-medium text-sm underline decoration-2 underline-offset-2 decoration-neutral-200 group-hover:decoration-red-500 transition">{data.url.label}</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
                <div className="rounded-full border-2 p-2">
                    <ArrowNarrowDown className="w-12 h-12" />
                </div>
            </section>
            <section className="p-32 space-y-32">
                {data.photos.map((row, index: number) => (
                    <img key={index} src={row.src} alt={row.alt} className="w-full border-4 border-black" />
                ))}
            </section>
        </div>
    )
}
