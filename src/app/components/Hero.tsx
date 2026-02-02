"use client";

import { Button } from "@/components/ui/button";
import { Lock, Shield, Settings } from "lucide-react";

const Hero = () => {
    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-black">
            {/* Background Pattern - Circuit Board Effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 0, 0.5) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Glowing Network Lines */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                    <path d="M0,400 Q300,200 600,400 T1200,400" stroke="rgba(0, 255, 0, 0.3)" strokeWidth="2" fill="none" />
                    <path d="M0,300 Q400,500 800,300 T1600,300" stroke="rgba(0, 255, 0, 0.2)" strokeWidth="2" fill="none" />
                </svg>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
                <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
                        Keeping Your Business One Step Ahead of Hackers
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
                        Proactive Defense for a Safer Digital Future
                    </p>
                    <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold">
                        Get Protected Today
                    </Button>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-20 px-4">
                    <div className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/50 rounded-lg p-6 hover:bg-black/70 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#00FF00]/20 p-3 rounded-lg">
                                <Lock className="w-8 h-8 text-[#00FF00]" />
                            </div>
                            <h3 className="text-white text-xl font-semibold">Penetration Testing</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Identify vulnerabilities before attackers do with comprehensive security assessments.
                        </p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/50 rounded-lg p-6 hover:bg-black/70 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#00FF00]/20 p-3 rounded-lg">
                                <Shield className="w-8 h-8 text-[#00FF00]" />
                            </div>
                            <h3 className="text-white text-xl font-semibold">Data Security</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Protect your sensitive information with advanced encryption and access controls.
                        </p>
                    </div>

                    <div className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/50 rounded-lg p-6 hover:bg-black/70 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#00FF00]/20 p-3 rounded-lg">
                                <Settings className="w-8 h-8 text-[#00FF00]" />
                            </div>
                            <h3 className="text-white text-xl font-semibold">Incident Response</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Rapid response and recovery services to minimize damage from security breaches.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
