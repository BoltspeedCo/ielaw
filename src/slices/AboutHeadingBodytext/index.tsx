import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutHeadingBodytext`.
 */
export type AboutHeadingBodytextProps =
  SliceComponentProps<Content.AboutHeadingBodytextSlice>;

/**
 * Component for "AboutHeadingBodytext" Slices.
 */
const AboutHeadingBodytext = ({
  slice,
}: AboutHeadingBodytextProps): JSX.Element => {
  const { heading, bodyText } = slice.primary
  return (
    <Section
      name="about-heading-bodytext"

      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <SmartText text={heading} variant="h2" className="  mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-2xl" />
        <div className="md:columns-2 gap-10  md:gap-16">
          <SmartText text={bodyText} variant="p" className="text-justify " />
        </div>

      </Container>

    </Section>
  );
};

export default AboutHeadingBodytext;
