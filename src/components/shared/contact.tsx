import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { info } from "@/data/info";

export const Contact = () => {

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
            text: info.email,
        },
    ];

    return (
        <div>
            {contactDetails.map((detail, index) => (
                <div key={index} className="mb-6 flex items-start space-x-4">
                    <div className="text-2xl text-primary">{detail.icon}</div>
                    <div>
                        <h4 className="mb-1 font-semibold">{detail.title}</h4>
                        <p className="text-gray-600">{detail.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}