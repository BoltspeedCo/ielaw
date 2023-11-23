import Container from "@/components/Container";
import CountUp from "@/components/CountUp";
import Section from "@/components/Section";
import Typography, { SmartText } from "@/components/Typography";
import { cn } from "@/lib/utils";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `ServiceHeader`.
 */
export type ServiceHeaderProps =
  SliceComponentProps<Content.ServiceHeaderSlice>;

/**
 * Component for "ServiceHeader" Slices.
 */
const ServiceHeader = ({ slice }: ServiceHeaderProps): JSX.Element => {
  const { bodyText, heading, statsCaption, statsNumber, statsUnit } = slice.primary
  const peopleItems = slice.items
  return (
    <Section
      name="service-header"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-6 lg:pt-12 xl:pt-16"
    >
      <Container>
        <div className="">
          <div className="grid md:grid-cols-5 gap-2 items-center">
            <div className="w-full order-2 md:order-1 md:col-span-2  md:pr-6 lg:pr-12 mb-4 md:mb-0">
              <div className="max-w-[220px]  w-full">
                <div className="flex items-end">
                  {isFilled.number(statsNumber) ? (
                    <>
                      <Typography variant={'h2'} className="text-6xl  lg:text-7xl xl:text-8xl font-normal !leading-none italic mb-0 lg:mb-0">
                        <CountUp countNumber={statsNumber} />

                      </Typography>
                    </>
                  ) : null}
                  <SmartText text={statsUnit} variant="h4" className="text-2xl lg:text-3xl font-normal italic mb-0 lg:mb-0 pb-2" />
                </div>
                <SmartText text={statsCaption} variant="p" className="text-base font-normal" />
              </div>
            </div>
            <div className="w-full md:order-2 md:col-span-3 ">
              <div className="">
                <SmartText text={heading} variant="h2" className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-8" />
                <SmartText text={bodyText} variant="p" className="text-justify" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-4 lg:mt-10">
          {peopleItems.map((item, index) => {
            const peopleImage = item.lawyer
            return (
              <div className={
                cn(
                  index === 0 ? 'col-span-2' : 'col-span1'
                )
              } key={index}>
                <div className="h-[175px] md:h-[220px]">
                  {isFilled.image(peopleImage) ? (
                    <Image src={peopleImage.url} className="w-full h-full object-cover object-top grayscale" alt={peopleImage.alt || ''} width={peopleImage.dimensions.width} height={peopleImage.dimensions.height} />
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ServiceHeader;
