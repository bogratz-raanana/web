import { Card } from "@/components/ui/card";
import { Users, Coffee, Utensils, Music, Car } from "lucide-react";

type WeeklyEventCardProps = {
    flyerSrc: string;
};

const WHATSAPP_UPDATES_URL = "https://chat.whatsapp.com/BTzW6r7ueSe97kUBVzArPW?mode=wwt";

export function WeeklyEventCard({ flyerSrc }: WeeklyEventCardProps) {
    return (
        <Card className="relative mb-8 overflow-hidden border-0 shadow-xl rounded-3xl bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400">
            {/* subtle highlight overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-white/10 to-transparent" />

            <div className="relative p-4 md:p-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-6">

                    {/* Content */}
                    <div className="md:w-3/4 text-center md:text-right">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-lg mb-3">
                            טועמיה - ערב של תורה בבית המדרש לבוגרי צבא רעננה
                        </h2>

                        {/* Highlight badges */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            <span className="inline-flex items-center gap-2 bg-white text-orange-600 px-4 py-1.5 rounded-full font-bold shadow-md text-sm">
                                כל יום חמישי
                            </span>

                            <span className="inline-flex items-center gap-2 bg-purple-700 text-white px-4 py-1.5 rounded-full font-semibold shadow-md text-sm">
                                <Users className="w-4 h-4" />
                                עזרת נשים פתוחה
                            </span>

                            <span className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-md text-sm">
                                <Car className="w-4 h-4" />
                                קבוצת טרמפים פעילה
                            </span>

                            <a
                                href={WHATSAPP_UPDATES_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-1.5 rounded-xl font-bold text-sm shadow-md ring-2 ring-white/70 transition-all duration-300 hover:scale-105"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.19c-.25.7-1.23 1.29-2 1.45-.53.11-1.23.2-3.57-.76-2.6-1.07-4.4-3.6-4.62-3.9-.21-.28-1.08-1.44-1.08-2.75 0-1.31.68-1.95.93-2.22.25-.27.53-.34.71-.34.18 0 .35 0 .5.01.16.01.37-.06.58.45.25.6.85 2.07.92 2.22.07.15.12.32.02.51-.1.19-.15.31-.3.48-.14.17-.31.38-.44.51-.15.15-.3.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.36 2.46 1.51.3.15.47.13.65-.08.18-.21.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.79.85 2.09 1 .3.15.5.23.58.35.07.13.07.72-.18 1.42z" />
                                </svg>
                                קבוצת העדכונים
                            </a>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {[
                                { icon: Coffee, label: "שתייה חמה" },
                                { icon: Utensils, label: "כיבוד קל" },
                                { icon: Music, label: "התוועדות" },
                            ].map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-lg font-semibold text-amber-800 shadow-sm text-sm"
                                >
                                    <Icon className="w-4 h-4 text-orange-500" />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sticker-style Flyer */}
                    <div className="md:w-1/5 w-full flex justify-center md:justify-end">
                        <div className="relative group rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                            <img
                                src={flyerSrc}
                                alt="פלייר התוועדות"
                                loading="lazy"
                                className="w-36 md:w-40 rounded-xl border-[5px] border-white shadow-xl transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* glossy sticker highlight */}
                            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/40 via-transparent to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </Card>
    );
}
