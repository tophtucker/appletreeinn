import { sanity, parsePerformance, parseBulletin, parseRestaurant } from '$lib/sanity.js';
import { timeFormat } from 'd3-time-format';

const MUSIC_QUERY = `*[_type == "performance" && startTime > now()] | order(startTime asc) [0] {
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

const BULLETINS_QUERY = `*[_type == "bulletin" && startTime < now() && endTime > now()] | order(startTime desc) {
  _id,
  startTime,
  text,
  details,
  urgent
}`;

const OSTRICH_QUERY = `*[_type == "restaurant" && name == "The Ostrich Room"][0] {
  hours,
  hourOverrides,
  "menus": menus[]{ name, "url": asset->url }
}`;

export async function load() {
	// TODO: combine into single Sanity GROQ query
	// https://www.sanity.io/answers/combining-two-groq-queries-in-one-client-fetch---and-usepreview---in-sanity-io
	return {
		nextPerformance: parsePerformance(await sanity.fetch(MUSIC_QUERY)),
		bulletins: (await sanity.fetch(BULLETINS_QUERY)).map(parseBulletin),
		ostrichRoom: parseRestaurant(await sanity.fetch(OSTRICH_QUERY))
	};
}
