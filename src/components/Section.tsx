import { cn } from "@/lib/utils";
import * as React from "react";

type SectionProps = {
  name: string;

} & React.HTMLAttributes<HTMLElement>;
const defaultClasses = "py-16 lg:py-32 relative";
const Section = ({ name, className, children, ...props }: SectionProps) => {
  return (
    <section className={cn(`section--${name}`, defaultClasses, className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
