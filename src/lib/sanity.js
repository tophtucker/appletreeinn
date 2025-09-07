import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';
import imageUrlBuilder from '@sanity/image-url';
import { timeFormat } from 'd3-time-format';
import { timeMonday, timeDay } from 'd3-time';
import { formatDayRange } from '$lib/index.js';
import { Temporal } from '@js-temporal/polyfill';

export const sanity = createClient({
	projectId: 'lxtjf1cx',
	dataset: 'prod',
	apiVersion: '2024-01-01',
	useCdn: false
});

const TIME_ZONE = 'America/New_York';
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const isoParse = (isoUtc) => Temporal.Instant.from(isoUtc).toZonedDateTimeISO('America/New_York');

// PERFORMANCES

const builder = imageUrlBuilder(sanity);

export function parsePerformance(p) {
	if (!p) return null;
	if (p.act?.description) p.act.description = toHTML(p.act.description);
	if (p.act?.image) p.act.image = builder.image(p.act.image).url();
	p.startTime = isoParse(p.startTime);
	p.endTime = p.endTime ? isoParse(p.endTime) : null;
	return p;
}

// BULLETINS

export function parseBulletin(b) {
	b.startTime = isoParse(b.startTime);
	if (b.details) b.details = toHTML(b.details);
	return b;
}

// RESTAURANTS

function parseDayHours(hours) {
	if (hours.closed) return [];
	return [hours.open, hours.close].map((time) => Temporal.PlainTime.from(time));
}

export function parseRestaurant({ hours, hourOverrides, menus }) {
	const normalHours = daysOfWeek.map((day, i) => ({
		day,
		i: i + 1,
		hours: parseDayHours(hours[day.toLowerCase()])
	}));

	// Make calendar of absolute dates from most recent Monday for next two weeks
	const calendar = [];
	const today = Temporal.Now.plainDateISO(TIME_ZONE);
	const latestMonday = today.subtract({ days: (today.dayOfWeek + 6) % 7 });
	for (let i = 0; i < 14; i++) {
		const date = latestMonday.add({ days: i });
		const normal = normalHours.find((d) => d.i === date.dayOfWeek).hours;
		let special = hourOverrides.find((d) => date.equals(d.date));
		special = special ? parseDayHours(special) : null;
		calendar.push({
			date, // PlainDate
			hours: (special ?? normal).map((time) =>
				date.toPlainDateTime(time).toZonedDateTime(TIME_ZONE)
			), // ZonedDateTime
			normalHours: normal, // PlainTime
			specialHours: special // PlainTime
		});
	}

	return { normalHours, calendar, menus };
}
