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
        <div className="bg-gray-100 py-4 px-20">
            <div className="flex items-center gap-8 overflow-x-auto">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
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
