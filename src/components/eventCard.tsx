import { Card } from "@/components/ui/card";
import { Users, Coffee, Utensils, Music } from "lucide-react";

type WeeklyEventCardProps = {
    flyerSrc: string;
};

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
