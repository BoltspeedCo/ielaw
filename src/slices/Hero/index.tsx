import Section from "@/components/Section";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { image } = slice.primary
  return (
    <Section
      name="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-0 lg:py-0"
    >
      {isFilled.image(image) ? (
        <Image src={image.url} alt={image.alt || ''} priority width={image.dimensions.width} height={image.dimensions.height}
          className="w-full  h-[450px] lg:h-[680px] object-cover object-center "
        />
      ) : null}
    </Section>
  );
};

export default Hero;
