import NavLink from "@/components/nav-link"
import Logo from "@/components/graphics/logo"
import Link from "next/link"
import CTA from "@/components/cta"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="relative flex items-center justify-between px-16 py-8 text-sm">
                {/* Logo */}
                <Link href="/" className="p-2 rounded-full border-2 hover:border-black transition">
                    <Logo className="w-6 h-6 text-red-500" strokeWidth={4} />
                </Link>
                {/* Links */}
                <div className="absolute inset-0 pointer-events-none flex justify-center">
                    <ul className="flex items-center pointer-events-auto p-1">
                        <NavLink href="/" active="/" label="Home" />
                        <NavLink href="/work" active="/work" label="Work" />
                        <NavLink href="/company" active="/company" label="Company" />
                    </ul>
                </div>
                {/* CTA */}
                <CTA />
            </div>
        </nav>
    )
}