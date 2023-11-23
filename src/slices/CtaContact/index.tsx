import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaContact`.
 */
export type CtaContactProps = SliceComponentProps<Content.CtaContactSlice>;

/**
 * Component for "CtaContact" Slices.
 */
const CtaContact = ({ slice }: CtaContactProps): JSX.Element => {
  const { bodyText, heading } = slice.primary
  return (
    <Section
      id="contact"
      name="cta-contact"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-muted"
    >
      <Container size="small">
        <SmartText text={heading} variant="h2" className="text-center uppercase mb-8 md:mb-8 lg:mb-12 xl:mb-16" />
        {isFilled.richText(bodyText) ? (
          <div className="prose prose-sm mx-auto prose-p:text-[15px] prose-li:leading-snug text-justify">
            <PrismicRichText field={bodyText} />
          </div>
        ) : null}
        <div className="mt-8 lg:mt-16">        <ContactForm />
        </div>

      </Container>

    </Section>
  );
};

export default CtaContact;
