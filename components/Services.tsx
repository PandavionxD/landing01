import { dataServices } from "@/data";
import { Title } from "./Shared/Title";
import { Check } from "lucide-react";
import { Container } from "./Shared/Container";

export const Services = () => {
  return (
    <Container>
      <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
        <Title title="Servicios" subtitle="Que ofrezco" />
        <div className="grid md:grid-cols-3 gap-5 mt-7">
          {dataServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border-slate-400 border-2 p-6 dark:bg-slate-800"
            >
              <h4 className="mb-4 text-xl flex gap-2">
                {service.icon}
                {service.title}
              </h4>
              <ul>
                {service.features.map((feature, id) => (
                  <li key={id} className="flex gap-3 mb-3">
                    <Check size={28} />
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
