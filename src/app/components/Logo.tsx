import Image from "next/image";
import logo from "../../../public/seretron.jpg";

const Logo = () => {
    return (
        <div className={`flex items-center gap-2 sm:gap-3`}>
            <Image
                src={logo}
                alt="Seretron Logo"
                width={70}
                height={70}
            />
        </div>
    );
};

export default Logo;
