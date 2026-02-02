import { Shield, Lock, Cloud } from "lucide-react";

const CompleteDefense = () => {
    const features = [
        {
            number: "01",
            icon: Shield,
            title: "Advanced Threat Detection",
            description: "Leverage AI-powered threat detection to identify and neutralize attacks before they impact your business.",
            imageBg: "bg-red-900/30"
        },
        {
            number: "02",
            icon: Lock,
            title: "Zero Trust Architecture",
            description: "Implement a zero-trust security model that verifies every user and device before granting access.",
            imageBg: "bg-[#00FF00]/20"
        },
        {
            number: "03",
            icon: Cloud,
            title: "Cloud Security",
            description: "Secure your cloud infrastructure with comprehensive protection for all your cloud-based resources.",
            imageBg: "bg-[#00FF00]/15"
        }
    ];

    return (
        <section className="py-20 px-20 bg-black border-y border-[#00FF00]/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6 text-center">
                    Complete Cyber Defense Against Modern Attacks
                </h2>
                <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
                    Our multi-layered defense strategy combines cutting-edge technology with expert security 
                    practices to provide comprehensive protection against evolving cyber threats.
                </p>

                <div className="grid grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-black/50 backdrop-blur-sm border border-[#00FF00]/50 rounded-lg overflow-hidden">
                            <div className={`${feature.imageBg} h-48 flex items-center justify-center relative`}>
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 0, 0.3) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>
                                <feature.icon className="w-20 h-20 text-[#00FF00] relative z-10" />
                            </div>
                            <div className="p-6">
                                <div className="text-4xl font-bold text-[#00FF00] mb-2">{feature.number}</div>
                                <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-300 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompleteDefense;
