import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const DefendingBusinesses = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Defending Businesses With Expertise And Innovation
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                            With decades of combined experience, our team of cybersecurity experts brings 
                            innovative solutions and proven methodologies to protect your business from 
                            the most sophisticated threats.
                        </p>
                        <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg mb-4 sm:mb-6 font-semibold w-full sm:w-auto">
                            Request a Free Quote
                        </Button>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-gray-700 font-semibold text-sm sm:text-base">Google Rating 4.7</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-gray-600 text-sm sm:text-base">Based on 100+ Reviews</span>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 sm:p-12 h-64 sm:h-80 md:h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto mb-4 bg-[#00FF00]/20 rounded-full flex items-center justify-center">
                                    <svg className="w-16 h-16 text-[#00FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <p className="text-white text-lg">Expert Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DefendingBusinesses;
