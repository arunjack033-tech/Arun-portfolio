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
                    title="Django E-Commerce Platform"
                    description="Full-stack online shopping web application inspired by marketplace systems. Built secure user authentication, product management, cart functionality, and order processing with optimized database design."
                    tech="Python • Django • HTML • CSS • Angular • SQL"
                />

                <ProjectCard
                    title="Employee Management System"
                    description="Enterprise-level employee management system developed using ASP.NET and SQL Server. Enabled secure employee data handling, attendance tracking, and salary information management with optimized stored procedures."
                    tech="C# • ASP.NET • SQL Server • Angular • JavaScript"
                />
            </motion.div>
        </section>
    );
}

function ProjectCard({
    title,
    description,
    tech,
}: {
    title: string;
    description: string;
    tech: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900/80 backdrop-blur p-6 rounded-2xl border border-slate-800 hover:border-yellow-400 transition-all duration-300 shadow-lg"
        >
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
                <p className="text-xs text-yellow-400">{tech}</p>
            </div>
        </motion.div>
    );
}
