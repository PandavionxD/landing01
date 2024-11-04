import { dataPortfolio } from "@/data";
import { Title } from "./Shared/Title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const Portfolio = () => {
  return (
    <div className="p-4  max-w-4xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portafolio" subtitle="Trabajos recientes 💼" />
      <div className="grid md:grid-cols-3 gap-14 mt-4">
        {dataPortfolio.map((data) => (
          <div key={data.id}>
            <h3 className="ext-xl mb-4 ">{data.title}</h3>
            <Image
              src={data.image}
              alt="image"
              width={300}
              height={300}
              className="rounded-2xl w-full "
            />
            <div className="mt-5 flex gap-5">
              <Link
                href={data.urlGithub}
                className={buttonVariants({ variant: "outline" })}
                target="_blank"
              >
                Github
              </Link>
              <Link
                target="_blank"
                href={data.urlGithub}
                className={buttonVariants()}
              >
                Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
