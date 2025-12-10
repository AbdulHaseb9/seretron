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

    return (
        <div className={`flex items-center justify-between`}>
            <div className={`flex items-center justify-between gap-14 py-3 ${type === "header" ? "text-sm flex-row" : "text-base "}`}>
                {contactDetails.map((detail, index) => (
                    <div key={index} className={`flex items-center`}>
                        <div className="text-lg text-green-600 mr-2">{detail.icon}</div>
                        {type === "footer" ?
                            <h4 className="mb-1 font-semibold">{detail.title}</h4>
                            : null}
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