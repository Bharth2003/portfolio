import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Extracurricular } from "@/components/sections/Extracurricular";
import { Contact } from "@/components/sections/Contact";
import { BlogPlaceholder } from "@/components/sections/BlogPlaceholder";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Extracurricular />
      <Contact />
      <BlogPlaceholder />
    </>
  );
}
