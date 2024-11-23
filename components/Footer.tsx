import { footer } from "@/data";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function FooterPage() {
  return (
    <footer className="w-full mx-auto">
      <div className="flex-col flex md:flex-row gap-4 md:justify-evenly justify-center items-center ">
        <div>
          <h4 className="text-4xl font-bold my-4 md:my-0">Aldari</h4>
        </div>
        <div className="grid grid-cols-2  px-2 md:flex justify-between md:gap-8 items-center">
          {footer.map((item) => (
            <Link
              key={item.id}
              href={item.ref}
              className="cursor hover:bg-white hover:text-[#020817] rounded-md p-2 transition-all duration-200 "
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <Separator className="my-6" />
      <div className="text-center">
        &copy; 2024 | Landing Page P@nd@vion - by{" "}
        <Link
          href={"https://www.youtube.com/@tarredev"}
          target="_blank"
          className="cursor text-[#020817] font-bold"
        >
          TarreDev
        </Link>
      </div>
    </footer>
  );
}
