import { Button } from "@/components/ui/button";

const ProtectionBanner = () => {
    return (
        <div className="w-full bg-black py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden border-y border-[#00FF00]/30">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#00FF00]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center sm:text-left">
                    Need 24/7 Protection From Cyber Attacks?
                </h2>
                <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto">
                    Get a Free Quote
                </Button>
            </div>
        </div>
    );
};

export default ProtectionBanner;
