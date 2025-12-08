import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, GraduationCap, House, Heart, Wallet } from "lucide-react";

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

const studentReviews = [
    {
        name: "אלקנה יצחקי",
        text: "מורכב לתמצת דבר כל כך עצום ואדיר. אבל בכמה מילים, בית המדרש לבוגרי צבא רעננה זה בית, זה האנשים, זה הרבנים. זה התורה של הלב, תורה שמחוברת לחיים, תורת ישראל."
    },
    {
        name: "מתלמידי הישיבה",
        text: "זכיתי להיות מהתלמידים הראשונים בבוגר\"צ רעננה, בשבילי בית המדרש הוא כמו משפחה, דיבוק חברים עובדי ה' שלומדים תורה בגדלות ושואפים לחיות אותה גם בחיי המעשה עם חיבור לעם ישראל."
    },
    {
        name: "יואב שושן",
        text: "עבורי בית המדרש הוא ממש כמו בית, עם קהילה חמה וחזקה שהתחילה להתפתח פה בעיר ובאזור. מקום שאני שמח ללמוד בו תורה, לגדול ולהתפתח רוחנית. בית מדרש שמחובר לתורת ארץ ישראל, תורה חיה ומשמחת. שמח על זכותי לקחת בו חלק."
    },
    {
        name: "אברהם אשר לפידות",
        text: "בבית המדרש לבוגרי צבא רעננה מצאתי בדיוק את שאהבה נפשי, מקום קרוב שיהיה בית רוחני. חברים לרוחי גם במרכז ולא רק בירושלים איפה שלמדתי לאחר השחרור. חברים לעבודת ה' הקשורים יחד איתי לבית מדרש עם יסודות של תורה אחדותית בכל הרבדים, תורת הרב קוק זצ\"ל ,שמירת הלשון ואמונה כליווי מושלם לכניסה רכה ללימוד התורה, ואל מסלול החיים."
    },
    {
        name: "מתלמידי הישיבה",
        text: "היכולת לשלב תורה ועבודה אינה מובנת מאליה, בשנים בהם אתה יוצא מבית המדרש לעולם שבחוץ, נדרש מאמץ פעיל ותבונה רבה כדי למצוא את הדרך להמשיך ולשאוב באופן סדור מבית המדרש. להיות מחובר בדרך קבע. בית המדרש לבוגרי צבא ברעננה היא המשפחה התומכת ברגע המעבר ובחיי היומיום שלאחריו. בית המדרש לבוגרי צבא מאפשר שילוב של תורה ועבודה, בית המדרש והחברים הם מקום קבע - במהות או בזמן, כל אחד כפי יכולתו, בו מונחת דעתך ברגעים הקשים והמאתגרים. אתה נעשה שייך תמיד, למקום בו יושבים תלמידי חכמים, מקום בו עמל התורה והלימוד מתיישבים בנחת על הלב, ולא \"על הדרך\" מתוך מרוץ החיים."
    },
    {
        name: "אורי לקריץ",
        text: "ב\"ה אני זוכה ללמוד בביהמ\"ד לבוגר\"צ ברעננה תוך כדי השירות הסדיר שלי. בית המדרש מאפשר לי לשמור על קשר מלא עם עולם חי של תורה שמחה ורלוונטית, ומשלב גם שיעורים מגוונים ברמה גבוהה וגם לימוד גמרא איכותי. החברה בוגרים ורציניים והאווירה הכללית היא של שילוב עמוק של תורה בחיי המעשה, ועם הפנים קדימה לגדול ולחזק את הקהילה."
    },
    {
        name: "אורן שפירא",
        text: "ברוך ה' – סוף סוף יש בית מדרש כזה ברעננה! לימוד עמוק, מגוון ועוצמתי שמאיר את הנשמה. זה לא רק ללמוד תורה – זה לחיות אותה, באמת."
    },
    {
        name: "עידן גלנץ",
        text: "בית המדרש לבוגרי צבא ברעננה בשבילי הוא מקום שבו אפשר ללמוד ולהנות מהלימוד מתוך חיבור אמיתי וחי לתורה. רבנים מדהימים, לכל רב יש את הגוון המיוחד שלו וכמובן שהחבורה מאוד רצינית ומגובשת, מה שמוסיף לאווירה הטובה בבית המדרש."
    },
    {
        name: "יונתן לוזון",
        text: "בית המדרש לבוגרי צבא ברעננה הוא מקום בו אפשר ללמוד תורה שמחוברת לחיים, עם חברים טובים ושפע של ספרי קודש!"
    },
    {
        name: "יוסף חיים",
        text: "ב\"ה זכיתי מיד לאחר שירות קרבי משמעותי להיחשף לבית מדרש קטן עם כוח עצום. להגיע ולהיטען באנרגיה לקראת התחנות הבאות בחיים. פגשתי בבית המדרש אכפתיות, ויחס אישי. מיוחדת מאוד השמחה שקורנת כלפי פנים וחוץ, בית המדרש משך אותי, דיבר אלי, והחזיר את הטעם של תקופת הישיבה שלפני הגיוס. למדתי תקופה קצרה בבית המדרש, אך התמלאתי והפקתי ממנה הרבה."
    },
    {
        name: "נתאי בר כהנא, נתניה",
        text: "בית מדרש באווירה משפחתית חמה, אוהבת ותומכת, במקצועיות ובשליטה בהלכה ובאמונה ובכל נקודות היהדות, המשלבת חיי מעשה וחיי בית מדרש ללא סתירה."
    }
];


export default function HeroSection() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % studentReviews.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % studentReviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
    };

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

            {/* Student Reviews Slideshow */}
            <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-yeshiva-primary mb-8">תלמידים מספרים</h2>

                    <div className="relative min-h-[200px] flex items-center justify-center">
                        <button
                            onClick={prevReview}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-yeshiva-primary/10 hover:bg-yeshiva-primary/20 transition-colors"
                            aria-label="ביקורת קודמת"
                        >
                            <ChevronRight className="w-6 h-6 text-yeshiva-primary" />
                        </button>

                        <div className="px-12 md:px-20">
                            <div className="mb-6 p-6 bg-yeshiva-primary/5 rounded-2xl border border-yeshiva-primary/20">
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    "{studentReviews[currentReview].text}"
                                </p>
                                <p className="text-yeshiva-accent font-semibold text-xl">
                                    - {studentReviews[currentReview].name}
                                </p>
                            </div>

                            <div className="flex justify-center gap-2">
                                {studentReviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentReview(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentReview
                                            ? 'bg-yeshiva-primary w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`עבור לביקורת ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={nextReview}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-yeshiva-primary/10 hover:bg-yeshiva-primary/20 transition-colors"
                            aria-label="ביקורת הבאה"
                        >
                            <ChevronLeft className="w-6 h-6 text-yeshiva-primary" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}