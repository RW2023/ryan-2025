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
            className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-box p-10 backdrop-blur-md bg-opacity-90"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                Here’s What You Get
            </h2>
            <ListMotion className="text-left space-y-4 text-base-content/90">
                <div className="hover:scale-[1.015] hover:bg-base-200/50 transition-all duration-200 rounded-md px-2 py-1">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                        ⚡ Loads fast and looks great on phones and desktops
                    </ItemMotion>
                </div>
                <div className="hover:scale-[1.015] hover:bg-base-200/50 transition-all duration-200 rounded-md px-2 py-1">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                        🎯 Easy for people (and Google) to find you
                    </ItemMotion>
                </div>
                <div className="hover:scale-[1.015] hover:bg-base-200/50 transition-all duration-200 rounded-md px-2 py-1">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                        📈 Ready to grow with your business over time
                    </ItemMotion>
                </div>
            </ListMotion>
        </motion.section>
    );
}
