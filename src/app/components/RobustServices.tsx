import { Button } from "@/components/ui/button";
import { Network, Lock, Fingerprint, Wifi, Cloud, Settings } from "lucide-react";

const RobustServices = () => {
    const services = [
        {
            icon: Network,
            title: "Network Security",
            description: "Protect your network infrastructure from unauthorized access and attacks."
        },
        {
            icon: Lock,
            title: "Data Encryption",
            description: "Secure your sensitive data with industry-leading encryption standards."
        },
        {
            icon: Fingerprint,
            title: "Identity & Access",
            description: "Manage user identities and control access to critical resources."
        },
        {
            icon: Wifi,
            title: "Security Monitoring",
            description: "24/7 monitoring and alerting for real-time threat detection."
        },
        {
            icon: Cloud,
            title: "Backup & Recovery",
            description: "Ensure business continuity with automated backup solutions."
        },
        {
            icon: Settings,
            title: "Security Configuration",
            description: "Optimize your security settings for maximum protection."
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
                    Robust Cybersecurity Services for Today's Threats
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
                    Our comprehensive suite of cybersecurity services is designed to address the full spectrum 
                    of modern threats, from network vulnerabilities to data breaches.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/50 rounded-lg p-4 sm:p-6 hover:bg-black/70 transition-all"
                        >
                            <div className="bg-[#00FF00]/20 p-3 sm:p-4 rounded-lg w-fit mb-3 sm:mb-4">
                                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF00]" />
                            </div>
                            <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                            <p className="text-gray-300 text-sm mb-3 sm:mb-4">{service.description}</p>
                            <Button
                                variant="ghost"
                                className="text-[#00FF00] hover:text-[#00CC00] p-0 h-auto"
                            >
                                Learn More →
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RobustServices;
