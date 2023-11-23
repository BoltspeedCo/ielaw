import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaGuarantee`.
 */
export type CtaGuaranteeProps = SliceComponentProps<Content.CtaGuaranteeSlice>;

/**
 * Component for "CtaGuarantee" Slices.
 */
const CtaGuarantee = ({ slice }: CtaGuaranteeProps): JSX.Element => {
  const { bodyText, buttonLink, buttonText, guaranteeImage, heading } = slice.primary
  return (
    <Section
      name="cta-guarantee"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-foreground text-background"
    >
      <Container >
        <div className="flex flex-col-reverse md:flex-row items-center  flex-wrap  mb-6 md:mb-8 lg:mb-12 xl:mb-16 -mx-6 lg:-mx-12">
          <div className="w-full md:w-2/3 px-6 lg:px-12">
            <SmartText text={heading} variant="h2" size="h1" className="uppercase lg:text-[42px] mb-0 lg:mb-0 gradient-guarantee " />

          </div>
          <div className="w-full md:w-1/3 px-6 lg:px-12 mb-6 md:mb-0">
            {
              isFilled.image(guaranteeImage) ? (
                <div className=" w-32 md:w-32 lg:w-40 aspect-square ">
                  <img src={guaranteeImage.url} alt={guaranteeImage.alt || ''} className="w-full h-full object-contain" width={guaranteeImage.dimensions.width} height={guaranteeImage.dimensions.height} />
                </div>
              ) : null
            }
          </div>

        </div>
        <div className=" flex flex-wrap  items-start -mx-6 lg:-mx-12">
          <div className="w-full lg:w-2/3 px-6 lg:px-12">
            <div className="md:columns-1 gap-10  md:gap-16">
              <SmartText text={bodyText} variant="p" className=" text-justify" />

            </div>
          </div>
          <div className="w-full lg:w-1/3 px-6 lg:px-12 mt-6 lg:mt-0">
            {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
              <div className="w-full h-full text-center">
                <ButtonLink href={buttonLink.url || ''} className="bg-background text-foreground hover:bg-background/90" variant={'fill'} size="lg"  >
                  {buttonText}
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CtaGuarantee;
