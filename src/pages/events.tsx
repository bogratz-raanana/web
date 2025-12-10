import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ExternalLink } from "lucide-react";

export default function EventsSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">לוח אירועים</h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    עקבו אחרי כל האירועים, השיעורים והפעילויות המיוחדות של הישיבה
                </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                        <Calendar className="w-6 h-6" />
                        לוח השנה של הישיבה
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-4">
                    <div className="relative w-full overflow-hidden" style={{ paddingTop: '75%', minHeight: '600px' }}>
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=bgrz.rnn%40gmail.com&ctz=Asia%2FJerusalem&mode=AGENDA"
                            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                            frameBorder="0"
                            scrolling="no"
                            title="לוח אירועים של הישיבה"
                        ></iframe>
                    </div>
                </CardContent>
            </Card>

            {/* Event Cards */}
            <div className="mt-16">
                <h2 className="text-center text-3xl font-bold text-yeshiva-primary mb-8">אירועים קרובים</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-yeshiva-primary rounded-xl flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-yeshiva-primary">שיעור מיוחד</CardTitle>
                                    <p className="text-sm text-gray-600">מחר, 20:00</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-yeshiva-accent mb-2">הלכות חנוכה</h3>
                            <p className="text-gray-600 text-sm">שיעור מיוחד לקראת חג החנוכה</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-yeshiva-accent rounded-xl flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-yeshiva-primary">מלווה מלכה</CardTitle>
                                    <p className="text-sm text-gray-600">שבת הבא, 21:30</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-yeshiva-accent mb-2">מלווה מלכה חגיגית</h3>
                            <p className="text-gray-600 text-sm">ערב של זמירות ושיחת חיזוק</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                                    <ExternalLink className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <CardTitle className="text-yeshiva-primary">יום עיון</CardTitle>
                                    <p className="text-sm text-gray-600">השבוע הבא</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-semibold text-yeshiva-accent mb-2">יום עיון בהלכה</h3>
                            <p className="text-gray-600 text-sm">נושאי הלכה עכשווית</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}