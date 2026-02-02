"use client";

import { Play } from "lucide-react";
import { useState } from "react";

const MonitoringSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-black border-y border-[#00FF00]/20">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 h-64 sm:h-80 md:h-96 border border-[#00FF00]/30">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 0, 0.5) 1px, transparent 0)`,
                            backgroundSize: '30px 30px'
                        }}></div>
                    </div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-[#00FF00] hover:bg-[#00CC00] text-black rounded-full p-4 sm:p-6 transition-all hover:scale-110 font-semibold"
                        >
                            <Play className="w-8 h-8 sm:w-12 sm:h-12" fill="black" />
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6 md:p-8">
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">Security Operations Center</h3>
                        <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">24/7 monitoring and threat detection</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MonitoringSection;
