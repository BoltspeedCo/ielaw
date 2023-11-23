import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice, }: FaqProps): JSX.Element => {
  const { heading } = slice.primary
  const faqItems = slice.items
  return (
    <Section
      name="faq"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div className="">
          <SmartText text={heading} variant="h2" className="text-center uppercase mb-10 md:mb-12 lg:mb-16 xl:mb-20" />

        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>

            {faqItems.map((faqItem, index) => {
              const { answer, question } = faqItem
              return (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger ><SmartText text={question} variant="span" className="text-left !leading-tight" /></AccordionTrigger>
                  <AccordionContent>
                    <SmartText text={answer} variant="p" className="mb-0 lg:mb-0" />
                  </AccordionContent>
                </AccordionItem>
              )
            })
            }

          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
