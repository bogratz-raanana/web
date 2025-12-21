import { useState, useEffect } from "react";
import { HeartHandshake } from "lucide-react";
import ChalashLogo from "../assets/chalash-logo.png";
import BogratzLogo from "../assets/bogratz-logo.jpeg";

import BgImage1 from "../assets/landing-bg/bg1.webp";
import BgImage2 from "../assets/landing-bg/bg2.webp";
import BgImage3 from "../assets/landing-bg/bg3.webp";
import BgImage4 from "../assets/landing-bg/bg4.webp";
import BgImage5 from "../assets/landing-bg/bg5.webp";
import BgImage6 from "../assets/landing-bg/bg6.webp";
import BgImage7 from "../assets/landing-bg/bg7.webp";
import BgImage8 from "../assets/landing-bg/bg8.webp";
import BgImage9 from "../assets/landing-bg/bg9.webp";
import BgImage10 from "../assets/landing-bg/bg10.webp";
import BgImage11 from "../assets/landing-bg/bg11.webp";
import BgImage12 from "../assets/landing-bg/bg12.webp";
import BgImage13 from "../assets/landing-bg/bg13.webp";

const backgroundImages = [BgImage1, BgImage2, BgImage3, BgImage4, BgImage5, BgImage6, BgImage7, BgImage8, BgImage9, BgImage10, BgImage11, BgImage12, BgImage13];

export default function LandingSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-100">
            <link rel="preload" as="image" href={backgroundImages[0]} />

            {/* Background Slideshow - Higher opacity, less bleaching */}
            <div className="absolute inset-0">
                {backgroundImages.map((img, index) => (
                    <img
                        key={img}
                        src={img}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "low"}
                        alt="Background"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-70" : "opacity-0"
                            }`}
                    />
                ))}
                {/* Subtle dark tint instead of white to bring out photo details */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" /> */}


            <div className="absolute top-8 right-8 z-20">
                <img src={ChalashLogo} alt="Logo" className="h-12 w-auto object-contain drop-shadow-md" />
            </div>

            <div className="absolute top-8 left-8 z-20">
                <a
                    href="https://tzalash.org/he/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-yeshiva-accent to-yellow-500 text-white px-4 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl transition-all hover:scale-105"
                >
                    <HeartHandshake className="w-6 h-6" />
                    לתרומה - היו שותפים
                </a>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                    src={BogratzLogo}
                    alt="Main Logo"
                    className="h-48 md:h-58 w-auto rounded-2xl border-2 border-white/80 shadow-2xl object-contain animate-fade-in"
                />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-600/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-gray-600/50 rounded-full" />
                </div>
            </div>
        </div>
    );
}   