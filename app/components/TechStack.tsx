export default function TechStack() {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <TechCard title="Frontend" items="React, Next.js, Tailwind" />
                <TechCard title="Backend" items="Supabase, Node.js" />
                <TechCard title="Database" items="PostgreSQL" />
                <TechCard title="Deployment" items="Vercel, GitHub" />
            </div>
        </section>
    );
}

function TechCard({ title, items }: { title: string; items: string }) {
    return (
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-yellow-400 transition">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-slate-400 text-sm">{items}</p>
        </div>
    );
}
