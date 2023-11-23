import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { SliceZoneContext } from "@/custom";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Step`.
 */
export type StepsProps = SliceComponentProps<Content.StepsSlice>;

/**
 * Component for "Step" Slices.
 */
const Steps = ({ slice, context }: StepsProps & { context: SliceZoneContext }): JSX.Element => {
  const { globalSections } = context;
  const { data: globalSectionsData } = globalSections
  const { stepsHeading: headingGlobal, stepItems: stepsItemsGlobal } = globalSectionsData
  const { heading } = slice.primary
  const stepItems = slice.items
  return (
    <Section
      name="steps"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-6 lg:pb-12 bg-muted"

    >
      <Container size="default">
        {slice.variation === 'default' ? (
          <SmartText text={heading} variant="h2" className=" uppercase mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-2xl" />
        ) : null}
        {slice.variation === 'stepGlobal' ? (
          <SmartText text={headingGlobal} variant="h2" className=" uppercase mb-10 md:mb-12 lg:mb-16 xl:mb-20 max-w-2xl" />
        ) : null}
        <ul className="hidden lg:flex -mb-12 flex-wrap justify-between -mx-6 lg:-mx-12 overflow-hidden">
          <li className="w-full -mb-12 px-6 h-8 lg:h-12 lg:px-12 relative flex items-center">
            <div className="border-b-2 border-dotted border-neutral-400 w-full"></div>
          </li>
          {slice.variation === 'default' ? (
            (stepItems).map((stepItem, index) => (
              <li className="w-full md:w-1/2 lg:w-1/3 md:max-w-sm px-6 lg:px-12" key={index}>
                <div className="relative before:content-[''] before:block before:bg-muted before:w-32 before:h-full before:absolute before:top-0 before:-left-10 text-lg leading-none lg:text-xl font-bold bg-muted w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center text-center "><span>0{index + 1}</span></div>


              </li>
            ))
          ) : null}
          {slice.variation === 'stepGlobal' ? (
            (stepsItemsGlobal).map((stepItem, index) => (
              <li className="w-full md:w-1/2 lg:w-1/3 md:max-w-sm px-6 lg:px-12" key={index}>
                <div className="relative before:content-[''] before:block before:bg-muted before:w-32 before:h-full before:absolute before:top-0 before:-left-10 text-lg leading-none lg:text-xl font-bold bg-muted w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center text-center "><span>0{index + 1}</span></div>


              </li>
            ))
          ) : null}
        </ul>
        <ul className="relative flex flex-wrap justify-between -mx-6 lg:-mx-12">
          {slice.variation === 'default' ? (
            stepItems.map((stepItem, index) => (
              <li className="w-full md:w-1/2 lg:w-1/3 md:max-w-sm px-6 lg:px-12 mb-9 md:mb-12 lg:mb-12 xl:mb-16" key={index}>
                <div className="text-lg leading-none lg:text-xl font-bold bg-background w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center text-center mb-5 lg:mb-6"><span>0{index + 1}</span></div>
                <SmartText text={stepItem.stepHeading} variant="h3" size="h4" className="font-bold mb-3 lg:mb-4" />
                <SmartText text={stepItem.stepDescription} variant="p" className="mb-0 text-justify" />
              </li>
            ))
          ) : null}
          {slice.variation === 'stepGlobal' ? (
            stepsItemsGlobal.map((stepItem, index) => (
              <li className="w-full md:w-1/2 lg:w-1/3 md:max-w-sm px-6 lg:px-12 mb-9 md:mb-12 lg:mb-12 xl:mb-16" key={index}>
                <div className="text-lg leading-none lg:text-xl font-bold bg-background w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center text-center mb-5 lg:mb-6"><span>0{index + 1}</span></div>

                <SmartText text={stepItem.heading} variant="h3" size="h4" className="font-bold mb-3 lg:mb-3" />
                <SmartText text={stepItem.description} variant="p" className="mb-0 text-justify" />
              </li>
            ))
          ) : null}
        </ul>
      </Container>
    </Section>
  );
};

export default Steps;
