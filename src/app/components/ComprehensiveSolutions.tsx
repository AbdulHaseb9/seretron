import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ComprehensiveSolutions = () => {
    const services = [
        "Advanced Threat Detection",
        "Cloud Security Management",
        "SIEM Monitoring & Report",
        "Web & Mobile Protection",
        "Penetration Testing",
        "Secure Data & Compliance"
    ];

    return (
        <section className="py-20 px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Comprehensive Cybersecurity Solutions for Modern Threats
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-3xl">
                    In today's digital landscape, businesses face an ever-evolving array of cyber threats. 
                    Our comprehensive cybersecurity solutions are designed to protect your organization from 
                    sophisticated attacks while ensuring compliance with industry standards.
                </p>

                <div className="grid grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="bg-gradient-to-br from-black to-gray-900 rounded-lg p-8 mb-6 relative overflow-hidden border border-[#00FF00]/30">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 0, 0.5) 1px, transparent 0)`,
                                    backgroundSize: '20px 20px'
                                }}></div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-6xl font-bold text-white mb-2">99.9%</div>
                                <div className="text-[#00FF00] text-lg">Threat Detection Accuracy</div>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="bg-[#00FF00] rounded-full p-1">
                                        <Check className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-gray-700 text-lg">{service}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 bg-[#00FF00] text-black hover:bg-[#00CC00] px-8 py-6 text-lg font-semibold">
                            Request a Free Call
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 h-96 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 0, 0.5) 1px, transparent 0)`,
                                    backgroundSize: '30px 30px'
                                }}></div>
                            </div>
                            <div className="relative z-10 text-center">
                                <div className="w-32 h-32 mx-auto mb-4 bg-[#00FF00]/20 rounded-full flex items-center justify-center">
                                    <svg className="w-16 h-16 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <p className="text-white text-lg">Secure Infrastructure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComprehensiveSolutions;
