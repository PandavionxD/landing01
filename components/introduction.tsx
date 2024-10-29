import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import { Container } from "./Shared/Container";
export const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hola, me llamo</h3>
        <h1 className="text-4xl font-bold mb-3">Alex Daniel 👨🏻‍💻</h1>
        <h2 className="text-2xl text-gray-400 ">Frontend Developer</h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto ">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2 " /> Contacta conmigo
            </Link>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/cv/cv_tarre.pdf"
              target="_blank"
            >
              <Paperclip className="mr-2 " /> Descargar CV
            </Link>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="Profile_Alex"
          className="rounded-full"
          height={500}
          width={500}
        />
      </div>
    </Container>
  );
};
