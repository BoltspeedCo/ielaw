import Container from "@/components/Container";
import Section from "@/components/Section";
import Typography, { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import CountUp from "@/components/CountUp";

/**
 * Props for `LpHero`.
 */
export type LpHeroProps = SliceComponentProps<Content.LpHeroSlice>;

/**
 * Component for "LpHero" Slices.
 */
const LpHero = ({ slice }: LpHeroProps): JSX.Element => {
  const { backgroundImage, bodyText, buttonLink, buttonText, heading, overline } = slice.primary;
  const stats = slice.items
  return (
    <Section
      name="lp-hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="absolute  w-full h-full top-0 left-0">
        {isFilled.image(backgroundImage) ? (
          <Image src={backgroundImage.url} alt={backgroundImage.alt || ''} className="w-full md:w-3/4 h-full absolute top-0 right-0 object-top object-cover" width={backgroundImage.dimensions.width} height={backgroundImage.dimensions.height} />
        ) : null}
        <div className="absolute w-full md:w-5/6 h-full bg-gradient-to-br md:bg-gradient-to-r top-0 left-0 from-background via-background/90 md:via-background to-transparent"></div>

      </div>
      <Container className="relative" size="wide">
        <div className="max-w-4xl lg:pr-12">
          <SmartText text={overline} variant="h5" className="font-normal uppercase !text-base" />
          <SmartText text={heading} variant="h1" className="text-3xl lg:text-4xl 2xl:text-5xl mb-8 lg:mb-16" />
          <SmartText text={bodyText} variant="p" className="text-base max-w-md" />
          {isFilled.link(buttonLink) && isFilled.keyText(buttonText) ? (
            <div className="w-full h-full ">
              <ButtonLink href={buttonLink.url || ""} className="" variant={'fill-dark'} size="lg" >
                {buttonText}
              </ButtonLink>
            </div>
          ) : null}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12 max-w-4xl mt-10 lg:mt-20">
          {stats.map((stat, index) => {
            const { statsCaption, statsNumber, statsUnit } = stat
            return (
              <div className="max-w-[220px]  w-full" key={index}>
                <div className="flex items-end gap-1">
                  {isFilled.number(statsNumber) ? (
                    <>
                      <Typography variant={'h2'} className="text-3xl  lg:text-4xl xl:text-5xl font-normal !leading-none italic mb-0 lg:mb-0">
                        <CountUp countNumber={statsNumber} />

                      </Typography>
                    </>
                  ) : null}
                  <SmartText text={statsUnit} variant="h4" className="text-lg lg:text-xl font-normal italic mb-0 lg:mb-0 pb-1 md:pb-2" />
                </div>
                <SmartText text={statsCaption} variant="p" className="text-sm font-normal" />
              </div>
            )
          })
          }
        </div>
      </Container>
    </Section>
  );
};

export default LpHero;
