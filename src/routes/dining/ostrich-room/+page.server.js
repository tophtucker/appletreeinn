import { Temporal } from '@js-temporal/polyfill';
import { sanity, parsePerformance } from '$lib/sanity.js';
import { TIME_ZONE } from '$lib/index.js';

const QUERY = (
	start,
	end
) => `*[_type == "performance" && startTime > '${start}' && startTime < '${end}'] | order(startTime asc) {
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
	const today = Temporal.Now.plainDateISO(TIME_ZONE);
	const latestMonday = today.subtract({ days: (today.dayOfWeek + 6) % 7 });
	const nextMonday = latestMonday.add({ days: 7 });
	return {
		performances: (await sanity.fetch(QUERY(latestMonday.toString(), nextMonday.toString()))).map(
			parsePerformance
		)
	};
}
