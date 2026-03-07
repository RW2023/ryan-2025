"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ListMotion, ItemMotion } from "@/components/ListMotion";

export default function BenefitsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto glass-card p-10"
        >
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-center text-text-bright">
                Here&apos;s What You Get
            </h2>
            <ListMotion className="text-left space-y-4 text-text-primary">
                <div className="hover:scale-[1.015] hover:bg-surface-light transition-all duration-200 rounded-md px-2 py-1">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-emerald-500 mr-2" />
                        Loads fast and looks great on phones and desktops
                    </ItemMotion>
                </div>
                <div className="hover:scale-[1.015] hover:bg-surface-light transition-all duration-200 rounded-md px-2 py-1">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-emerald-500 mr-2" />
                        Easy for people (and Google) to find you
                    </ItemMotion>
                </div>
                <div className="hover:scale-[1.015] hover:bg-surface-light transition-all duration-200 rounded-md px-2 py-1">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-emerald-500 mr-2" />
                        Ready to grow with your business over time
                    </ItemMotion>
                </div>
            </ListMotion>
        </motion.section>
    );
}
