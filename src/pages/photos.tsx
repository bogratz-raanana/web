import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

export function LightWidget() {
    useEffect(() => {
        // Prevent loading the script multiple times
        if (document.getElementById("lightwidget-script")) return;

        const script = document.createElement("script");
        script.id = "lightwidget-script";
        script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
        script.async = true;

        document.body.appendChild(script);
    }, []);

    return (
        <iframe
            src="https://cdn.lightwidget.com/widgets/68ecd1fa6cdf5808a8e9853dd4e93885.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget"
            style={{
                width: "100%",
                border: 0,
                overflow: "hidden",
            }}
        />
    );
}


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
                        <LightWidget />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}