import { Lenis, useLenis } from "@studio-freight/react-lenis"

import Navbar from "@/components/layouts/navbar"
import Footer from "@/components/layouts/footer"
import { useEffect } from "react"
import { Router } from "next/router"
import { Scrollbar } from "@/components/scrollbar"

export default function MainLayout({ children }: { children: any }) {
    const lenis = useLenis()

    useEffect(() => {
        function onHashChangeStart(url: string) {
            url = '#' + url.split('#').pop()

            lenis.scrollTo(url)
        }

        Router.events.on('hashChangeStart', onHashChangeStart)

        return () => {
            Router.events.off('hashChangeStart', onHashChangeStart)
        }

    }, [lenis])

    return (
        <Lenis root>
            <main>
                <Scrollbar />
                <Navbar />
                {children}
                <Footer />
            </main>
        </Lenis>
    )
}