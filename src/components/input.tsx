import React, { type InputHTMLAttributes, type FC, forwardRef } from 'react'
import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils'

const variants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-[#121212]' +
  ' py-3 px-4 text-white focus:outline focus:outline-[#FFFFFF07]', {
    variants: {
      variant: {
        default: ''
      },
      size: {
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type Props = InputHTMLAttributes<HTMLInputElement>
& VariantProps<typeof variants>

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(variants({ variant, size, className }))}
        formNoValidate
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
