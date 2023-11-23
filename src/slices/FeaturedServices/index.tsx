import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Content, FilledContentRelationshipField, ImageField, KeyTextField, RichTextField, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
/**
 * Props for `FeaturedServices`.
 */
export type FeaturedServicesProps =
  SliceComponentProps<Content.FeaturedServicesSlice>;

/**
 * Component for "FeaturedServices" Slices.
 */
const FeaturedServices = ({ slice }: FeaturedServicesProps): JSX.Element => {
  const { heading } = slice.primary
  const featuredServices = slice.items
  return (
    <Section
      name="featured-services"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-2 lg:pb-8"
    >
      <Container size="wide">
        <SmartText text={heading} variant="h2" className="text-center uppercase mb-12 md:mb-16 lg:mb-20 xl:mb-32" />
        {featuredServices ? (
          <div className="flex flex-wrap justify-between -mx-6 lg:-mx-12">
            {featuredServices.map((featuredService, index) => {
              if (!isFilled.contentRelationship(featuredService.service)) return
              const { service } = featuredService
              const { data, uid } = service as FilledContentRelationshipField<"service", string, {
                name: KeyTextField;
                featuredDescription: RichTextField
                featuredIcon: ImageField
              }>
              if (!data) return
              const { featuredDescription, featuredIcon, name } = data
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 md:max-w-md px-6 lg:px-12 mb-8 md:mb-12 lg:mb-20 xl:mb-24" key={index}>
                  <div className="flex flex-wrap gap-4 lg:gap-6 xl:gap-8 h-full">
                    {isFilled.image(featuredIcon) ? (
                      <div className="md:pt-2">
                        <Image src={featuredIcon.url} alt={featuredIcon.alt || ''} className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 object-contain" width={100} height={100} />
                      </div>
                    ) : null
                    }
                    <div className="flex-1 flex flex-col" key={index}>
                      <SmartText text={name} variant="h4" size="h5" className="font-bold mb-3 lg:mb-4 capitalize" />
                      <SmartText text={featuredDescription} variant="p" className="mb-0 lg:mb-0 text-justify" />
                      <div className="mt-auto">
                        <ButtonLink href={`/contact-us`} className="mt-4 md:mt-6 lg:mt-10 xl:mt-12">
                          Learn More
                        </ButtonLink>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })
            }
          </div>
        ) : null}
      </Container>
    </Section>
  );
};

export default FeaturedServices;
