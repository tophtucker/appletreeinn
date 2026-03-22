import { sanity, parsePerformance } from '$lib/sanity.js';

const QUERY = `*[_type == "performance"] | order(startTime asc) {
  _id,
  startTime,
  endTime,
  noTime,
  note,
  act->{
    _id,
    name,
    genre,
    description,
    image,
    youtube
  }
}`;

export async function load() {
	return { performances: (await sanity.fetch(QUERY)).map(parsePerformance) };
}
