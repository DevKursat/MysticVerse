import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-deep': '#1A0B2E',
        'cosmic-mid': '#2D1B4E',
        'midnight-dark': '#0F1828',
        'midnight-light': '#1B2838',
        'indigo-rich': '#3D2C8D',
        'gold-bright': '#FFD700',
        'gold-muted': '#F4C430',
        'gold-orange': '#FFA500',
        silver: '#C0C0C0',
        'aurora-purple': '#9D4EDD',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.8)',
        'text-tertiary': 'rgba(255, 255, 255, 0.6)',
        'text-disabled': 'rgba(255, 255, 255, 0.4)',
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        primary: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Inter Display', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        display: '4.5rem', // 72px
        h1: '3rem', // 48px
        h2: '2.25rem', // 36px
        h3: '1.75rem', // 28px
        h4: '1.25rem', // 20px
        'body-lg': '1.125rem', // 18px
        body: '1rem', // 16px
        small: '0.875rem', // 14px
        micro: '0.75rem', // 12px
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '1': '0.25rem', // 4px
        '2': '0.5rem', // 8px
        '3': '0.75rem', // 12px
        '4': '1rem', // 16px
        '6': '1.5rem', // 24px
        '8': '2rem', // 32px
        '12': '3rem', // 48px
        '16': '4rem', // 64px
        '24': '6rem', // 96px
        '32': '8rem', // 128px
      },
      keyframes: {
        fadeUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        cosmicSpin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)',
          },
        },
        particleFloat: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out',
        fadeIn: 'fadeUp 0.3s ease-out',
        fadeOut: 'fadeUp 0.15s ease-in reverse',
        cosmicSpin: 'cosmicSpin 20s linear infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        particleFloat: 'particleFloat 4s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-cosmic': 'linear-gradient(180deg, #1A0B2E 0%, #3D2C8D 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #9D4EDD 0%, #C77DFF 100%)',
      },
    },
  },
  plugins: [],
}
export default config
