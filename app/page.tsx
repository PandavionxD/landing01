import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Introduction } from "@/components/introduction";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
  <main className="pb-40" >
    <Navbar/>
    <Introduction/>
    <AboutMe/>
    <Experience />
  </main>
  )
}
