import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography, { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Advantage`.
 */
export type AdvantageProps = SliceComponentProps<Content.AdvantageSlice>;

/**
 * Component for "Advantage" Slices.
 */
const Advantage = ({ slice }: AdvantageProps): JSX.Element => {
  const { heading, buttonLink, buttonText } = slice.primary
  const advantages = slice.items
  return (
    <Section
      name="advantage"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container >
        <div className="mb-12 md:mb-16 lg:mb-24 md:max-w-3xl lg:max-w-2xl">
          <SmartText text={heading} variant="h2" className="!mb-0 text-justify md:text-left" />


        </div>
        <div className="md:max-w-2xl ml-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-x-28 lg:gap-y-20">
          {advantages.map((advantage, index) => {
            const { advantageDescription, advantageHeading } = advantage
            return (
              <div className="col-span-1" key={index}>
                <SmartText text={advantageHeading} variant="h3" size="h4" className="font-bold mb-3 lg:mb-5" />
                <SmartText text={advantageDescription} variant="p" className="mb-0 lg:mb-0 text-justify" />
              </div>
            )
          })}
          {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
            <div className="w-full h-full flex flex-col justify-end items-start">
              <ButtonLink href={buttonLink.url || ''} className=""  >
                {buttonText}
              </ButtonLink>
            </div>
          ) : null}

        </div>
      </Container>
    </Section>
  );
};

export default Advantage;
