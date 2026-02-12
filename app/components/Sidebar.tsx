export default function Sidebar() {
    return (
        <aside className="w-72 bg-slate-900 p-8 hidden lg:flex flex-col justify-between">
            <div className="space-y-8">
                {/* Profile */}
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">Arun Jack</h1>
                    <p className="text-slate-400 text-sm">
                        Full-Stack Developer
                    </p>
                </div>

                {/* Basic Info */}
                <div className="space-y-2 text-sm text-slate-400">
                    <p>Location: India</p>
                    <p>Email: arun@email.com</p>
                </div>

                {/* Skills */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Core Skills</h2>

                    <div className="space-y-4">
                        <Skill name="Next.js" level="90%" />
                        <Skill name="React" level="85%" />
                        <Skill name="Supabase" level="80%" />
                        <Skill name="Tailwind CSS" level="85%" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-xs text-slate-500">
                © 2026 Arun Jack
            </div>
        </aside>
    );
}

function Skill({ name, level }: { name: string; level: string }) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span>{name}</span>
                <span>{level}</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded">
                <div
                    className="bg-yellow-400 h-2 rounded"
                    style={{ width: level }}
                />
            </div>
        </div>
    );
}
