import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Introduction } from "@/components/introduction";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
  <main className="grid w-full place-content-center " >
    <Navbar/>
    <Introduction/>
    <AboutMe/>
    <Experience />
    <Services/>
    <Portfolio />
    <Testimonial/>
    <Contact />
  </main>
  )
}
