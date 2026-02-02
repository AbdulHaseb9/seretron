const SuccessStories = () => {
    const stories = [
        {
            title: "Data Breach in Healthcare",
            imageBg: "bg-red-900/40"
        },
        {
            title: "Cloud Network Optimization",
            imageBg: "bg-[#00FF00]/20"
        },
        {
            title: "Secure Data Migration",
            imageBg: "bg-gray-800/40"
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-black border-y border-[#00FF00]/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
                    Real-World Cybersecurity Success Stories
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
                    Explore how we've helped organizations across industries protect their digital assets 
                    and respond to security challenges effectively.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <div className={`${story.imageBg} h-48 sm:h-56 md:h-64 flex items-center justify-center relative`}>
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white text-lg font-semibold">{story.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
