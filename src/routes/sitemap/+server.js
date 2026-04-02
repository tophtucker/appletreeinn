// TODO: replace static/sitemap.txt with this, if Google will accept it

import { nav } from '$lib/nav.js';

const base = 'https://avalochinn.com';

export function GET() {
	const urls = [base + '/', ...nav.map((item) => `${base}/${item.slug}`)].join('\n');

	return new Response(urls, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
