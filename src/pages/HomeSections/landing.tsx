import { useRef, useState } from "react";
import { HeartHandshake } from "lucide-react";
import ChalashLogo from "../../assets/chalash-logo.webp";
import BogratzLogo from "../../assets/bogratz-logo.webp";

// Desktop background photo — also the poster the video cross-fades in over.
import PosterImage from "../../assets/landing-bg/landing-desktop-bg.webp";
// Phone-specific background photo (shown on narrow screens via <picture>);
// phones keep this static photo and skip the video.
import PhoneBg from "../../assets/landing-bg/bg7.webp";

// Background video lives in public/ and is copied verbatim by Vite.
// import.meta.env.BASE_URL respects the `base: './'` setting in vite.config.ts.
const videoBase = import.meta.env.BASE_URL;

// Skip the video entirely for users who prefer reduced motion — keep the poster.
const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Phones keep the static PhoneBg photo and skip the (heavier) video download.
const isPhone =
    typeof window !== "undefined" &&
    window.matchMedia?.("(max-width: 767px)").matches;

export default function LandingSection() {
    // Only start fetching the video after the poster has painted, so the initial
    // render is never slowed down by the (much heavier) video download.
    const [loadVideo, setLoadVideo] = useState(false);
    // Fade the video in once it's actually ready to play.
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-100">
            <link rel="preload" as="image" href={PosterImage} />

            {/* Background: instant poster + video that fades in once loaded */}
            <div className="absolute inset-0">
                {/* Poster shows immediately; kicks off the video load once painted */}
                <picture>
                    {/* Phones get a dedicated portrait-friendly photo */}
                    <source media="(max-width: 767px)" srcSet={PhoneBg} />
                    <img
                        src={PosterImage}
                        fetchPriority="high"
                        alt="Background"
                        onLoad={() => {
                            if (!prefersReducedMotion && !isPhone) setLoadVideo(true);
                        }}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${videoReady ? "opacity-0" : "opacity-70"
                            }`}
                    />
                </picture>

                {/* Video streams in the background and cross-fades over the poster */}
                {loadVideo && (
                    <video
                        ref={videoRef}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="auto"
                        poster={PosterImage}
                        aria-hidden="true"
                        onCanPlay={() => {
                            videoRef.current?.play().catch(() => {
                                /* autoplay may be blocked; poster stays visible */
                            });
                            setVideoReady(true);
                        }}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${videoReady ? "opacity-70" : "opacity-0"
                            }`}
                    >
                        <source src={`${videoBase}landing.webm`} type="video/webm" />
                        <source src={`${videoBase}landing.mp4`} type="video/mp4" />
                    </video>
                )}

                {/* Subtle dark tint instead of white to bring out photo details */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />

            {/* Small Logo - Upper Right */}
            <div className="absolute top-8 right-8 z-20">
                <img
                    src={ChalashLogo}
                    alt="לוגו קטן"
                    className="h-12 w-auto rounded-lg  object-contain"
                />
            </div>

            {/* Donate Button - Upper Left */}
            <div className="absolute top-8 left-8 z-20">
                <a
                    href="/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:gap-3 bg-gradient-to-r from-yeshiva-accent to-yellow-500 text-white px-4 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl md:shadow-2xl transition-all duration-300 hover:scale-105">
                    <HeartHandshake className="w-6 h-6" />
                    לתרומה - היו שותפים
                </a>
            </div>

            {/* Big Logo - Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                    src={BogratzLogo}
                    alt="Main Logo"
                    loading="eager"
                    className="h-48 md:h-58 w-auto rounded-2xl border-2 border-white/80 shadow-2xl object-contain animate-fade-in"
                />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/60 rounded-full" />
                </div>
            </div>
        </div>
    );
}
