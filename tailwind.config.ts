import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        'ml':'450px',
        'mg':'800px'
      },
      colors: {
        'bg-primary': '#ffffff',
        'bg-secondary': '#083156',
        'bg-tertiary': '#715d5d',
        'bg-room': '#6a67673c',
        'text-primary': '#343a40',
        'text-secondary': '#194C87'
      },
      boxShadow: {
        '1xl': '0 0 2px 0.1px',
        '3xl': '0 0 10px 0.5px'
      },
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        translateY: {
          '0%': { translate: '0px 20px' },
          '100%': { translate: '0px 0px' }
        },
        translateX: {
          '0%': { translate: '0px 0px' },
          '100%': { translate: '-220px 0px' }
        },
        presentationLeft:{
          '0%': { 
            translate: '-150px 0px',
            opacity:'0'
          },
          '100%': { 
            translate: '0px 0px' ,
            opacity:'1'
          }
        },
        presentationRight:{
          '0%': { 
            translate: '150px 0px',
            opacity:'0'
          },
          '100%': { 
            translate: '0px 0px',
            opacity:'1'
          }
        },
        presentationBottom:{
          '0%': { 
            translate: '0px 150px',
            opacity:'0'
          },
          '100%': { 
            translate: '0px 0px',
            opacity:'1'
          }
        }
      },
      animation: {
        opacity: 'opacity 1s ease-in-out',
        translateY: 'translateY 1s ease-in-out',
        message: 'translateX 2.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
export default config
