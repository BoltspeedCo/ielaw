import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container";

/**
 * Props for `WysiwygTextBlock`.
 */
export type WysiwygTextBlockProps =
  SliceComponentProps<Content.WysiwygTextBlockSlice>;

/**
 * Component for "WysiwygTextBlock" Slices.
 */
const WysiwygTextBlock = ({ slice }: WysiwygTextBlockProps): JSX.Element => {
  const { textBlock } = slice.primary
  return (

    <Section
      name="cta-contact"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        {isFilled.richText(textBlock) ? (
          <div className="prose prose-sm   prose-li:leading-snug leading-snug text-justify max-w-full">
            <PrismicRichText field={textBlock} />
          </div>
        ) : null}

      </Container>

    </Section>
  );
};

export default WysiwygTextBlock;
