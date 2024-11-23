import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="px-12 md:px-40 w-full grid grid-cols-1 min-h-[95vh] justify-center items-center ">
      {children}
    </div>
  );
};
