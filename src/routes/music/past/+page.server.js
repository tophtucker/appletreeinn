import { sanity, parsePerformances } from '$lib/sanity.js';

const QUERY = `*[_type == "performance" && time < now()] | order(time asc) {
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
	return { performances: parsePerformances(performances) };
}
