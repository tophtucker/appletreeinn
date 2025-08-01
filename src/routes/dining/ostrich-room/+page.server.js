import { sanity, parsePerformance } from '$lib/sanity.js';
import { isoFormat } from 'd3-time-format';
import { timeMonday } from 'd3-time';

const start = timeMonday();
const end = timeMonday.offset(start, 1);

const QUERY = `*[_type == "performance" && startTime > '${isoFormat(start)}' && startTime < '${isoFormat(end)}'] | order(startTime asc) {
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
