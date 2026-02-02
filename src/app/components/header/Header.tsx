"use client";

import { Contact } from "@/components/shared/contact"
import { Button } from "@/components/ui/button"
import { navigation } from "@/data/navigation"
import Logo from "../Logo"

const Header = () => {
    return (
        <>
            {/* Main Header */}
            <div className="absolute z-50 w-full px-20 bg-black/95 backdrop-blur-sm border-b border-green-500/30">
                <Contact type="header" />
                <header className="flex items-center justify-between py-4">
                    <Logo className="flex-row gap-3" />
                    <nav className="flex items-center gap-6">
                        {navigation.quicklinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-[#00FF00] transition-colors text-sm font-medium">
                                {link.name}
                                {link.icon && <link.icon className="inline-block ml-1 h-3 w-3" />}
                            </a>
                        ))}
                    </nav>
                    <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] text-sm px-6 py-2 font-semibold">
                        Request a Demo
                    </Button>
                </header>
            </div>
        </>
    )
}
export default Header