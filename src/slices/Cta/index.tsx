import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { SliceZoneContext } from "@/custom";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice, context }: CtaProps): JSX.Element => {
  const { bodyText: sliceBodyText, buttonLink: sliceButtonLink, buttonText: sliceButtonText, heading: sliceHeading, preHeading: slicePreheading } = slice.primary;
  const sliceZoneContext = context as SliceZoneContext
  const { ctaBodyText, ctaButtonLink, ctaButtonText, ctaHeading, ctaPreheading } = sliceZoneContext.globalSections.data
  let preHeading = slicePreheading
  let heading = sliceHeading
  let bodyText = sliceBodyText
  let buttonText = sliceButtonText
  let buttonLink = sliceButtonLink

  if (slice.variation === 'globalCta') {
    preHeading = ctaPreheading
    heading = ctaHeading
    bodyText = ctaBodyText
    buttonText = ctaButtonText
    buttonLink = ctaButtonLink
  }
  return (
    <Section
      name="cta"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className="">
        <div className="-mx-4 md:-mx-8 bg-foreground relative overflow-hidden">
          <div className="absolute w-full md:w-2/3 lg:w-7/12 right-0 h-[150px] md:h-full bottom-0 md:top-0 overflow-hidden">
            <Image src={'/images/cta-bg-final.png'} alt={'cta-background'} className="left-0 w-full h-full object-right-center lg:object-right-center object-cover relative grayscale" width={1000} height={1000} />

          </div>
          <div className="absolute w-full md:w-2/3 lg:w-7/12 h-[150px] md:h-full bottom-0 md:top-0 right-0  bg-radial-gradient-foreground">

          </div>
          <div className="max-w-5xl mx-auto relative">
            <div className=" max-w-lg  text-background pt-12 pb-28 p-6 md:p-8 lg:p-12 xl:p-16 text-left md:text-center flex flex-col md:items-center">
              <SmartText text={preHeading} variant="h5" size="h6" className=" font-normal mb-3 lg:mb-4 capitalize " />
              <SmartText text={heading} variant="h2" size="h1" className="font-bold uppercase md:max-w-xs mb-5 lg:mb-10" />
              <SmartText text={bodyText} variant="p" className="" />
              {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
                <div className="w-full h-full ">
                  <ButtonLink href={buttonLink.url || ''} className="text-background bg-transparent border-background"  >
                    {buttonText}
                  </ButtonLink>
                </div>
              ) : null}

            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Cta;
