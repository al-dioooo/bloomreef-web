import NavLink from "@/components/nav-link"
import Logo from "../graphics/logo"
import Link from "next/link"
import { Phone } from "../icons/outline"

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 text-sm flex items-center justify-between px-16 py-8">
            {/* Logo */}
            <Link href="/" className="p-2 rounded-full border-2 hover:border-black transition">
                <Logo className="w-6 h-6 text-red-500" strokeWidth={4} />
            </Link>
            {/* Pill */}
            <ul className="flex items-center pointer-events-auto p-1">
                <NavLink href="/" active="/" label="Home" />
                <NavLink href="/work" active="/work" label="Work" />
                <NavLink href="/company" active="/company" label="Company" />
            </ul>
            {/* CTA */}
            <Link href="/contact" className="px-12 py-2 rounded-full border-2 hover:border-black hover:bg-red-100 transition inline-flex items-center space-x-4 font-semibold">
                <span>Let&apos;s Talk</span>
            </Link>
        </nav>
    )
}