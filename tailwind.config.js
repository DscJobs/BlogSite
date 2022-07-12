// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx', './lib/**/*.ts'],
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        '1a56db': '#1a56db',
        breakcolor: 'var(--hr_color)',
        headercolor: 'var(--headercolor)',
        purewhite: 'var(--color)',
        secondary_one: 'var(--secondary_color_one)',
        secondary_two: 'var(--secondary_color_two)',
        secondary_three: 'var(--secondary_color_three)',
        secondary_four: 'var(--secondary_color_four)',
        secondary_five: 'var(--secondary_color_five)',
        secondary_six: 'var(--secondary_color_six)', 
        disabled_color: 'var(--button_disabled)', 
        def_sample: '#6476b8',
        def_sample2: '#151823',
        def_sample3: 'rgb(75, 83, 122)',
        dis_sample: '#5866ef',
        dis_sample2: '#36393f',
        dis_sample3: '#7289DA',
        dim_sample: '#4bb952',
        dim_sample2: '#2e343d',
        dim_sample3: '#2b682f',
        drk_sample: '#f85d48',
        drk_sample2: 'rgb(22, 22, 22)',
        drk_sample3: '#fa452d88',
        
        primary: colors.teal,
        //@ts-ignore
        gray: colors.neutral,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color)',
            a: {
              color: 'var(--secondary_color_two)',
              '&:hover': {
                color: `var(--secondary_color_three) !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: 'var(--color)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: 'var(--color)',
            },
            h3: {
              fontWeight: '600',
              color: 'var(--color)',
            },
            'h4,h5,h6': {
              color: 'var(--color)',
            },
            pre: {
              backgroundColor: 'var(--color)',
            },
            code: {
              color: 'var(--secondary_color_two)',
              backgroundColor: 'var(--color)',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: 'var(--color)',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: 'var(--color)' },
            'ol li::marker': {
              fontWeight: '600',
              color: 'var(--color)',
            },
            'ul li::marker': {
              backgroundColor: 'var(--color)',
            },
            strong: { color: 'var(--color)' },
            blockquote: {
              color: 'var(--color)',
              borderLeftColor: 'var(--color)',
            },
          },
        },
        dark: {
          css: {
            color: 'var(--color)',
            a: {
              color: 'var(--secondary_color_two)',
              '&:hover': {
                color: `var(--secondary_color_three) !important`,
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: 'var(--color)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: 'var(--color)',
            },
            h3: {
              fontWeight: '600',
              color: 'var(--color)',
            },
            'h4,h5,h6': {
              color: 'var(--color)',
            },
            pre: {
              backgroundColor: 'var(--color)',
            },
            code: {
              backgroundColor: 'var(--color)',
            },
            details: {
              backgroundColor: 'var(--color)',
            },
            hr: { borderColor: 'var(--color)' },
            'ol li::marker': {
              fontWeight: '600',
              color: 'var(--secondary_color_two)',
            },
            'ul li::marker': {
              backgroundColor: 'var(--color)',
            },
            strong: { color: 'var(--color)' },
            thead: {
              th: {
                color: 'var(--color)',
              },
            },
            tbody: {
              tr: {
                borderBottomColor: 'var(--color)',
              },
            },
            blockquote: {
              color: 'var(--color)',
              borderLeftColor: 'var(--color)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
