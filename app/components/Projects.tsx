"use client";

import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="space-y-12">
            <h2 className="text-3xl font-bold">Projects</h2>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
            >
                <ProjectCard
                    title="Ideaxplode Clone"
                    description="Recreated a modern production-style web application using Next.js and Tailwind. Implemented responsive layout, authentication flow, and deployed using Vercel."
                    tech="Next.js • Tailwind • Supabase • Vercel"
                    github="#"
                    live="#"
                />

                <ProjectCard
                    title="Role-Based Auth System"
                    description="Built secure authentication system with role-based dashboard routing. Implemented protected routes and session validation using Supabase."
                    tech="Next.js • Supabase • PostgreSQL"
                    github="#"
                    live="#"
                />
            </motion.div>
        </section>
    );
}

function ProjectCard({
    title,
    description,
    tech,
    github,
    live,
}: {
    title: string;
    description: string;
    tech: string;
    github: string;
    live: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-800 hover:border-yellow-400 transition-all duration-300 shadow-lg flex flex-col justify-between"
        >
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
                <p className="text-xs text-yellow-400">{tech}</p>
            </div>

            <div className="flex gap-4 mt-6 text-sm">
                <a
                    href={github}
                    target="_blank"
                    className="px-4 py-2 border border-slate-600 rounded-lg hover:bg-slate-800 transition"
                >
                    GitHub
                </a>

                <a
                    href={live}
                    target="_blank"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
                >
                    Live Demo
                </a>
            </div>
        </motion.div>
    );
}
