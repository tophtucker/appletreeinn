import { sanity, parsePerformances } from '$lib/sanity.js';

const QUERY = `*[_type == "performance"] | order(time asc) {
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
	const performances = parsePerformances(await sanity.fetch(QUERY));
	return { performances };
}
