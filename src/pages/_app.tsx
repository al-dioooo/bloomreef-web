import Cursor from '@/components/layouts/cursor'
import MainLayout from '@/layouts/main'
import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <MainLayout>
            <AnimatePresence mode="wait" initial={false}>
                <div key={router.pathname}>
                    <AnimatePresence>
                        <Component {...pageProps} />
                    </AnimatePresence>

                    {/* Transition */}
                    <motion.div className="fixed top-0 left-0 bg-black w-full overflow-hidden text-white origin-top z-[99] flex items-center justify-center" initial={{ height: 0 }} animate={{ height: 0 }} exit={{ height: '100vh' }} transition={{ type: "spring", damping: 20, delay: .1 }}>
                    </motion.div>
                    <motion.div className="fixed top-0 left-0 bg-neutral-800 w-full overflow-hidden text-white origin-top z-[98] flex items-center justify-center" initial={{ height: 0 }} animate={{ height: 0 }} exit={{ height: '100vh' }} transition={{ type: "spring", damping: 20 }}>
                    </motion.div>
                    <motion.div className="fixed bottom-0 left-0 bg-black w-full overflow-hidden text-white origin-top z-[99] flex items-center justify-center" initial={{ height: '100vh' }} animate={{ height: 0 }} exit={{ height: 0 }} transition={{ type: "spring", damping: 20 }}>
                    </motion.div>
                    <motion.div className="fixed bottom-0 left-0 bg-neutral-800 w-full overflow-hidden text-white origin-top z-[98] flex items-center justify-center" initial={{ height: '100vh' }} animate={{ height: 0 }} exit={{ height: 0 }} transition={{ type: "spring", damping: 20, delay: .1 }}>
                    </motion.div>
                </div>
            </AnimatePresence>
        </MainLayout>
    )
}