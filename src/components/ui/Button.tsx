'use client'
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useAnimate, stagger, motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type } from "os"

const staggerMenuText = stagger(0.05, { startDelay: 0 })

function useButtonTextAnimation() {
  const [scope, animate] = useAnimate()
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs uppercase leading-wide   font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        fill: "bg-primary text-primary-foreground hover:bg-primary/90",
        'fill-dark': "bg-foreground text-background hover:bg-foreground/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        default:
          "border-[1.5px] border-text-primary-foreground bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9  px-3",
        lg: "h-11 text-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [scope, animate] = useAnimate()
    if (typeof children === 'string') {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
          onMouseEnter={() => {
            animate('.text-child-top', {
              y: -16,
            }, {
              delay: staggerMenuText,
            })
            animate('.text-child-bottom', {
              y: -16,
            }, {
              delay: staggerMenuText
            })
          }}
          onMouseLeave={() => {
            animate('.text-child-top', {
              y: 0,
            }, {
              delay: staggerMenuText
            })
            animate('.text-child-bottom', {
              y: 0,
            }, {
              delay: staggerMenuText
            })
          }}
        >
          <span ref={scope} className="overflow-hidden block relative">
            <span className="text-parent-top block ">
              {children.split('').map((child, i) => {
                return (
                  <span className="text-child-top inline-block min-w-[3px]" key={i}>{child}</span>
                )
              })}
            </span>
            <span ref={scope} className="text-parent block absolute -bottom-4 left-0 w-full">
              {children.split('').map((child, i) => {
                return (
                  <span className="text-child-bottom inline-block min-w-[3px]" key={i}>{child}</span>
                )
              })}
            </span>
          </span>
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}

      >

        {children}
      </Comp>
    )
  }
)


Button.displayName = "Button"

type ButtonLinkProps = {} & React.ComponentPropsWithRef<typeof Link> & VariantProps<typeof buttonVariants>
const ButtonLink = ({ children, variant, size, className, ...props }: ButtonLinkProps) => {
  const [scope, animate] = useAnimate()

  const childrenText = typeof children === "string" ? (
    <span ref={scope} className="overflow-hidden block relative">
      <span className="text-parent-top block ">
        {children.split('').map((child, i) => {
          return (
            <span className="text-child-top inline-block min-w-[3px]" key={i}>{child}</span>
          )
        })}
      </span>
      <span ref={scope} className="text-parent block absolute -bottom-4 left-0 w-full">
        {children.split('').map((child, i) => {
          return (
            <span className="text-child-bottom inline-block min-w-[3px]" key={i}>{child}</span>
          )
        })}
      </span>
    </span>
  ) : children
  return (
    <Link {...props} className={cn(buttonVariants({ variant, size, className }))} onMouseEnter={() => {
      animate('.text-child-top', {
        y: -16,
      }, {
        delay: staggerMenuText
      })
      animate('.text-child-bottom', {
        y: -16,
      }, {
        delay: staggerMenuText
      })
    }}
      onMouseLeave={() => {
        animate('.text-child-top', {
          y: 0,
        }, {
          delay: staggerMenuText
        })
        animate('.text-child-bottom', {
          y: 0,
        }, {
          delay: staggerMenuText
        })
      }}>
      {childrenText}
    </Link>
  )
}

const AnimatedLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithRef<typeof Link>>((props, ref) => {
  const { children, ...rest } = props
  const [scope, animate] = useAnimate()

  const childrenText = typeof children === "string" ? (
    <span ref={scope} className="overflow-hidden block relative">
      <span className="text-parent-top block ">
        {children.split('').map((child, i) => {
          return (
            <span className="text-child-top inline-block min-w-[3px]" key={i}>{child}</span>
          )
        })}
      </span>
      <span ref={scope} className="text-parent block absolute -bottom-5 left-0 w-full">
        {children.split('').map((child, i) => {
          return (
            <span className="text-child-bottom inline-block min-w-[3px]" key={i}>{child}</span>
          )
        })}
      </span>
    </span>
  ) : children
  return (
    <Link {...rest} ref={ref} onMouseEnter={() => {
      animate('.text-child-top', {
        y: -20,
      }, {
        delay: staggerMenuText
      })
      animate('.text-child-bottom', {
        y: -20,
      }, {
        delay: staggerMenuText
      })
    }}
      onMouseLeave={() => {
        animate('.text-child-top', {
          y: 0,
        }, {
          delay: staggerMenuText
        })
        animate('.text-child-bottom', {
          y: 0,
        }, {
          delay: staggerMenuText
        })
      }}>
      {childrenText}
    </Link>
  )
})
AnimatedLink.displayName = "AnimatedLink"

export { Button, buttonVariants, ButtonLink, AnimatedLink }
