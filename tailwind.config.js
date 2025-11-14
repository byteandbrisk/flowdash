/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          500: '#2F7CFF',
          600: '#255FCC',
        },
        slate: {
          900: '#0B1A36',
          700: '#334155',
          600: '#475569',
          100: '#F1F5F9',
        },
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'card': '0 10px 30px -12px rgba(31,41,55,0.25)',
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(1200px 600px at 80% -10%, rgba(47,124,255,0.25), transparent 60%),
          linear-gradient(180deg,#0f3a8a 0%,#1a51c9 35%,#2f7cff 100%)
        `,
        'accent-gradient': 'linear-gradient(90deg, #8B5CF6 0%, #2F7CFF 100%)',
      },
      container: {
        center: true,
        padding: '16px',
        screens: {
          lg: '1120px',
        },
      },
      spacing: {
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
    },
  },
  plugins: [],
}
