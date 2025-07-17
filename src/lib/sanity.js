import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';
import imageUrlBuilder from '@sanity/image-url';
import { isoParse } from 'd3-time-format';

export const sanity = createClient({
	projectId: 'lxtjf1cx',
	dataset: 'production',
	apiVersion: '2024-01-01',
	useCdn: false
});

const builder = imageUrlBuilder(sanity);

export function parsePerformance(p) {
	if (p.act?.description) p.act.description = toHTML(p.act.description);
	if (p.act?.image) p.act.image = builder.image(p.act.image).url();
	p.time = isoParse(p.time);
	return p;
}

export function parseBulletin(b) {
	b.startTime = isoParse(b.startTime);
	return b;
}
