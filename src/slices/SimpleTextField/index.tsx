import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SimpleTextField`.
 */
export type SimpleTextFieldProps =
  SliceComponentProps<Content.SimpleTextFieldSlice>;

/**
 * Component for "SimpleTextField" Slices.
 */
const SimpleTextField = ({ slice }: SimpleTextFieldProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for simple_text_field (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SimpleTextField;
