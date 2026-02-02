import { Button } from "@/components/ui/button";

const ProtectionBanner = () => {
    return (
        <div className="w-full bg-black py-8 px-20 relative overflow-hidden border-y border-[#00FF00]/30">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#00FF00]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                    Need 24/7 Protection From Cyber Attacks?
                </h2>
                <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] px-8 py-6 text-lg font-semibold">
                    Get a Free Quote
                </Button>
            </div>
        </div>
    );
};

export default ProtectionBanner;
