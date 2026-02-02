"use client";

import { useState } from "react";

const ServiceCategories = () => {
    const [activeCategory, setActiveCategory] = useState("Network Security");
    
    const categories = [
        "Network Security",
        "Endpoint Protection",
        "Threat Intelligence",
        "Penetration Testing",
        "Security Consulting"
    ];

    return (
        <div className="bg-gray-100 py-3 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium whitespace-nowrap transition-all text-sm sm:text-base ${
                            activeCategory === category
                                ? "bg-[#00FF00] text-black"
                                : "text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ServiceCategories;
