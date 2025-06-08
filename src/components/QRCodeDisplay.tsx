// components/QRCodeDisplay.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QrCode } from "lucide-react";

const BASE_URL = "https://ryan-2025.vercel.app"; // Update this to your actual domain

export default function QRCodeDisplay() {
    const pathname = usePathname();
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (pathname) {
            setUrl(`${BASE_URL}${pathname}`);
        }
    }, [pathname]);

    if (!url) return null;

    return (
        <div className="w-full max-w-xs mx-auto mt-6 p-4 bg-base-200 rounded-xl shadow-md text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-primary">
                <QrCode className="w-5 h-5" />
                <span>Scan this page</span>
            </div>

            <div className="p-4 bg-white rounded-lg">
                <div className="p-2 bg-white rounded-lg flex justify-center">
                    <QRCodeCanvas
                        value={url}
                        size={192} // Slightly larger for better scan distance
                        bgColor="#ffffff"
                        fgColor="#000000"
                        includeMargin={false} // 🔥 Remove default margin
                    />
                </div>

            </div>

            <div className="text-xs text-base-content opacity-60 break-all">{url}</div>
        </div>
    );
}
