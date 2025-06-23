import { sanity } from '$lib/sanity.js';
import { toHTML } from '@portabletext/to-html';
import imageUrlBuilder from '@sanity/image-url';
import { isoParse, isoFormat } from 'd3-time-format';
import { timeDay } from 'd3-time';

const builder = imageUrlBuilder(sanity);

// TODO: is this date math possible within groq?
const yesterday = isoFormat(timeDay());
const QUERY = `*[_type == "performance" && time > '${yesterday}'] | order(time asc) {
  _id,
  time,
  note,
  act->{
    _id,
    name,
    genre,
    description,
    image
  }
}`;

export async function load() {
	const performances = await sanity.fetch(QUERY);
	for (const p of performances) {
		if (p.act?.description) p.act.description = toHTML(p.act.description);
		if (p.act?.image) p.act.image = builder.image(p.act.image).url();
		p.time = isoParse(p.time);
	}
	return { performances };
}
