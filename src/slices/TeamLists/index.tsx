import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamLists`.
 */
export type TeamListsProps = SliceComponentProps<Content.TeamListsSlice>;

/**
 * Component for "TeamLists" Slices.
 */
const TeamLists = ({ slice }: TeamListsProps): JSX.Element => {
  const { heading } = slice.primary
  const teamMembers = slice.items
  return (
    <Section
      name="team-partner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <SmartText text={heading} variant="h2" className="text-center uppercase mb-12 md:mb-16 lg:mb-20 xl:mb-32" />

        <div className="grid grid-cols-2 justify-between md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 xl:gap-24">
          {teamMembers.map((person, index) => {
            const { email, name, title } = person
            return (
              <div className="col-span-1 text-center mb-4 md:mb-0 overflow-hidden" key={index}>


                <SmartText text={name} variant="h3" size="h4" className="mb-2 text-base lg:mb-3 uppercase break-words" />
                <div className="space-y-px mb-2 lg:mb-3 flex flex-col">
                  <SmartText text={title} variant="p" className=" font-normal mb-0 lg:mb-0 leading-tight break-words" />
                  {isFilled.keyText(email) ? (
                    <a href={`mailto:${email}`}>
                      <SmartText text={email} variant="span" className=" text-sm block mb-0 lg:mb-0 underline italic break-words leading-tight " />
                    </a>
                  ) : null}

                </div>


              </div>
            )
          })
          }
        </div>
      </Container>
    </Section>
  );
};

export default TeamLists;
