import { Clover } from "@/components/icons/outline"
import Logo from "@/components/graphics/logo"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t px-16">
            <div className="flex justify-center py-4">
                {/* Logo */}
                <div className="p-2 border-2 rounded-full">
                    <Logo className="w-12 h-12 text-red-500" />
                </div>
            </div>
            <div className="flex items-center justify-between py-4 text-xs font-medium">
                <div className="tracking-wide">&copy; {year} Gugus Karang Mekar. All rights reserved.</div>
                <div className="inline-flex items-center"><span className="mx-1"><Clover className="w-4 h-4 text-red-500" strokeWidth={2} /></span>Built in BGR City.</div>
            </div>
        </footer>
    )
}