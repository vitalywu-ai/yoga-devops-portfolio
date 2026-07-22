import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import Contactform from '@/components/Contactform'; // Наша рабочая форма

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contactform /> {/* Форма с отправкой сообщений в БД */}
    </>
  );
}