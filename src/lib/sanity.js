import { createClient } from '@sanity/client';
import { toHTML } from '@portabletext/to-html';
import imageUrlBuilder from '@sanity/image-url';
import { isoParse, timeFormat } from 'd3-time-format';
import { timeMonday, timeDay } from 'd3-time';

export const sanity = createClient({
	projectId: 'lxtjf1cx',
	dataset: 'prod',
	apiVersion: '2024-01-01',
	useCdn: false
});

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

function parseTime(baseDate, str) {
	const [hours, minutes] = str.split(':');
	return new Date(+baseDate + hours * 60 * 60 * 1000 + minutes * 60 * 1000);
}

function parseDateHours(baseDate, hours) {
	if (hours.closed) return false;
	return [hours.open, hours.close].map((time) => parseTime(baseDate, time));
}

const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const fmtDate = timeFormat('%Y-%m-%d');
export function parseRestaurant({ hours, hourOverrides, menus }) {
	const startDay = timeMonday(new Date());
	const dates = timeDay.range(startDay, timeDay.offset(startDay, 14));
	const combinedHours = dates.map((date) => {
		const dayOfWeek = daysOfWeek[date.getDay()];
		const normalHours = parseDateHours(date, hours[dayOfWeek]);
		const dateFmt = fmtDate(date);
		let specialHours = (hourOverrides || []).find((d) => d.date === dateFmt);
		if (specialHours) specialHours = specialHours ? parseDateHours(date, specialHours) : null;
		return { date, hours: specialHours || normalHours, specialHours, normalHours };
	});
	return { hours: combinedHours, menus };
}
