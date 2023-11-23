import Container from "@/components/Container";
import Section from "@/components/Section";
import { SmartText } from "@/components/Typography";
import { Content, FilledContentRelationshipField, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ServiceDocumentData } from "../../../prismicio-types";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `ServicesLists`.
 */
export type ServicesListsProps =
  SliceComponentProps<Content.ServicesListsSlice>;

/**
 * Component for "ServicesLists" Slices.
 */
const ServicesLists = ({ slice }: ServicesListsProps): JSX.Element => {
  const { heading } = slice.primary
  const services = slice.items
  return (
    <Section
      name="services-lists"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container >
        <SmartText text={heading} variant="h2" className="text-center uppercase mb-12 md:mb-16 lg:mb-20 xl:mb-32" />
        <div className="flex flex-wrap -mx-4 lg:-mx-8 justify-between">
          {services.map((item, index) => {
            const service = item.service
            if (!isFilled.contentRelationship(service)) return null
            const { data: serviceData, uid, } = service as FilledContentRelationshipField<"service", string, Pick<ServiceDocumentData, 'name' | 'featuredIcon'>>
            if (!serviceData) return null
            const { name, featuredIcon } = serviceData
            return (
              <div className="w-1/2 md:w-1/3 px-4 lg:px-8 max-w-xs mb-4 md:mb-7" key="index">
                <Link href={'/contact-us'} className="flex gap-2 lg:gap-4 xl:gap-6 items-center py-4 md:pb-5 border-b border-muted">
                  <div className="shrink-0">
                    {isFilled.image(featuredIcon) ? (
                      <Image src={featuredIcon.url} alt={featuredIcon.alt || ''} className="h-6 lg:h-8 w-6 lg:w-8 object-contain" width={featuredIcon.dimensions.width} height={featuredIcon.dimensions.height} />
                    ) : null}
                  </div>
                  <div className="grow relative overflow-hidden">
                    <SmartText text={name} variant="h3" size={'h5'} className="text-sm uppercase mb-0 lg:mb-0 break-words max-w-[180px]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <svg className="hidden md:block h-3 w-3 lg:h-4 lg:w-4" width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66665 0L0.31665 2.35L7.94998 10L0.31665 17.65L2.66665 20L12.6666 10L2.66665 0Z" fill="#222222" />
                      </svg>

                    </div>
                  </div>
                </Link>
              </div>
            )
          })}

        </div>
      </Container>
    </Section>
  );
};

export default ServicesLists;
