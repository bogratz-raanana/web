import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeeklyEventCard } from "@/components/eventCard";
import { GraduationCap, Users, BookOpen, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import tshuvaFlayer from "../../assets/tshuva-flayer.webp";
import soldiersFlayer from "../../assets/soldier-flayer.webp";
import studentsFlayer from "../../assets/students-flayer.webp";
import toameihaFlayer from "../../assets/toameiha-flayer.webp";

export type Program = {
    id: "soldiers" | "university" | "tshuva";
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    borderColor: string;
    flyerUrl: string;
};


const programs: Program[] = [
    {
        id: "soldiers",
        title: "חיילך לאורייתא",
        description: "תוכנית ערב לחיילים",
        icon: Users,
        color: "from-blue-50 to-blue-100",
        borderColor: "border-blue-200",
        flyerUrl: soldiersFlayer
    },
    {
        id: "university",
        title: "אקדמ-יה",
        description: "ערב לימוד שבועי לסטודנטים",
        icon: GraduationCap,
        color: "from-purple-50 to-purple-100",
        borderColor: "border-purple-200",
        flyerUrl: studentsFlayer
    },
    {
        id: "tshuva",
        title: "מתחזקים ובעלי תשובה",
        description: "תכניות קבוצתיות או בהתאמה אישית",
        icon: BookOpen,
        color: "from-green-50 to-green-100",
        borderColor: "border-green-200",
        flyerUrl: tshuvaFlayer
    }
];

export default function StudyProgramsSection() {
    const [selectedFlyer, setSelectedFlyer] = useState<Program | null>(null);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">תוכניות הלימוד</h2>
            </div>

            {/* Special Weekly Event Card */}
            <WeeklyEventCard flyerSrc={toameihaFlayer} />



            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program) => {
                    const IconComponent = program.icon;
                    return (
                        <Card
                            key={program.id}
                            className={`bg-gradient-to-br ${program.color} ${program.borderColor} border-2 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                            onClick={() => setSelectedFlyer(program)}
                        >
                            <CardHeader>
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-8 h-8 text-yeshiva-primary" />
                                </div>
                                <CardTitle className="text-center text-yeshiva-primary text-2xl">
                                    {program.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {program.description}
                                </p>
                                <div className="relative overflow-hidden rounded-lg border-2 border-gray-300 bg-white aspect-[3/4]">
                                    <img
                                        src={program.flyerUrl}
                                        alt={`פליירס ${program.title}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold text-lg">לחץ להגדלה</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Flyer Modal */}
            <AnimatePresence>
                {selectedFlyer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedFlyer(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedFlyer(null)}
                                className="absolute top-4 left-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <X className="w-6 h-6 text-gray-800" />
                            </button>

                            <div className="overflow-y-auto max-h-[90vh]">
                                <img
                                    src={selectedFlyer.flyerUrl}
                                    alt={`פלייר ${selectedFlyer.title}`}
                                    loading="lazy"
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}