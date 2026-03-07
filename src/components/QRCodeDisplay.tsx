"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QrCode } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

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
        <div className="w-full max-w-xs mx-auto mt-6 px-4 pt-4 pb-3 glass-card text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-accent font-heading">
                <QrCode className="w-5 h-5" />
                <span>Share this page</span>
            </div>

            <div className="p-2 bg-white rounded-xl border border-border flex justify-center">
                <QRCodeCanvas
                    value={url}
                    size={192}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    includeMargin={false}
                />
            </div>

            <div className="text-xs text-text-muted break-words">{url}</div>
        </div>
    );
}
