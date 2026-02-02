"use client";

import { Contact } from "@/components/shared/contact"
import { Button } from "@/components/ui/button"
import { navigation } from "@/data/navigation"
import Logo from "../Logo"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Main Header */}
            <div className="absolute z-50 w-full px-4 sm:px-6 md:px-12 lg:px-20 bg-black/95 backdrop-blur-sm border-b border-green-500/30">
                <Contact type="header" />
                <header className="flex items-center justify-between py-3 md:py-4">
                    <Logo className="flex-row gap-2 md:gap-3" />
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
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
                    
                    {/* Desktop CTA Button */}
                    <Button className="hidden lg:flex bg-[#00FF00] text-black hover:bg-[#00CC00] text-sm px-4 xl:px-6 py-2 font-semibold">
                        Request a Demo
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </header>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pb-4 border-t border-green-500/30 mt-2">
                        <nav className="flex flex-col gap-4 pt-4">
                            {navigation.quicklinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white hover:text-[#00FF00] transition-colors text-base font-medium py-2">
                                    {link.name}
                                    {link.icon && <link.icon className="inline-block ml-2 h-4 w-4" />}
                                </a>
                            ))}
                            <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] text-sm px-6 py-3 font-semibold w-full mt-2">
                                Request a Demo
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </>
    )
}
export default Header