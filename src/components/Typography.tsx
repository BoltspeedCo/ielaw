import * as React from "react";
import { ILoremIpsumParams } from "lorem-ipsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { KeyTextField, NumberField, RichTextField, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import WithPlaceholderText from "./WithPlaceholderText";





type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

const typographyVariants = cva(
  '', {
  variants: {

    variant: {
      'h1': 'text-3xl lg:text-4xl !leading-none mb-5 lg:mb-7',
      'h2': 'text-2xl lg:text-3xl !leading-none mb-5 lg:mb-7',
      'h3': 'text-xl lg:text-2xl !leading-none mb-5 lg:mb-7',
      'h4': 'text-lg lg:text-xl !leading-none mb-4 lg:mb-5',
      'h5': 'text-lg lg:text-lg !leading-none mb-3 lg:mb-4',
      'h6': 'text-sm lg:text-base leading-tight mb-3 lg:mb-5',
      'p': 'leading-relaxed text-[14px] mb-3 lg:mb-5',
      'span': '',
    },
    size: {
      'h1': 'text-3xl lg:text-4xl ',
      'h2': 'text-2xl lg:text-3xl ',
      'h3': 'text-xl lg:text-2xl ',
      'h4': 'text-lg lg:text-xl ',
      'h5': 'text-md lg:text-lg ',
      'h6': 'text-sm lg:text-base ',
      'p': 'leading-relaxed ',

    }
  },
  defaultVariants: {
    variant: 'p',
  },

})
type HeadingProps = {
  placeholderCount?: number;
  placeholderUnits?: LoremUnit;

} & React.ComponentPropsWithoutRef<TypographyVariants> & VariantProps<typeof typographyVariants>
interface IPlaceholderDefautls {
  [key: string]: ILoremIpsumParams;
}
const placeholderDefaults: IPlaceholderDefautls = {
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  p: {},
  span: { count: 8, units: "words" },
};
const Typography = ({
  variant = 'p',
  className,
  children,
  size,
  placeholderCount = 8,
  placeholderUnits = "words",
  ...props
}: HeadingProps) => {
  if (!variant) return null
  const CustomTag = variant;
  return (
    <CustomTag
      // dangerouslySetInnerHTML={{ __html: text }}
      className={cn(typographyVariants({ variant, className, size }))}
      {...props}
    >

      <WithPlaceholderText
        {...placeholderDefaults[CustomTag]}
        count={
          placeholderCount
            ? placeholderCount
            : placeholderDefaults[CustomTag].count
        }
        units={
          placeholderUnits
            ? placeholderUnits
            : placeholderDefaults[CustomTag].units
        }
      >
        {children}
      </WithPlaceholderText>

    </CustomTag>
  );
};


type SmartTextProps = {
  text: string | RichTextField | KeyTextField | NumberField
  variant: TypographyVariants
}


export const SmartText = ({
  text,
  variant = 'p',
  ...props
}: SmartTextProps & React.ComponentPropsWithoutRef<typeof Typography>) => {
  if (!text) return null
  if (typeof text === 'number') {
    const filledText = isFilled.number(text) ? text : null
    return <Typography variant={variant} {...props}>{filledText}</Typography>
  }
  if (typeof text === 'string') {
    const filledText = isFilled.keyText(text) ? text : null
    return <Typography variant={variant} {...props}>{filledText}</Typography>
  }
  const filledText = isFilled.richText(text) ? text : null
  return (
    <PrismicRichText field={filledText} components={(type, node, content, children) => {
      switch (type) {
        case 'heading1': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'heading2': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'heading3': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'heading4': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'heading5': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'heading6': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'paragraph': return <Typography variant={variant} {...props}>{children}</Typography>
        case 'span': return <>{content}</>
      }
    }} />


  )
}

export default Typography;

