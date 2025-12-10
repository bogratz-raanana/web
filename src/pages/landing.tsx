import { HeartHandshake } from "lucide-react";
import ChalashLogo from "../assets/chalash-logo.png";
import BogratzLogo from "../assets/bogratz-logo.jpeg";

export default function LandingSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background - placeholder for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-yeshiva-primary/20 via-yeshiva-accent/10 to-yeshiva-primary/30">
                {/* Video background will go here */}
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop"
                    alt="רקע"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

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
                    href="https://tzalash.org/he/%d7%aa%d7%a8%d7%95%d7%9e%d7%94-%d7%9c%d7%91%d7%99%d7%aa-%d7%94%d7%9e%d7%93%d7%a8%d7%a9-%d7%9c%d7%91%d7%95%d7%92%d7%a8%d7%99-%d7%a6%d7%91%d7%90/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-yeshiva-accent to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                >
                    <HeartHandshake className="w-6 h-6" />
                    לתרומה - היו שותפים
                </a>
            </div>

            {/* Big Logo - Center */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <img
                    src={BogratzLogo}
                    alt="לוגו ישיבה"
                    className="h-48 md:h-58 w-auto rounded-2xl border-4 border-white/50 shadow-2xl object-contain animate-fade-in"
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