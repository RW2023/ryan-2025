// app/hire/page.tsx (Server Component with metadata)
import HeroSection from "@/components/hire/HeroSection";
import BenefitsSection from "@/components/hire/BenefitsSection";
import PitchSection from "@/components/hire/PitchSection";
import QRCodeDisplay from "@/components/QRCodeDisplay";

export const metadata = {
    title: "Ryan Wilson – Developer",
    description: "Hire a full-stack developer who builds for performance and polish.",
};

export default function HireMePage() {
    return (
        <main className="bg-var(--background) via-base-200 to-base-100 text-base-content px-6 pt-24 pb-12 space-y-24">
            <HeroSection />
            <BenefitsSection />
            <PitchSection />
            <QRCodeDisplay />
        </main>
    );
}
