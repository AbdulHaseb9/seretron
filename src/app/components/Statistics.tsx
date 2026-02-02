import { Briefcase, ThumbsUp, Laptop, User } from "lucide-react";

const Statistics = () => {
    const stats = [
        {
            icon: Briefcase,
            number: "65250+",
            label: "Projects Done"
        },
        {
            icon: ThumbsUp,
            number: "23160+",
            label: "Happy Customers"
        },
        {
            icon: Laptop,
            number: "1500+",
            label: "Expert Team"
        },
        {
            icon: User,
            number: "20+",
            label: "Years of Experience"
        }
    ];

    return (
        <section className="py-20 px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="bg-[#00FF00]/20 p-4 rounded-full">
                                    <stat.icon className="w-8 h-8 text-[#00FF00]" />
                                </div>
                            </div>
                            <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600 text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
