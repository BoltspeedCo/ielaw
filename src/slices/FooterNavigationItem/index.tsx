import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterNavigationItem`.
 */
export type FooterNavigationItemProps =
  SliceComponentProps<Content.FooterNavigationItemSlice>;

/**
 * Component for "FooterNavigationItem" Slices.
 */
const FooterNavigationItem = ({
  slice,
}: FooterNavigationItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_navigation_item (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FooterNavigationItem;
