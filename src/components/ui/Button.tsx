import type { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'default' | 'ghost' | 'outline' | 'destructive'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:text-primary-foreground shadow-[0_0_15px_hsl(151_100%_50%/0.3)] hover:shadow-[0_0_35px_hsl(151_100%_50%/0.7)] hover:scale-105',
  ghost: 'hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_15px_hsl(151_100%_50%/0.2)]',
  outline: 'border border-border bg-transparent hover:bg-accent/10 hover:text-accent hover:border-accent hover:shadow-[0_0_15px_hsl(151_100%_50%/0.3)]',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_0_20px_hsl(0_84%_60%/0.5)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3 text-sm',
  lg: 'h-11 px-8',
  icon: 'h-10 w-10',
}

export const Button = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
