/**
 * Centralized Design Token System
 * Nada Shams Eldin - AI Engineer Portfolio
 *
 * All design tokens are defined here and mapped to CSS custom properties
 * in index.css so they can be centrally maintained and modified globally.
 */

export const tokens = {
  typography: {
    fonts: {
      sans: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.15',
      snug: '1.3',
      normal: '1.5',
      relaxed: '1.65',
    },
    letterSpacings: {
      tighter: '-0.035em',
      tight: '-0.02em',
      normal: '0em',
      wide: '0.04em',
      wider: '0.08em',
    },
  },

  colors: {
    light: {
      bg: {
        primary: '#FFFFFF',
        secondary: '#F8FAFC',
        tertiary: '#F1F5F9',
        elevated: '#FFFFFF',
        subtle: '#F1F5F9',
      },
      text: {
        primary: '#0F172A', // Deep navy / slate-900
        secondary: '#334155', // slate-700
        muted: '#64748B', // slate-500
        inverse: '#FFFFFF',
      },
      accent: {
        primary: '#1D4ED8', // Sophisticated blue (accessible 5.5:1 contrast)
        hover: '#1E40AF',
        subtle: '#EFF6FF',
        border: '#BFDBFE',
        light: '#2563EB',
      },
      border: {
        subtle: '#E2E8F0',
        default: '#CBD5E1',
        strong: '#94A3B8',
      },
      shadow: {
        sm: '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        md: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        lg: '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
      },
    },
    dark: {
      bg: {
        primary: '#0B0F19', // Deep charcoal-navy
        secondary: '#111827', // Dark navy surface
        tertiary: '#1E293B',
        elevated: '#131B2E',
        subtle: '#192338',
      },
      text: {
        primary: '#F8FAFC', // Slate-50 crisp readable white
        secondary: '#CBD5E1', // Slate-300
        muted: '#94A3B8', // Slate-400
        inverse: '#0B0F19',
      },
      accent: {
        primary: '#3B82F6', // Blue-500 refined vibrant blue
        hover: '#60A5FA',
        subtle: 'rgba(59, 130, 246, 0.12)',
        border: 'rgba(59, 130, 246, 0.28)',
        light: '#60A5FA',
      },
      border: {
        subtle: '#1E293B',
        default: '#334155',
        strong: '#475569',
      },
      shadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.35)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.45), 0 2px 4px -2px rgba(0, 0, 0, 0.35)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.55), 0 4px 6px -4px rgba(0, 0, 0, 0.45)',
      },
    },
  },

  radii: {
    none: '0px',
    sm: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    full: '9999px',
  },

  spacing: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1360px',
    },
    section: {
      compact: '3rem', // 48px
      standard: '5rem', // 80px
      spacious: '7rem', // 112px
    },
  },

  transitions: {
    fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    normal: '250ms cubic-bezier(0.16, 1, 0.3, 1)',
    smooth: '350ms cubic-bezier(0.16, 1, 0.3, 1)',
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type ThemeMode = 'light' | 'dark';
export type ThemePreference = 'light' | 'dark' | 'system';
