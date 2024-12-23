/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					red: '#ff0040',
					green: '#0c724a',
					blue: '#0d2252'
				}
			},
			textShadow: {
				sm: '2px 2px 5px rgba(0, 0, 0, 0.5)',
				lg: '4px 4px 10px rgba(0, 0, 0, 0.5)',
				none: 'none'
			},
			boxShadow: {
				'highlight-none': '0 2px 0 0 rgba(255, 0, 64, .5)',
				highlight: '0 4px 0 0 rgba(255, 0, 64, 1)'
			},
			backgroundImage: {
				'gradient-dots': 'radial-gradient(circle, var(--tw-gradient-from) 2px, transparent 2px)',
				'gradient-lines':
					'linear-gradient(45deg, var(--tw-gradient-from) 25%, transparent 25%), linear-gradient(-45deg, var(--tw-gradient-from) 25%, transparent 25%)',
				'gradient-circles':
					'linear-gradient(45deg, var(--tw-gradient-from) 25%, transparent 25%), linear-gradient(-45deg, var(--tw-gradient-from) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--tw-gradient-from) 75%), linear-gradient(-45deg, transparent 75%, var(--tw-gradient-from) 75%)',
				'gradient-waves': 'linear-gradient(45deg, var(--tw-gradient-from) 10%, transparent 10%)'
			},
			backgroundSize: {
				'pattern-size-sm': '10px 10px',
				'pattern-size': '20px 20px',
				'pattern-size-lg': '40px 40px',
				'pattern-size-xl': '60px 60px'
			},
			backgroundPosition: {
				'pattern-position': '0 0, 0 10px, 10px -10px, -10px 0px'
			}
		}
	}
	// plugins: [require('prettier-plugin-tailwindcss')],
}
