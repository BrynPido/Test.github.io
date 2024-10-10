import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Enable preprocessors like TypeScript, SCSS, etc.
	preprocess: vitePreprocess(),

	kit: {
		// Use static adapter
		adapter: adapter(),

		// Define base path if deploying to a subdirectory
		paths: {
			base: '/Test.github.io',  // Make sure this matches your deployment setup
		},

		prerender: {
			entries: ['/about', '/contact', '/portfolio'],
			handleHttpError: ({ status, path }) => {
				// Skips prerendering for 404 pages
				if (status === 404) return;
				// You might want to handle other status codes differently
			}
		}
	}
};

export default config;
