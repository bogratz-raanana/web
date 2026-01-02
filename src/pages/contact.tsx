import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Phone, User, CheckCircle, MapPin, Navigation, ExternalLink } from "lucide-react";


export default function ContactSection() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can add logic to save the data or send it somewhere
        console.log({ name, phone });
        setSubmitted(true);
        // setTimeout(() => {
        //     setName("");
        //     setPhone("");
        //     setSubmitted(false);
        // }, 3000);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">צור קשר</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    נשמח לענות על כל שאלה ולספק מידע נוסף על הישיבה
                </p>
            </div>

            {/* Address Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 mb-8 max-w-5xl mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                        <MapPin className="w-6 h-6" />
                        כתובת הישיבה
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div className="text-right space-y-2">
                            <h3 className="font-semibold text-yeshiva-primary text-lg">מתחם "אוהל ארי" רעננה</h3>
                            <p className="text-gray-700">רחוב רבוצקי 98</p>
                            <p className="text-gray-700">קומה מינוס אחת</p>
                            <div className="flex items-center gap-2 text-yeshiva-accent pt-2">
                                <Phone className="w-4 h-4" />
                                <span className="font-medium">055-569-5404</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button onClick={() => window.open("https://www.google.com/maps/dir//Ravutski+St+98,+Ra'anana/@32.1916989,34.8734516,14z?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D", "_blank")} className="bg-yeshiva-primary hover:bg-yeshiva-primary/90 text-white">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Google Maps
                            </Button>
                            <Button onClick={() => window.open("https://www.waze.com/he/live-map/directions/%D7%91%D7%99%D7%AA-%D7%9B%D7%A0%D7%A1%D7%AA-%D7%90%D7%95%D7%94%D7%9C-%D7%90%D7%A8%D7%99-%D7%A8%D7%91%D7%95%D7%A6%D7%A7%D7%99-98-%D7%A8%D7%A2%D7%A0%D7%A0%D7%94?to=place.w.22872386.228658323.25339", "_blank")} className="bg-yeshiva-accent hover:bg-yeshiva-accent/90 text-white">
                                <Navigation className="w-4 h-4 mr-2" />
                                Waze
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* WhatsApp Card */}
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                            <MessageCircle className="w-6 h-6 text-green-600" />
                            דבר איתנו בווטסאפ
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            הצטרף לקהילת הווטסאפ שלנו לקבלת עדכונים על הישיבה, שיעורים ואירועים מיוחדים!
                        </p>
                        <a
                            href="https://chat.whatsapp.com/BTzW6r7ueSe97kUBVzArPW?mode=wwt "
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6">
                                <MessageCircle className="w-5 h-5 ml-2" />
                                להצטרפות לקהילה
                            </Button>
                        </a>
                    </CardContent>
                </Card>

                {/* Contact Form Card */}
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-yeshiva-primary">
                            מעוניין לשמוע עוד? השאר פרטים ונחזור אליך
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                        שם מלא
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="הכנס את שמך"
                                            required
                                            className="pr-10"
                                            dir="rtl"
                                        />
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                                        מספר טלפון
                                    </label>
                                    <div className="relative">
                                        <Input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="הכנס מספר טלפון"
                                            required
                                            className="pr-10"
                                            dir="rtl"
                                        />
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-yeshiva-accent hover:bg-yeshiva-accent/90 text-white text-lg py-6"
                                >
                                    שלח פרטים
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center py-8">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <p className="text-xl font-semibold text-yeshiva-primary mb-2">אופס..</p>
                                {/* <p className="text-xl font-semibold text-yeshiva-primary mb-2">תודה רבה!</p> */}
                                {/* <p className="text-gray-600">נחזור אליך בהקדם האפשרי</p> */}
                                <p className="text-gray-600">האתר עוד בבניה.. בינתיים אפשר לכתוב לרב אור :)</p>
                                <p className="text-gray-600">055-569-5404</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}