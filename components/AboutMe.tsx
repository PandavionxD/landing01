import { dataAboutMe, dataSlider } from "@/data";
import { Title } from "./Shared/Title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Container } from "./Shared/Container";

export const AboutMe = () => {
  return (
    <Container>
      <div className="p-6 md:px-12 md:py-30  max-w-5xl mx-auto" id="about-me">
        <Title title="Sobre mí" subtitle="Conóceme" />
        <div className="grid md:grid-cols-2">
          <div className="py-12 md:py-0 flex items-center justify-center">
            {/*  ?Carousel   */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"

              className="w-full max-w-xs"
            >
              <CarouselContent className="mt-1 h-[250px]">
                {dataSlider.map((data) => (
                  <CarouselItem key={data.id}>
                    <div className="flex items-center justify-center ">
                      <Image
                        src={data.url}
                        alt="Image"
                        width={200}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <div className="grid md:grid-cols-3 mt-7 gap-4">
              {dataAboutMe.map((data) => (
                <div
                  key={data.id}
                  className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100  dark:bg-slate-800 "
                >
                  {data.icon}
                  <p className="my-2"> {data.name} </p>
                  <p className="text-gray-400">{data.description}</p>
                </div>
              ))}
            </div>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex
              eum voluptate voluptates possimus doloribus porro? Porro ipsa
              labore dolores doloremque error accusamus, dolorem quo eius
              tempore, incidunt illo ea.
            </p>
            <Button>
              <Phone size={20} className="mr-2" />
              Hablamos
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
