import { Eye, MessageCircle, Share2 } from "lucide-react";

const BlogSection = () => {
    const posts = [
        {
            category: "Cyber Insights",
            title: "Top Strategies to Prevent Ransomware Attacks in 2023",
            views: "1.2k",
            comments: "45",
            imageBg: "bg-[#00FF00]/20"
        },
        {
            category: "Threat Report",
            title: "A Proactive Cyber Threat How to Stay Ahead of Hackers",
            views: "980",
            comments: "32",
            imageBg: "bg-green-900/40"
        },
        {
            category: "Security Advice",
            title: "Building a Strong Cyber Defense Plan for Your Business",
            views: "1.5k",
            comments: "67",
            imageBg: "bg-purple-900/40"
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    Stay Updated with the Latest Cybersecurity Trends
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 text-center max-w-3xl mx-auto px-4">
                    Get insights, reports, and expert advice on the latest cybersecurity trends and threats.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className={`${post.imageBg} h-40 sm:h-48 flex items-center justify-center relative`}>
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <span className="text-[#00FF00] text-xs sm:text-sm font-semibold">{post.category}</span>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2 mb-3 sm:mb-4">{post.title}</h3>
                                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        <span>{post.views}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>{post.comments}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Share2 className="w-4 h-4" />
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
