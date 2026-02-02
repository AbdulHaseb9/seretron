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
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="bg-[#00FF00]/20 p-3 sm:p-4 rounded-full">
                                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF00]" />
                                </div>
                            </div>
                            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                            <div className="text-gray-600 text-sm sm:text-base md:text-lg">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
