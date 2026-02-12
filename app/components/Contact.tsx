export default function Contact() {
    return (
        <section className="space-y-6">
            <h2 className="text-3xl font-bold">Contact</h2>

            <p className="text-slate-400">
                Feel free to reach out for collaboration or opportunities.
            </p>

            <div className="flex gap-6 text-sm">
                <a
                    href="mailto:your@email.com"
                    className="underline hover:text-yellow-400 transition"
                >
                    Email
                </a>

                <a
                    href="https://github.com/"
                    target="_blank"
                    className="underline hover:text-yellow-400 transition"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}
