import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ComponentPropsWithoutRef } from "react";

type CheckMarkProps = {

} & ComponentPropsWithoutRef<'svg'>
const CheckMarkIcon = ({ ...props }: CheckMarkProps) => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.77441 25.482C9.0209 33.3227 16.047 40.3813 22.8009 49.3086C30.1439 34.7039 37.6595 20.0484 50.0603 4.17728L46.7189 2.64673C36.2478 13.7516 28.1126 24.2633 21.0439 36.7555C16.1282 32.3274 8.18402 26.0609 3.3334 22.8414L1.77441 25.482Z" fill="#D4D68D" />
    </svg>

  )
}

/**
 * Props for `Benefits`.
 */
export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

/**
 * Component for "Benefits" Slices.
 */
const Benefits = ({ slice }: BenefitsProps): JSX.Element => {
  const { buttonLink, buttonText, heading } = slice.primary
  const benefits = slice.items
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      name=""
    >
      <Container size="small">
        <SmartText text={heading} variant="h2" className=" text-center" />
        {benefits.length > 0 ? (
          <div className="space-y-2 mt-10 lg:mt-16 -mx-4 md:mx-0">
            {benefits.map((benefit, index) => {
              const { benefitHeading, benefitdescription } = benefit
              return (
                <div className="bg-muted p-4 lg:p-6" key={index}>
                  <div className="flex gap-8 items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 shrink-0 flex items-center justify-center  rounded-full">
                      <CheckMarkIcon className="w-8 h-8 " />
                    </div>
                    <div className="">
                      <SmartText text={benefitHeading} variant="h4" size="h5" className=" text-left mb-1 lg:mb-2" />
                      <SmartText text={benefitdescription} variant="p" className=" text-left mb-0 lg:mb-0" />
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        ) : null}
        {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
          <div className="w-full h-full mt-8 lg:mt-12 text-center">
            <ButtonLink href={buttonLink.url || ''} className="" variant={'fill-dark'} size="lg"  >
              {buttonText}
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </Section>
  );
};

export default Benefits;
