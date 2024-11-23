import { dataContact } from "@/data";
import { Title } from "./Shared/Title";
import Link from "next/link";
import { Container } from "./Shared/Container";
import FooterPage from "./Footer";

export const Contact = () => {
  return (
    <Container>
      <div className="p-6 md:px-12 md:py-44 w-full mx-auto" id="contact">
        <Title
          title="Contacta conmigo"
          subtitle="Ponte en contaco conmigo 👋"
        />
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:gap-7 mt-8">
          <>
            {dataContact.map((data) => (
              <div
                key={data.id}
                className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-8 p-4"
              >
                {data.icon}
                <p>{data.title}</p>
                <p>{data.subtitle}</p>
                <Link href={data.link} target="_blank">
                  Enviar mensaje
                </Link>
              </div>
            ))}
          </>
        </div>
        <FooterPage/>
      </div>
    </Container>
  );
};
