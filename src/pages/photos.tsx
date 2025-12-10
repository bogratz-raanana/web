import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Heart, MessageCircle } from "lucide-react";

export default function PhotosSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">תמונות מהישיבה</h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    הצצה לחיי הישיבה היומיומיים, לימודים, אירועים ורגעים מיוחדים
                </p>
            </div>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-dashed border-2 border-purple-200">
                <CardContent className="p-4 sm:p-6">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Instagram className="w-8 h-8 text-white" />
                        </div>

                        <div className="w-full max-w-5xl mx-auto">
                            <div className="relative w-full" style={{ paddingTop: '100%', minHeight: '600px' }}>
                                <iframe
                                    src="https://cdn.lightwidget.com/widgets/68ecd1fa6cdf5808a8e9853dd4e93885.html"
                                    allowTransparency={true}
                                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                                    scrolling="no"
                                    frameBorder="0"
                                ></iframe>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 pt-2">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Heart className="w-4 h-4 text-red-400" />
                                <span>עוקבים אחרינו</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <MessageCircle className="w-4 h-4 text-blue-400" />
                                <span>תגובות ושיתופים</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}