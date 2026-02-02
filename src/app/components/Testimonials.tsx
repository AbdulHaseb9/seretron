import { Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Smith",
            title: "CEO, TechCorp",
            rating: 5,
            quote: "Seretron's cybersecurity solutions have been instrumental in protecting our infrastructure. Their team is professional and responsive."
        },
        {
            name: "Sarah Johnson",
            title: "CTO, DataSecure",
            rating: 5,
            quote: "We've been working with Seretron for over two years. Their expertise and proactive approach have saved us from multiple potential breaches."
        },
        {
            name: "Michael Chen",
            title: "Security Director, FinanceHub",
            rating: 5,
            quote: "The best cybersecurity partner we've ever had. Their 24/7 monitoring and rapid response capabilities are outstanding."
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    Hear It from Our Happy Customers
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
                    Don't just take our word for it. See what our clients have to say about working with us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-[#00FF00] rounded-full flex items-center justify-center text-black font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">Google</span>
                            </div>
                            <p className="text-gray-700">{testimonial.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
