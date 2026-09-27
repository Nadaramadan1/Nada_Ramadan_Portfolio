import React from 'react';

// --- Heading Component ---
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  as?: HeadingLevel;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.12]',
  h2: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-snug',
  h3: 'text-xl sm:text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] leading-snug',
  h4: 'text-lg sm:text-xl font-semibold text-[var(--color-text-primary)]',
  h5: 'text-base font-semibold text-[var(--color-text-primary)]',
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  as,
  children,
  className = '',
  ...props
}) => {
  const Component = as || level;
  return (
    <Component className={`${headingStyles[level]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// --- Text Component ---
export type TextVariant = 'lead' | 'body' | 'small' | 'muted';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const textStyles: Record<TextVariant, string> = {
  lead: 'text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-normal',
  body: 'text-base text-[var(--color-text-secondary)] leading-relaxed',
  small: 'text-sm text-[var(--color-text-secondary)] leading-normal',
  muted: 'text-sm text-[var(--color-text-muted)] leading-normal',
};

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as: Component = 'p',
  children,
  className = '',
  ...props
}) => {
  return (
    <Component className={`${textStyles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// --- Badge Component ---
export type BadgeVariant = 'default' | 'accent' | 'subtle' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  isMono?: boolean;
  children: React.ReactNode;
  className?: string;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]',
  accent:
    'bg-[var(--color-accent-subtle)] text-[var(--color-accent-primary)] border border-[var(--color-accent-border)] font-medium',
  subtle:
    'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]',
  outline:
    'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border-default)]',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  isMono = false,
  children,
  className = '',
  ...props
}) => {
  const monoClass = isMono ? 'font-mono text-xs' : 'text-xs';
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md font-medium tracking-wide transition-colors ${badgeVariants[variant]} ${monoClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// --- Section Header Primitive ---
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-10 sm:mb-12 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <span className="block mb-2 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--color-accent-primary)]">
          {eyebrow}
        </span>
      )}
      <Heading level="h2" className="mb-4">
        {title}
      </Heading>
      {description && (
        <Text variant="lead" className="text-[var(--color-text-muted)]">
          {description}
        </Text>
      )}
    </div>
  );
};
