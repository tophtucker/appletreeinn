import { Temporal } from '@js-temporal/polyfill';
import { sanity, parsePerformance } from '$lib/sanity.js';
import { TIME_ZONE } from '$lib/index.js';

const today = Temporal.Now.plainDateISO(TIME_ZONE);
const latestMonday = today.subtract({ days: (today.dayOfWeek + 6) % 7 });
const nextMonday = latestMonday.add({ days: 7 });

const QUERY = `*[_type == "performance" && startTime > '${latestMonday.toString()}' && startTime < '${nextMonday.toString()}'] | order(startTime asc) {
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
