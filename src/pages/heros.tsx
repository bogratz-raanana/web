import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, GraduationCap, House, Heart, Wallet } from "lucide-react";

import ravOr from "../assets/heros/rav-or.webp";
import ravAnanial from "../assets/heros/rav-ananiel.webp";
import ravOri from "../assets/heros/rav-ori-cohen.webp";
import ravPeretz from "../assets/heros/Rabbi-Peretz-Einhoren.webp";

const staffMembers = [
    {
        name: "הרב אור שואקה",
        role: "ראש בית המדרש",
        image: ravOr
    },
    {
        name: 'הרב פרץ איינהורן',
        role: 'יו"ר ארגון צל"ש ור"מ אמונה',
        image: ravPeretz
    },
    {
        name: 'הרב ענניאל אהרון',
        role: 'ר"מ סדר צהריים',
        image: ravAnanial
    }
];

const ExtraStaff = [
    {
        name: 'כתבי המהר"ל',
        role: "הרב בנימין טבדי",
        image: "data:image/jpeg;base64,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"
    },
    {
        name: 'אמונה',
        role: 'הרב אורי כהן',
        image: ravOri
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

                <h2 className="text-4xl md:text-6xl font-bold text-yeshiva-primary mb-6 leading-tight">
                    זה הזמן לתורה
                    <br />
                    <span className="text-yeshiva-accent">של התורה</span>
                </h2>

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
                                        loading="lazy"
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yeshiva-accent shadow-lg"
                                    />
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-yeshiva-primary text-white px-3 py-1">
                                            {member.name}
                                        </Badge>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-yeshiva-primary mb-3">{member.role}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                F
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
                                        loading="lazy"
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