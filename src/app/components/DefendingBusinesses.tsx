import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const DefendingBusinesses = () => {
    return (
        <section className="py-20 px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Defending Businesses With Expertise And Innovation
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            With decades of combined experience, our team of cybersecurity experts brings 
                            innovative solutions and proven methodologies to protect your business from 
                            the most sophisticated threats.
                        </p>
                        <Button className="bg-[#00FF00] text-black hover:bg-[#00CC00] px-8 py-6 text-lg mb-6 font-semibold">
                            Request a Free Quote
                        </Button>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700 font-semibold">Google Rating 4.7</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-gray-600">Based on 100+ Reviews</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 h-96 flex items-center justify-center">
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
