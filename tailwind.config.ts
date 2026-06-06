import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#E86C2F',
        charcoal: '#1A1A2E',
        warm: '#F8F6F3',
        yellow: '#f59e0b',
        muted: '#6B7280',
        cloud: '#F3F4F6'
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 10px 28px rgba(26,26,46,0.08)',
        lift: '0 22px 60px rgba(26,26,46,0.14)'
      },
      borderRadius: {
        brand: '8px'
      },
      maxWidth: {
        site: '1280px'
      }
    }
  },
  plugins: []
};

export default config;
