"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
        >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                I build <span className="text-yellow-400">scalable</span> full-stack web applications
            </h1>

            <p className="text-slate-400 text-lg max-w-2xl">
                Full-Stack Developer specializing in Next.js and Supabase.
                I design secure authentication systems, role-based dashboards,
                and deploy production-ready applications with clean architecture.
            </p>

            <div className="flex gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
                >
                    View Projects
                </a>

                <a
                    href="https://github.com/"
                    target="_blank"
                    className="px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition"
                >
                    GitHub
                </a>
            </div>
        </motion.section>
    );
}
