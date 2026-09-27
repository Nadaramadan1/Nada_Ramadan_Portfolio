import React from 'react';

export type SectionSpacing = 'compact' | 'standard' | 'spacious' | 'none';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  spacing?: SectionSpacing;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: '',
  compact: 'py-10 sm:py-14',
  standard: 'py-16 sm:py-24',
  spacious: 'py-20 sm:py-32',
};

export const Section: React.FC<SectionProps> = ({
  id,
  spacing = 'standard',
  as: Component = 'section',
  children,
  className = '',
  ...props
}) => {
  return (
    <Component
      id={id}
      className={`relative w-full ${spacingClasses[spacing]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
