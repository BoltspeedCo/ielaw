import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Subservices`.
 */
export type SubservicesProps = SliceComponentProps<Content.SubservicesSlice>;

/**
 * Component for "Subservices" Slices.
 */
const Subservices = ({ slice }: SubservicesProps): JSX.Element => {
  const { heading, buttonLink, buttonText } = slice.primary
  const subservices = slice.items
  return (
    <Section
      name="subservices"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-6 lg:pb-16"
    >
      <Container size="wide">
        <div className="">
          <SmartText text={heading} variant="h2" className="text-center uppercase mb-12 md:mb-16 lg:mb-20 xl:mb-32" />
        </div>
        <div className="flex flex-wrap justify-between -mx-6 lg:-mx-12">
          {subservices.map((subservice, index) => {
            const { heading, description } = subservice
            return (
              <div className="w-full md:w-1/2 lg:w-1/3 md:max-w-md px-6 lg:px-12 mb-8 md:mb-12 lg:mb-12 xl:mb-16" key={index}>
                <SmartText text={heading} variant="h3" size="h4" className="font-bold mb-3 lg:mb-5" />
                <SmartText text={description} variant="p" className="mb-0 lg:mb-0 text-justify" />
                <div className="mt-auto">
                  <ButtonLink href={isFilled.link(buttonLink) ? buttonLink.url || '' : ''} className={cn(
                    "",
                    isFilled.richText(description) ? "mt-4 md:mt-6 lg:mt-10 xl:mt-14" : "mt-3 md:mt-4 lg:mt-4 xl:mt-6"
                  )}>
                    Contact Us
                  </ButtonLink>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Subservices;
