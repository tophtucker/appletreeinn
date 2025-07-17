import { sanity, parsePerformance } from '$lib/sanity.js';

const QUERY = `*[_type == "performance" && time > now()] | order(time asc) [0] {
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
	return { nextPerformance: parsePerformance(await sanity.fetch(QUERY)) };
}
