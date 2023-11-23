import { cn } from "@/lib/utils";
import * as React from "react";

type ContainerProps = {
  size?: 'small' | 'default' | 'wide' | 'full'


} & React.HTMLAttributes<HTMLElement>;

const Container = ({ size = 'default', className, children, }: ContainerProps) => {

  return (
    <div className={cn(
      " mx-auto px-6 md:px-12 lg:px-16 2xl:px-20 3xl:px-24",
      size === 'small' && "max-w-[800px]",
      size === 'wide' && "max-w-[1600px]",
      size === 'full' && "max-w-[1920px]",
      size === 'default' && "max-w-[1200px]",
      className,
    )}>{children}</div>
  );
};

export default Container;
