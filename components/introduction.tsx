import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import { Container } from "./Shared/Container";
export const Introduction = () => {
  return (
    <Container>
      <div className="text-center" id="introduction">
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
        <div className="grid place-items-center w-full place-content-center mt-12">
          <picture className=" bg-[#020817] w-[210px] h-[210px] rounded-full flex justify-center dark:bg-white items-center  ">
            <Image
              src="/profile.png"
              alt="Profile_Alex"
              height={200}
              width={200}
              className="rounded-full w-[200px] h-[200px] object-contain bg-white  dark:bg-[#020817] overflow-hidden hover:scale-110 transition-all duration-300  "
            />
          </picture>
        </div>
      </div>
    </Container>
  );
};
