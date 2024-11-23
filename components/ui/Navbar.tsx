import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleDark } from "./ToggleDark";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Navbar = () => {
  return (
    <nav className="fixed z-20 bottom-12 left-[calc(50%-180px)] w-[360px] flex items-center ">
      <div className="flex items-center justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/20 background-blur-sm rounded-full ">
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition-all duration-150 "
          >
            <TooltipProvider
            delayDuration={100}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Link href={item.link}>{item.icon}</Link>
                </TooltipTrigger>
                <TooltipContent className="mb-4 dark:text-white dark:bg-[#1C212F] text-md font-medium text-[#020817] bg-[#D2D4D8] " >
                  <p>
                    {item.title}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
        <ToggleDark />
      </div>
    </nav>
  );
};
