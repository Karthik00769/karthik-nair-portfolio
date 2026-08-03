import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Philosophy } from "@/components/sections/philosophy";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { GithubSection } from "@/components/sections/github";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
