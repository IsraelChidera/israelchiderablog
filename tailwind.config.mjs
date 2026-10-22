import typography from '@tailwindcss/typography';

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,md,ts}'],
	theme: {
		extend: {
			colors: {
				bg: token('bg'),
				surface: token('surface'),
				'surface-2': token('surface-2'),
				fg: token('fg'),
				muted: token('muted'),
				line: token('line'),
				accent: token('accent'),
				'accent-fg': token('accent-fg'),
				ok: token('ok'),
				warn: token('warn'),
			},
			fontFamily: {
				sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
				mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
			},
			maxWidth: {
				page: '72rem',
			},
		},
	},
	plugins: [typography],
}
