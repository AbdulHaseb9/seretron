import Logo from "./Logo";
import { Socials } from "@/components/shared/socials";
import { info } from "@/data/info";
import {  FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    const companyLinks = [
        { name: "Home", href: "#home" },
        { name: "Our Solutions", href: "#solutions" },
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
    ];

    const serviceLinks = [
        { name: "Network Security", href: "#network" },
        { name: "Data Protection", href: "#data" },
        { name: "Identity & Access", href: "#identity" },
        { name: "Security Monitoring", href: "#monitoring" },
        { name: "Backup & Recovery", href: "#backup" },
        { name: "Security Configuration", href: "#config" }
    ];

    return (
        <footer className="bg-black text-white border-t border-[#00FF00]/30">
            <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
                    {/* Left Column - Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Logo className="flex-row gap-2" />
                        </div>
                        <p className="text-gray-300 text-sm mb-6">
                            Protecting your digital assets with cutting-edge cybersecurity solutions. 
                            No Breaches No Excuses.
                        </p>
                        <Socials />
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-300 hover:text-white text-sm transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-gray-300 text-sm">{info.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#00FF00]" />
                                <span className="text-gray-300 text-sm">{info.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <IoMdMail className="text-[#00FF00]" />
                                <span className="text-gray-300 text-sm">{info.email.official}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="border-t border-[#00FF00]/30 px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
                        © 2023 Seretron. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <a href="#terms" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors">
                            Terms & Conditions
                        </a>
                        <a href="#privacy" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
