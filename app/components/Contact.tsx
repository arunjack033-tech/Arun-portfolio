export default function Contact() {
    return (
        <section className="space-y-6">
            <h2 className="text-3xl font-bold">Contact</h2>

            <p className="text-slate-400 max-w-xl">
                Interested in collaborating or hiring me for a project?
                Feel free to reach out.
            </p>

            <div className="flex gap-6 text-sm">
                <a
                    href="mailto:arun@email.com"
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

                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="underline hover:text-yellow-400 transition"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
