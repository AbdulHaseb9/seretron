import { Contact } from "@/components/shared/contact"
import { Button } from "@/components/ui/button"
import { navigation } from "@/data/navigation"
import Image from "next/image"

const Header = () => {
    return (
        <div className="absolute z-50 w-full px-20">
            <Contact type="header" />
            <header className="flex items-center justify-between">
                <Image
                    src="/seretron.jpg"
                    width={90}
                    height={75}
                    alt="Seretron Logo" />
                <nav>
                    {navigation.quicklinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xl mx-4 text-white hover:text-gray-300">
                            {link.name}
                            {link.icon && <link.icon className="inline-block ml-1 h-4 w-4" />}
                        </a>
                    ))}
                </nav>
                <div className="space-x-4">
                    <Button className="text-white text-lg p-6" type="button" variant={"outline"}>Get Quote</Button>
                    <Button className="bg-green-600 text-white text-lg p-6 hover:bg-green-800">Explore Pricing</Button>
                </div>
            </header>
        </div>
    )
}
export default Header