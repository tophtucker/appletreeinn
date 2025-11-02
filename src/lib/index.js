// place files you want to import through the `$lib` alias in this folder.
// e.g. import { buildings } from '$lib/index.js';
import { Temporal } from '@js-temporal/polyfill';
import { min, max, extent, range, sort, ascending } from 'd3-array';

// Since the hotel is in Eastern Time, we try to show all dates and times around
// the site in Eastern Time, not in the user’s local time
export const TIME_ZONE = 'America/New_York';

// Temporal starts the week with Monday, which it calls day 1
export const daysOfWeek = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
];

// Go from a full ISO UTC datetime string (e.g. 2025-10-09T15:45:00.000Z) to an Eastern Time ZonedDateTime
export const isoParse = (isoUtc) => Temporal.Instant.from(isoUtc).toZonedDateTimeISO(TIME_ZONE);

function upzone(pt) {
	if (pt instanceof Temporal.PlainTime) {
		return Temporal.PlainDate.from('2000-01-01').toPlainDateTime(pt).toZonedDateTime(TIME_ZONE);
	}
	if (pt instanceof Temporal.PlainYearMonth) {
		return pt
			.toPlainDate({ day: 1 })
			.toPlainDateTime({ hour: 0, minute: 0 })
			.toZonedDateTime(TIME_ZONE);
	}
	if (pt instanceof Temporal.PlainDate || pt instanceof Temporal.PlainDateTime) {
		return pt.toZonedDateTime(TIME_ZONE);
	}
	if (pt instanceof Temporal.ZonedDateTime) {
		return pt;
	} else {
		console.error('Couldn’t convert time to ZonedDateTime');
	}
}

export function epochMs(t) {
	return upzone(t).epochMilliseconds;
}

// e.g. “Sun. 9/7”
export function formatDate(zdt) {
	zdt = upzone(zdt);
	return `${formatDay(zdt)} ${formatDateShort(zdt)}`;
}

// e.g. “Sun.”
export function formatDay(zdt) {
	zdt = upzone(zdt);
	return (
		new Intl.DateTimeFormat('en-US', {
			weekday: 'short',
			timeZone: zdt.timeZoneId
		}).format(new Date(zdt.epochMilliseconds)) + '.'
	);
}

// e.g. 1 → “Mon.”, 2 → “Tue.”, … 7 → “Sun.”
export const formatWeekday = (d) => `${daysOfWeek[d - 1].slice(0, 3)}.`;

// e.g. “9/7”
export function formatDateShort(zdt) {
	zdt = upzone(zdt);
	return new Intl.DateTimeFormat('en-US', {
		month: 'numeric',
		day: 'numeric',
		timeZone: zdt.timeZoneId
	}).format(new Date(zdt.epochMilliseconds));
}

// e.g. “September 7”
export function formatMonthDate(zdt) {
	zdt = upzone(zdt);
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		timeZone: zdt.timeZoneId
	}).format(new Date(zdt.epochMilliseconds));
}

// e.g. “September 2025”
export function formatMonthYear(zdt) {
	zdt = upzone(zdt);
	return new Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric',
		timeZone: zdt.timeZoneId
	}).format(new Date(zdt.epochMilliseconds));
}

// e.g. “9” or “9:30”
export function formatTimePart(zdt) {
	zdt = upzone(zdt);
	const hasMinutes = zdt.minute !== 0;
	return new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		...(hasMinutes && { minute: '2-digit' }),
		hour12: true,
		timeZone: zdt.timeZoneId
	})
		.format(new Date(zdt.epochMilliseconds))
		.replace(/\s?(AM|PM)/i, ''); // strip meridiem
}

// e.g. “am”, “pm”
export function formatTimeMeridiem(zdt) {
	zdt = upzone(zdt);
	return new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		hour12: true,
		timeZone: zdt.timeZoneId
	})
		.formatToParts(new Date(zdt.epochMilliseconds))
		.find((p) => p.type === 'dayPeriod')
		.value.toLowerCase();
}

// e.g. "9:30 pm"
export function formatTime(zdt) {
	zdt = upzone(zdt);
	return `${formatTimePart(zdt)} ${formatTimeMeridiem(zdt)}`;
}

// e.g. “—”, “7 – 9 pm”, “10:30 am – 4:45 pm”
export const formatTimeRange = (hours) => {
	if (!hours.length) return '—';
	if (hours.every((hour) => formatTimeMeridiem(hour) === formatTimeMeridiem(hours[0]))) {
		return `${hours.map(formatTimePart).join(' – ')} ${formatTimeMeridiem(hours[0])}`;
	}
	return hours.map(formatTime).join(' – ');
};

// For same calendar day, show time; within 7 days, show weekday; else, month/day
export function formatFutureDate(zdt) {
	const now = Temporal.Now.zonedDateTimeISO(zdt.timeZoneId);
	if (zdt.toPlainDate().equals(now.toPlainDate())) return formatTime(zdt);
	const oneWeekOut = now.add({ days: 7 }).toPlainDate();
	if (Temporal.PlainDate.compare(zdt.toPlainDate(), oneWeekOut) < 0) return formatDay(zdt);
	return formatDateShort(zdt);
}

// formatDayRange takes in an array of day numbers like [0, 1, 2] and returns a range like “Sun. – Tue.”
const modulo = 7;
const isDense = (data) => range(min(data), max(data) + 1).every((d) => data.includes(d));
const mod = (number, modulus) => ((number % modulus) + modulus) % modulus;
const isDenseCyclical = (data) => {
	for (let i = 0; i < modulo; i++) {
		if (isDense(data.map((d) => (d + i) % modulo))) return i;
	}
	return false;
};
export const formatDayRange = (days) => {
	if (!days.length) return '(Closed for renovations)'; // TODO: this language is brittle, specific to renovation; would probably be better to have something like a "restaurant status" higher up
	days = sort(new Set(days.map((d) => d % modulo)), ascending);
	if (days.length === 1) return formatWeekday(days[0]);
	const i = isDenseCyclical(days);
	if (i === false) return days.map(formatWeekday).join(', ');
	if (days.length === 7) return 'Every day';
	const ext = extent(days.map((d) => (d + i) % modulo))
		.map((d) => mod(d - i, modulo))
		.map(formatWeekday);
	return days.length === 2 ? ext.join(' & ') : ext.join(' – ');
};

// https://observablehq.com/d/37b2ab91a954e6bc
export const buildings = [
	{
		id: 'main-house',
		title: 'Main House',
		img: 'heropics/driveway.jpg',
		desc: 'Built in 1885, the three story main house includes a spacious, comfortable living room with fireplace, the Ostrich Room (our bar/dining room with live music most nights), and Baladi (our weekend brunch venue). There are 13 guest rooms on the second and third floors of the main house, all of which are unique. Open year round.',
		building: 'main-house',
		rooms: [
			{
				building: 'main-house',
				floor: 2,
				room_number: '1',
				room_name: 'Dogwood',
				beds: '1 queen',
				sleeps: 2,
				views: true,
				pics: ['main-house/1/_XCS2684.jpg'],
				features: 'Writing desk with three windows in turret',
				caveats: null,
				tags: [
					'1 queen',
					'Sleeps 2',
					'Beautiful views of the hills',
					'Writing desk with three windows in turret'
				]
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '2',
				room_name: 'Orchard',
				beds: '1 king',
				sleeps: 2,
				views: true,
				pics: [
					'main-house/2/_XCS2623.jpg',
					'main-house/2/_XCS2621.jpg',
					'main-house/2/_XCS2624.jpg'
				],
				features: 'Wood-burning fireplace, Balcony with seating, Large room',
				caveats: null,
				tags: [
					'1 king',
					'Sleeps 2',
					'Beautiful views of the hills',
					'Wood-burning fireplace',
					'Balcony with seating',
					'Large room'
				]
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '3',
				room_name: 'Richmond',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				pics: ['main-house/3/_XCS2685.jpg', 'main-house/3/_XCS2686.jpg'],
				features: 'Wood-burning fireplace',
				caveats: null,
				tags: ['1 queen', 'Sleeps 2', 'Wood-burning fireplace']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '4',
				room_name: 'Astalula',
				beds: '1 king',
				sleeps: 2,
				views: null,
				pics: [
					'main-house/4/_XCS2629.jpg',
					'main-house/4/_XCS2628.jpg',
					'main-house/4/_XCS2631.jpg'
				],
				features: 'Wood-burning fireplace, Window seat',
				caveats: null,
				tags: ['1 king', 'Sleeps 2', 'Wood-burning fireplace', 'Window seat']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '5 or 6',
				room_name: 'Woodside',
				beds: '2 double',
				sleeps: 4,
				views: null,
				pics: ['main-house/5-or-6/5/_XCS2662.jpg', 'main-house/5-or-6/6/_XCS2678.jpg'],
				features: null,
				caveats: 'Room 6 obstructed view',
				tags: ['2 double', 'Sleeps 4', 'Room 6 obstructed view']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '7',
				room_name: 'Leighton Rollins',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				overOstrich: true,
				pics: ['main-house/7/_XCS2637.jpg'],
				features: 'Claw foot bathtub, Vintage sink',
				caveats: null,
				tags: ['1 queen', 'Sleeps 2', 'Claw foot bathtub', 'Vintage sink']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '8',
				room_name: 'Bristed Suite',
				beds: '1 king, 1 pull-out',
				sleeps: 4,
				views: true,
				overOstrich: true,
				pics: [
					'main-house/8/_XCS2672.jpg',
					'main-house/8/_XCS2666.jpg',
					'main-house/8/_XCS2668.jpg',
					'main-house/8/_XCS2669.jpg'
				],
				features: 'Wood-burning fireplace, Living room',
				caveats: null,
				tags: [
					'1 king, 1 pull-out',
					'Sleeps 4',
					'Beautiful views of the hills',
					'Wood-burning fireplace',
					'Living room'
				]
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '9',
				room_name: 'Shadowbrook',
				beds: '1 queen',
				sleeps: 2,
				views: true,
				overOstrich: true,
				pics: ['main-house/9/_XCS2640.jpg', 'main-house/9/_XCS2641.jpg'],
				features: null,
				caveats: null,
				tags: ['1 queen', 'Sleeps 2', 'Beautiful views of the hills']
			},
			{
				building: 'main-house',
				floor: 3,
				room_number: '10',
				room_name: 'Alice’s',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				pics: ['main-house/10/_XCS2642.jpg'],
				features: null,
				caveats:
					'Low ceilings, Steep staircase to 3rd floor, No in-room bathroom; private bathroom in hallway with separate key',
				tags: [
					'1 queen',
					'Sleeps 2',
					'Low ceilings',
					'Steep staircase to 3rd floor',
					'No in-room bathroom; private bathroom in hallway with separate key'
				]
			},
			{
				building: 'main-house',
				floor: 3,
				room_number: '11–12',
				room_name: 'Arlo’s Suite',
				beds: '1 queen, 2 double',
				sleeps: 6,
				views: null,
				pics: [
					'main-house/11-12/_XCS2649.jpg',
					'main-house/11-12/_XCS2643.jpg',
					'main-house/11-12/_XCS2647.jpg',
					'main-house/11-12/_XCS2650.jpg'
				],
				features: 'Living room',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				tags: [
					'1 queen, 2 double',
					'Sleeps 6',
					'Living room',
					'Low ceilings',
					'Steep staircase to 3rd floor'
				]
			},
			{
				building: 'main-house',
				floor: 3,
				room_number: '14',
				room_name: 'Avaloch Suite',
				beds: '1 king, 2 small pull-outs',
				sleeps: 4,
				views: true,
				pics: ['main-house/14/_XCS2680.jpg', 'main-house/14/_XCS2679.jpg'],
				features: 'Living room',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				tags: [
					'1 king, 2 small pull-outs',
					'Sleeps 4',
					'Beautiful views of the hills',
					'Living room',
					'Low ceilings',
					'Steep staircase to 3rd floor'
				]
			},
			{
				building: 'main-house',
				floor: 3,
				room_number: '15',
				room_name: 'Cecile’s',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				pics: ['main-house/15/_XCS2683.jpg'],
				features: null,
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				tags: ['1 queen', 'Sleeps 2', 'Low ceilings', 'Steep staircase to 3rd floor']
			}
		]
	},
	{
		id: 'lodge',
		title: 'Lodge',
		img: 'heropics/summer-annex.jpg',
		desc: 'Built in 1966, the motel-style lodge has four standard room types, facing either the woods (basically no view) or mountains (beautiful view). It’s located between the main house and the pool, a three-minute walk from each. There are 21 guest rooms on the first and second floors. Open from May to October.',
		building: 'lodge',
		rooms: [
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: 'Queen Scenic View',
				beds: '1 queen',
				sleeps: 2,
				views: true,
				pics: ['lodge/queen-scenic-view/_XCS2772.jpg', 'lodge/queen-scenic-view/3.jpg'],
				features: null,
				caveats: null,
				tags: ['1 queen', 'Sleeps 2', 'Beautiful views of the hills']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: '2 Double Scenic View',
				beds: '2 double',
				sleeps: 4,
				views: true,
				pics: ['lodge/2-double-scenic-view/_XCS2782.jpg', 'lodge/2-double-scenic-view/2.jpg'],
				features: null,
				caveats: null,
				tags: ['2 double', 'Sleeps 4', 'Beautiful views of the hills']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: 'Queen',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				pics: ['lodge/queen/_XCS2800.jpg', 'lodge/queen/2.jpg'],
				features: null,
				caveats: null,
				tags: ['1 queen', 'Sleeps 2']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: '2 Double',
				beds: '2 double',
				sleeps: 4,
				views: null,
				pics: ['lodge/2-double/_XCS2794.jpg', 'lodge/2-double/2.jpg'],
				features: null,
				caveats: null,
				tags: ['2 double', 'Sleeps 4']
			}
		]
	}
];
