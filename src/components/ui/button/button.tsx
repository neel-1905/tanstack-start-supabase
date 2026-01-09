import { cn } from '@/lib/utils'

import { cva } from 'class-variance-authority'
import { ButtonProps } from './button.types'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all rounded-primary disabled:opacity-70 w-max cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary text-foreground hover:bg-primary/85',
        outline:
          'border border-primary bg-transparent text-primary hover:bg-primary/5',
        ghost: 'bg-transparent text-primary hover:bg-primary/5',
        destructive: 'bg-destructive text-white hover:bg-red-600',
        secondary: 'bg-background text-foreground hover:bg-accent',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'size-8 p-2',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: Props) => {
  const { variant, size, className, isLoading, children, ...rest } = props

  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : children}
    </button>
  )
}

export default Button
