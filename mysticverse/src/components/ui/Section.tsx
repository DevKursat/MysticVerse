import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'gradient';
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, variant = 'default', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-24 sm:py-32',
          {
            'bg-cosmic-deep': variant === 'default',
            'bg-midnight-dark': variant === 'dark',
            'bg-gradient-cosmic': variant === 'gradient',
          },
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
