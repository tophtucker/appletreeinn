import { sanity, parsePerformance, parseBulletin } from '$lib/sanity.js';

const MUSIC_QUERY = `*[_type == "performance" && time > now()] | order(time asc) [0] {
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

const BULLETINS_QUERY = `*[_type == "bulletin" && startTime < now() && endTime > now()] | order(startTime desc) {
  _id,
  startTime,
  text,
  details
}`;

export async function load() {
	return {
		nextPerformance: parsePerformance(await sanity.fetch(MUSIC_QUERY)),
		bulletins: (await sanity.fetch(BULLETINS_QUERY)).map(parseBulletin)
	};
}
