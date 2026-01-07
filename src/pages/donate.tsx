import { Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Donate() {
    return (
        <div dir="rtl" className="min-h-screen" style={{ backgroundColor: '#FDFDFB' }}>
            <style>
                {`
          :root {
            --yeshiva-bg: #FDFDFB;
            --yeshiva-primary: #6F6E2E;
            --yeshiva-accent: #CBA42B;
          }
          .text-yeshiva-primary { color: var(--yeshiva-primary); }
          .text-yeshiva-accent { color: var(--yeshiva-accent); }
          .bg-yeshiva-primary { background-color: var(--yeshiva-primary); }
          .bg-yeshiva-accent { background-color: var(--yeshiva-accent); }
        `}
            </style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yeshiva-accent to-yellow-500 rounded-full mb-6">
                        <Heart className="w-10 h-10 text-white" fill="white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-4">
                        תרומה לישיבה
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        תרומתכם מאפשרת לנו להמשיך להפיץ תורה ולחנך את הדור הבא
                    </p>
                </div>

                {/* Benefits Badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
                        <Users className="w-5 h-5 text-yeshiva-primary" />
                        <span className="font-semibold text-yeshiva-primary">תמיכה בתלמידים</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
                        <Heart className="w-5 h-5 text-yeshiva-accent" />
                        <span className="font-semibold text-yeshiva-primary">זכות גדולה</span>
                    </div>

                    <div className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
                        <Shield className="w-5 h-5 text-yeshiva-primary" />
                        <span className="font-semibold text-yeshiva-primary">תשלום מאובטח</span>
                    </div>
                </div>

                {/* Donation Form and Bank Transfer */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Donation Form */}
                    <Card className="bg-white shadow-xl border-gray-200 flex-1">
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-yeshiva-primary mb-6 text-center">
                                ביצוע תרומה
                            </h2>
                            <div className="w-full" style={{ minHeight: "500px" }}>
                                <iframe
                                    src="https://www.peach-in.com/cmp/iframe/Yyheggf8l"
                                    className="w-full h-full border-0"
                                    style={{ minHeight: "600px" }}
                                    title="טופס תרומה"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bank Transfer Info */}
                    <Card className="bg-white/80 border-gray-200 lg:w-80 flex-shrink-0">
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-xl font-bold text-yeshiva-primary mb-6 text-center">
                                העברה בנקאית
                            </h3>
                            <div className="space-y-3 text-center">
                                <p className="text-gray-700"><span className="font-semibold">שם הארגון:</span> ארגון צל"ש</p>
                                <p className="text-gray-700"><span className="font-semibold">בנק:</span> לאומי 10</p>
                                <p className="text-gray-700"><span className="font-semibold">סניף:</span> 789</p>
                                <p className="text-gray-700"><span className="font-semibold">חשבון:</span> 19290069</p>
                                <div className="mt-6 p-4 bg-yeshiva-accent/10 rounded-lg">
                                    <p className="text-sm text-gray-600 font-medium">
                                        יש לציין בהערות: "עבור בית המדרש לבוגרי צבא"
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tax Deduction Info */}
                <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-gray-700 font-medium">
                        *התרומה לצל"ש מוכרת לצרכי מס על פי סעיף 46 א' לפקודת מס הכנסה
                    </p>
                </div>

                {/* Thank You Message */}
                <div className="text-center mt-8 p-8 bg-gradient-to-r from-yeshiva-primary/5 to-yeshiva-accent/5 rounded-2xl">
                    <p className="text-lg text-gray-700 font-medium">
                        תודה רבה על תמיכתכם! 🙏
                    </p>
                    <p className="text-gray-600 mt-2">
                        כל תרומה, גדולה כקטנה, עוזרת לנו להמשיך במפעל הקודש
                    </p>
                </div>
            </div>
        </div>
    );
}