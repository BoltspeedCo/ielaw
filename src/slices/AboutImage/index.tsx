import Container from "@/components/Container";
import CountUp from "@/components/CountUp";
import Section from "@/components/Section";
import Typography, { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `LpAboutImage`.
 */
export type AboutImageProps = SliceComponentProps<Content.AboutImageSlice>;

/**
 * Component for "LpAboutImage" Slices.
 */
const AboutImage = ({ slice }: AboutImageProps): JSX.Element => {
  const { bodyText, buttonLink, buttonText, heading, image } = slice.primary
  const { variation } = slice
  if (variation === 'withStats') {
    const { } = slice.primary
  }
  const withStatsPrimary = variation === 'withStats' ? slice.primary : null
  return (
    <Section
      name="about-image"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container >
        <div className={cn(
          "flex flex-wrap justify-between -mx-6 lg:-mx-12 flex-col-reverse",
          variation === 'withStats' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        )}>
          <div className={cn(
            " px-6 lg:px-12",
            variation === 'withStats' ? 'w-full lg:w-7/12' : 'w-full lg:w-7/12'
          )}>
            <div className="">
              <SmartText text={heading} variant="h2" className=" text-left" />
              {isFilled.richText(bodyText) ? (
                <div className="prose prose-sm  prose-p:text-[15px] text-justify leading-snug">
                  <PrismicRichText field={bodyText} />
                </div>
              ) : null}
              {/* <SmartText text={bodyText} variant="p" className="max-w-md text-justify" /> */}
              {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
                <div className="w-full h-full mt-8 lg:mt-12">
                  <ButtonLink href={buttonLink.url || ''} className="" variant={'fill-dark'} size="lg" >
                    {buttonText}
                  </ButtonLink>
                </div>
              ) : null}
            </div>
          </div>
          <div className="w-full lg:w-5/12 md:max-w-sm px-6 lg:px-12 mb-8 lg:mb-0">
            <div className="relative w-full h-full">
              <div className={cn(
                "w-full  relative  overflow-hidden",
                variation === 'withStats' ? 'aspect-square md:aspect-[4/5]' : 'aspect-square md:aspect-auto h-full'
              )}>
                {isFilled.image(image) ? (
                  <Image src={image.url} className="grayscale w-full absolute h-full top-0 left-0  object-center object-cover" alt={image.alt || ""} width={image.dimensions.width} height={image.dimensions.height} />
                ) : null}
              </div>

              {withStatsPrimary ? (
                <>

                  <div className="absolute bottom-1/4 left-0 md:top-1/3 md:left-[unset] md:-right-1/3 md:-translate-y-1/2 max-w-[190px] bg-foreground text-background p-2 md:p-6 w-full" >
                    <div className="flex items-end gap-1">
                      {isFilled.number(withStatsPrimary.statsNumber) ? (
                        <>
                          <Typography variant={'h2'} className="text-3xl  lg:text-4xl xl:text-5xl font-normal !leading-none italic mb-0 lg:mb-0">
                            <CountUp countNumber={withStatsPrimary.statsNumber} />

                          </Typography>
                        </>
                      ) : null}
                      <SmartText text={withStatsPrimary.statsUnit} variant="h4" className="text-lg lg:text-xl font-normal italic mb-0 lg:mb-0 pb-1 md:pb-2" />
                    </div>
                    <SmartText text={withStatsPrimary.statsCaption} variant="p" className="text-sm mb-0 lg:mb-0 font-normal" />
                  </div>
                  <div className="mt-2 lg:mt-3">
                    <SmartText text={withStatsPrimary.imageCaption} variant="p" className="max-w-md text-justify mb-0 lg:mb-0" />
                  </div>
                </>) : null}
            </div>
          </div>
        </div>
      </Container>

    </Section>
  );
};

export default AboutImage;
