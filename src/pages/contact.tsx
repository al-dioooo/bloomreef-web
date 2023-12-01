import AsteriskSpinner from "@/components/asterisk-spinner"
import Input from "@/components/forms/input"
import { CircleDecoration } from "@/components/graphics/decoration"
import { ArrowNarrowRight, ArrowUpRight, Asterisk, Mail, WhatsApp } from "@/components/icons/outline"
import useDimension from "@/hooks/dimension"
import axios from "axios"
import { motion, useScroll, useTransform } from "framer-motion"
import Head from "next/head"
import { useRef, useState } from "react"

const contacts = [
    {
        label: "Email",
        value: "hello@guguskarangmekar.com",
        url: "mailto:hello@guguskarangmekar.com"
    },
    {
        label: "WhatsApp",
        value: "+62 851-7307-5151",
        url: "https://wa.me/6285173075151"
    },
    {
        label: "Instagram",
        value: "@al.dioooo",
        url: "https://instagram.com/al.dioooo"
    }
]

export default function Contact() {
    const [name, setName] = useState("Alice")
    const [email, setEmail] = useState("hello@alice.evr")
    const [message, setMessage] = useState("I want to ...")

    function submitHandler() {
        axios.post(`http://the-backend.test/message`, {
            name,
            email,
            message
        }).then((res) => res).catch((error) => console.log(error))
    }

    return (
        <div>
            <Head>
                <title>Contact — {process.env.appName}</title>
            </Head>
            {/* Say hi! */}
            <section className="pb-16 pt-32 px-16 relative flex justify-between">
                <div className="space-y-12">
                    <h4 className="leading-normal">
                        <div className="text-3xl font-medium">Don&apos;t be shy,</div>
                        <div className="text-5xl font-semibold font-display italic">say hi!<span className="text-red-500">~</span></div>
                    </h4>
                    <p className="leading-loose font-medium max-w-md">
                        Should you wish to discuss further on how we can assist you, you can talk to us here.
                    </p>
                </div>
                <div className="flex flex-col divide-y w-full max-w-3xl border-y h-fit">
                    {contacts.map((row, index) => (
                        <motion.a key={index} href={row.url} target="_blank" transition={{ type: "spring", damping: 20 }} initial={{ paddingLeft: 0, paddingRight: 0, paddingTop: '1rem', paddingBottom: '1rem' }} whileHover={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }} className="group text-xl transition flex items-center justify-between">
                            <div className="font-medium inline-flex space-x-4 items-center">
                                <span>{row.label}</span>
                                <span className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                                    <ArrowUpRight className="w-6 h-6" strokeWidth={1.5} />
                                </span>
                            </div>
                            <span className="font-semibold">{row.value}</span>
                        </motion.a>
                    ))}
                </div>
            </section>
            {/* Just decoration */}
            <section className="flex items-center justify-center relative">
                <AsteriskSpinner strokeWidth={1.5} baseVelocity={8} />
                <span className="absolute z-[1] inset-0 flex justify-center items-center"><CircleDecoration className="scale-110 text-red-500 -rotate-[9deg]" strokeWidth={2} /> </span>
            </section>
            {/* Send message */}
            <section className="p-16 space-y-4">
                <span className="text-lg font-medium">Drop a quick word</span>
                <div className="text-4xl font-medium leading-loose">
                    <div className="flex flex-wrap">
                        <span className="mr-2">Hello, I am</span>
                        <span onInput={(e) => setName(e.currentTarget.innerText)} className="underline decoration-neutral-200 focus:outline-none focus:decoration-red-200 text-red-500" contentEditable>Alice</span>
                        <span className="mr-2">. My email is</span>
                        <span onInput={(e) => setEmail(e.currentTarget.innerText)} className="underline decoration-neutral-200 focus:outline-none focus:decoration-red-200 text-red-500" contentEditable>hello@alice.evr</span>
                        <span>.</span>
                    </div>
                    <div className="flex flex-wrap">
                        <span onInput={(e) => setMessage(e.currentTarget.innerText)} className="underline decoration-neutral-200 focus:outline-none focus:decoration-red-200 text-red-500" contentEditable>I want to ...</span>
                    </div>
                    <div className="w-fit mt-4">
                        <button onClick={submitHandler} className="rounded-full border-2 p-2 hover:border-red-500 transition">
                            <ArrowNarrowRight className="w-12 h-12" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
