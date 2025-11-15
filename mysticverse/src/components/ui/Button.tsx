import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cosmic-deep disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-gold-bright to-gold-orange text-midnight-dark shadow-[0_4px_16px_rgba(255,215,0,0.3)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,215,0,0.4)] active:scale-95 focus:ring-gold-bright',
        secondary:
          'bg-transparent border border-gold-bright text-gold-bright hover:bg-[rgba(255,215,0,0.1)] focus:ring-gold-bright',
        outline:
          'bg-transparent border border-glass-border text-text-primary hover:bg-glass hover:border-text-secondary focus:ring-text-secondary',
        ghost:
          'bg-transparent text-text-primary hover:bg-glass focus:ring-text-secondary',
        danger:
          'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-12 px-8 text-base',
        lg: 'h-14 px-10 text-lg',
        icon: 'h-12 w-12',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
