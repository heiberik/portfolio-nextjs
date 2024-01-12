import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-accent rounded text-white hover:bg-accent/70',
                secondary:
                    'rounded bg-secondary text-white hover:bg-secondary/70',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'h-fit',
            },
            size: {
                default: 'px-4 py-3',
                sm: 'h-9  px-3',
                lg: 'h-12  px-8',
                icon: 'h-10 w-10',
                fit: 'h-fit w-fit',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
