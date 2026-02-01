import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { ReactNode } from "react";
import { info } from "@/data/info";

export const Socials = () => {

    interface SocialLink {
        name: string;
        url: string;
        icon: ReactNode;
    }
    const socialLinks: SocialLink[] = [
        {
            name: "instagram",
            url: info.socials.instagram,
            icon: <FaInstagram />
        },
        {
            name: "facebook",
            url: info.socials.facebook,
            icon: <FaFacebook />
        },
        {
            name: "linkedin",
            url: info.socials.linkedin,
            icon: <FaLinkedin />
        },
    ];

    return (
        <div className="flex gap-2">
            {
                socialLinks.map(({ name, url, icon }) => (
                    <Link key={name} href={url} target="_blank" className="text-white mx-2 text-xl hover:text-gray-300">
                        {icon}
                    </Link>
                ))
            }
        </div >
    )
}