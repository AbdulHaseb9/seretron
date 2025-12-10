"use client";

import { useState } from "react";
import Header from "./header/Header";

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className="h-screen w-full relative overflow-hidden">

            {/* Fallback Image (Visible until video loads) */}
            <div
                className={`absolute inset-0 w-full h-full bg-[url('/fallback.jpg')] bg-cover bg-center transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"
                    }`}
            ></div>

            {/* Background Video */}
            <video
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"
                    }`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="/banner_video.mp4"
                onCanPlay={() => setVideoLoaded(true)}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content */}
            <div className="relative z-10 h-full px-20">
                <Header />
            </div>
        </div>
    );
};

export default Hero;
