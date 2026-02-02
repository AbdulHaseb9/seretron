import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { info } from "@/data/info";
import { Socials } from "./socials";

export const Contact = ({ type }: { type: "header" | "footer" }) => {

    interface ContactDetail {
        icon: React.ReactNode;
        title: string;
        text: string;
    }

    const contactDetails: ContactDetail[] = [
        {
            icon: <FaLocationDot />,
            title: "Head Office",
            text: info.address,
        },
        {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            text: info.phone,
        },
        {
            icon: <IoMdMail />,
            title: "Email Us",
            text: info.email.official,
        },
    ];

    if (type === "header") {
        return (
            <div className="hidden md:flex items-center justify-between py-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <FaPhoneAlt className="text-[#00FF00] text-xs sm:text-sm" />
                        <span className="text-white text-xs sm:text-sm truncate">{info.phone}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <IoMdMail className="text-[#00FF00] text-xs sm:text-sm" />
                        <span className="text-white text-xs sm:text-sm truncate hidden lg:inline">{info.email.official}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`flex items-center justify-between`}>
            <div className={`flex items-center justify-between gap-14 py-3 text-base`}>
                {contactDetails.map((detail, index) => (
                    <div key={index} className={`flex items-center`}>
                        <div className="text-lg text-[#00FF00] mr-2">{detail.icon}</div>
                        <h4 className="mb-1 font-semibold">{detail.title}</h4>
                        <div>
                            <p className="text-white">{detail.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Socials />
        </div>
    )
}