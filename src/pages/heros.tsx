import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, House, Heart, Wallet } from "lucide-react";

const staffMembers = [
    {
        role: "הרב אור שואקה",
        name: "ראש בית המדרש",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        role: 'הרב פרץ איינהורן',
        name: 'יו"ר ארגון צל"ש ור"מ אמונה',
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        role: 'הרב ענניאל אהרון',
        name: 'ר"מ סדר צהריים',
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
];

const ExtraStaff = [
    {
        name: 'כתבי המהר"ל',
        role: "הרב בנימין טבדי",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: 'אמונה',
        role: 'הרב אורי כהן',
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
];

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="text-center mb-16">
                {/* <div className="mb-8">
                    <img
                        src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=200&h=80&fit=crop"
                        alt="לוגו הישיבה"
                        className="h-20 md:h-24 mx-auto rounded-lg border-2 border-yeshiva-accent shadow-lg object-contain"
                    />
                </div> */}

                <h1 className="text-4xl md:text-6xl font-bold text-yeshiva-primary mb-6 leading-tight">
                    זה הזמן לתורה
                    <br />
                    <span className="text-yeshiva-accent">של התורה</span>
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
                    תן את זה לעצמך. תקופה של רגיעה. אל תרוץ מהר. כל הזמן עוד לפניך. בדיוק עכשיו זה הזמן. לחזור פנימה - לבית המדרש. לטעום תורת חיים. להתמלא בכוחות מחודשים. לבנות חיים רעננים ומאירים. עוד מעט לימודים. תהיה גם עבודה. ואם ירצה השם. גם תמצא את אשתך. אך כל זה לא מהר, ולא בחפזון. תקשיב לנשמתך, גם היא רוצה מזון.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Wallet className="w-8 h-8 text-white" />
                        </div>
                        {/* <h3 className="text-xl font-semibold text-yeshiva-primary mb-2">קהילה</h3> */}
                        <p className="text-gray-600">מלגה מכובדת לאברכים</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <House className="w-8 h-8 text-white" />
                        </div>
                        {/* <h3 className="text-xl font-semibold text-yeshiva-primary mb-2">סביבה</h3> */}
                        <p className="text-gray-600">אפשרות למגורים כולל ארוחות</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        {/* <h3 className="text-xl font-semibold text-yeshiva-primary mb-2"></h3> */}
                        <p className="text-gray-600">אפשרות לשילוב עבודה ולימודים</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        {/* <h3 className="text-xl font-semibold text-yeshiva-primary mb-2"></h3> */}
                        <p className="text-gray-600">אוירה חמה ומשפחתית</p>
                    </div>
                </div>
            </div>

            {/* Staff Section */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-yeshiva-primary mb-4">
                        צוות בית המדרש
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staffMembers.map((member, index) => (
                        <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <CardContent className="p-6 text-center">
                                <div className="relative mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yeshiva-accent shadow-lg"
                                    />
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-yeshiva-primary text-white px-3 py-1">
                                            {member.role}
                                        </Badge>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-yeshiva-primary mb-3">{member.name}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        שיעורים מפי רבנים נוספים
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {ExtraStaff.map((member, index) => (
                        <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <CardContent className="p-6 text-center">
                                <div className="relative mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yeshiva-accent shadow-lg"
                                    />
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-yeshiva-primary text-white px-3 py-1">
                                            {member.role}
                                        </Badge>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-yeshiva-primary mb-3">{member.name}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </section>

            {/* About Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-yeshiva-primary mb-8">על הישיבה שלנו</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <div>
                            <h3 className="text-xl font-semibold text-yeshiva-accent mb-4">החזון שלנו</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                לגדל דור של תלמידי חכמים יראי שמים, המשלבים בין עמקות בלימוד התורה
                                לבין מעורבות חברתית ותרומה למען הכלל.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-yeshiva-accent mb-4">השיטה שלנו</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                אנו מאמינים בלימוד מעמיק ויסודי, המותאם לרמתו ולצרכיו של כל תלמיד.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-yeshiva-primary/5 rounded-2xl border border-yeshiva-primary/20">
                        <p className="text-yeshiva-primary text-lg font-medium italic">
                            "ותלמוד תורה כנגד כולם"
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}