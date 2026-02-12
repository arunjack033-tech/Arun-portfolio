import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex">
      <Sidebar />
      <div className="flex-1 p-8 lg:p-20 space-y-28 max-w-6xl">
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
