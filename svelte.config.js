import adapter from '@sveltejs/adapter-static';
const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			fallback: 'index.html' // すべてのリクエストを index.html にフォールバック
		}),
		paths: {
            base: production ? '/organization-site' : '',
        }
	}
};

export default config;
