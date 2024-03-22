import {
  type ButtonHTMLAttributes,
  type ForwardedRef,
  forwardRef
} from 'react'
import Link from 'next/link'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils'

// * Variants (recommended: @/const/button-variants.ts)
const variants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors' +
  ' disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-white text-black hover:bg-slate-200',
        secondary:
            'bg-[#27272A] text-white hover:bg-[#27272A80]',
        destructive:
          'bg-[#7F1D1D] text-white hover:bg-[#751b1b]',
        outline:
          'bg-transparent text-white border border-[#FFFFFF30] hover:bg-[#27272A] hover:border-transparent',
        link:
          'text-white hover:underline',
        icon: 'bg-transparent text-white border border-[#FFFFFF30] hover:bg-[#27272A] hover:border-transparent w-fit'
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-4 rounded-md',
        lg: 'h-11 px-8 rounded-md'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
// * Types required for props and forwardRef
type Props = {
  ref?: ForwardedRef<HTMLButtonElement>
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
VariantProps<typeof variants>

export const Button = forwardRef<HTMLButtonElement, Props>((
  { className, children, href, variant, size, ...props }, ref
) => {
  return (
    <>
      {
        href
          // * Link with button styles
          ? <Link
            href={href}
            className={cn(variants({ variant, size, className }))}
          >
            {children}
          </Link>

          // * Normal button
          : <button
            ref={ref}
            className={cn(variants({ variant, size, className }))}
            {...props}
          >
            {children}
          </button>
      }
    </>
  )
}
)

Button.displayName = 'Button'
