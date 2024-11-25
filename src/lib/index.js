// place files you want to import through the `$lib` alias in this folder.
// e.g. import { buildings } from '$lib/index.js';
import { csvParse } from 'd3-dsv';

export const ostrichRoom = {
	hours: [
		[3, [17, 21]],
		[4, [17, 21]],
		[5, [17, 22]],
		[6, [17, 23]]
	],
	closures: [new Date(2024, 10, 27), new Date(2024, 10, 28), new Date(2024, 11, 25)]
};

export const baladi = {
	hours: [
		[6, [9, 14]],
		[0, [9, 14]]
	],
	closures: [
		// new Date(2024, 8, 4),
	]
};

export async function loadEvents() {
	let sheet;
	try {
		sheet = await (
			await fetch(
				'https://docs.google.com/spreadsheets/d/1BWPT2mLSwruoWHLiNzuOCT1flhFPk4aoa4KbGaN_c-Y/export?format=csv&gid=287995536'
			)
		).text();
	} catch (err) {
		console.error(err);
		return null;
	}
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1); // todo: more robust
	const data = csvParse(sheet).map((d) => ({
		date: new Date(d.date),
		description: d.description || 'TBD'
	}));
	return { past: data.filter((d) => d.date < today), future: data.filter((d) => d.date >= today) };
}

export const formatDate = (date) =>
	new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		month: 'numeric',
		day: 'numeric',
		timeZone: 'utc'
	}).format(date);

// https://observablehq.com/d/37b2ab91a954e6bc
export const buildings = [
	{
		id: 'main-house',
		title: 'Main House',
		img: 'heropics/main-house.jpg',
		desc: 'Built in 1885, the three-story main house includes our front desk, Baladi, and the Ostrich Room. Every room is unique. Guest rooms are on the second and third floor, and there is no elevator.',
		building: 'main-house',
		rooms: [
			{
				building: 'main-house',
				floor: 2,
				room_number: '1',
				room_name: 'Dogwood',
				beds: '1 queen',
				sleeps: 2,
				pics: ['main-house/1/_XCS2684.jpg'],
				views: true,
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
				pics: [
					'main-house/2/_XCS2623.jpg',
					'main-house/2/_XCS2621.jpg',
					'main-house/2/_XCS2624.jpg'
				],
				views: true,
				features: 'Working wood-burning fireplace, Balcony with seating, Large room',
				caveats: null,
				tags: [
					'1 king',
					'Sleeps 2',
					'Beautiful views of the hills',
					'Working wood-burning fireplace',
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
				pics: ['main-house/3/_XCS2685.jpg', 'main-house/3/_XCS2686.jpg'],
				views: null,
				features: 'Working wood-burning fireplace',
				caveats: null,
				tags: ['1 queen', 'Sleeps 2', 'Working wood-burning fireplace']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '4',
				room_name: 'Astalula',
				beds: '1 king',
				sleeps: 2,
				pics: [
					'main-house/4/_XCS2629.jpg',
					'main-house/4/_XCS2628.jpg',
					'main-house/4/_XCS2631.jpg'
				],
				views: null,
				features: 'Working wood-burning fireplace, Window seat',
				caveats: null,
				tags: ['1 king', 'Sleeps 2', 'Working wood-burning fireplace', 'Window seat']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '5 or 6',
				room_name: 'Woodside',
				beds: '2 double',
				sleeps: 4,
				pics: ['main-house/5-or-6/5/_XCS2662.jpg', 'main-house/5-or-6/6/_XCS2678.jpg'],
				views: null,
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
				pics: ['main-house/7/_XCS2637.jpg'],
				views: null,
				features: 'Claw foot bathtub, Vintage sink',
				caveats: 'Noise from Ostrich Room & live music below',
				tags: [
					'1 queen',
					'Sleeps 2',
					'Claw foot bathtub',
					'Vintage sink',
					'Noise from Ostrich Room & live music below'
				]
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '8',
				room_name: 'Bristed Suite',
				beds: '1 king, 1 pull-out',
				sleeps: 4,
				pics: [
					'main-house/8/_XCS2672.jpg',
					'main-house/8/_XCS2666.jpg',
					'main-house/8/_XCS2668.jpg',
					'main-house/8/_XCS2669.jpg'
				],
				views: true,
				features: 'Working wood-burning fireplace, Living room',
				caveats: 'Noise from Ostrich Room & live music below',
				tags: [
					'1 king, 1 pull-out',
					'Sleeps 4',
					'Beautiful views of the hills',
					'Working wood-burning fireplace',
					'Living room',
					'Noise from Ostrich Room & live music below'
				]
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '9',
				room_name: 'Shadowbrook',
				beds: '1 queen',
				sleeps: 2,
				pics: ['main-house/9/_XCS2640.jpg', 'main-house/9/_XCS2641.jpg'],
				views: true,
				features: null,
				caveats: 'Noise from Ostrich Room & live music below',
				tags: [
					'1 queen',
					'Sleeps 2',
					'Beautiful views of the hills',
					'Noise from Ostrich Room & live music below'
				]
			},
			{
				building: 'main-house',
				floor: 3,
				room_number: '10',
				room_name: 'Alice’s',
				beds: '1 queen',
				sleeps: 2,
				pics: ['main-house/10/_XCS2642.jpg'],
				views: null,
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
				pics: [
					'main-house/11-12/_XCS2649.jpg',
					'main-house/11-12/_XCS2643.jpg',
					'main-house/11-12/_XCS2647.jpg',
					'main-house/11-12/_XCS2650.jpg'
				],
				views: null,
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
				pics: ['main-house/14/_XCS2680.jpg', 'main-house/14/_XCS2679.jpg'],
				views: true,
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
				pics: ['main-house/15/_XCS2683.jpg'],
				views: null,
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
		desc: 'The motel-style lodge has four standard room types, facing either the woods (basically no view) or mountains (beautiful view). It’s located between the main house and the pool, a three-minute walk from each. Guest rooms are on the first and second floor, and there is no elevator.',
		building: 'lodge',
		rooms: [
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: 'Queen Woods View',
				beds: '1 queen',
				sleeps: 2,
				pics: ['lodge/queen-woods-view/_XCS2800.jpg', 'lodge/queen-woods-view/2.jpg'],
				views: null,
				features: null,
				caveats: null,
				tags: ['1 queen', 'Sleeps 2']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: '2 Double Woods View',
				beds: '2 double',
				sleeps: 4,
				pics: ['lodge/2-double-woods-view/_XCS2794.jpg', 'lodge/2-double-woods-view/2.jpg'],
				views: null,
				features: null,
				caveats: null,
				tags: ['2 double', 'Sleeps 4']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: 'Queen Mountain View',
				beds: '1 queen',
				sleeps: 2,
				pics: ['lodge/queen-mountain-view/_XCS2772.jpg', 'lodge/queen-mountain-view/3.jpg'],
				views: true,
				features: null,
				caveats: null,
				tags: ['1 queen', 'Sleeps 2', 'Beautiful views of the hills']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: '2 Double Mountain View',
				beds: '2 double',
				sleeps: 4,
				pics: ['lodge/2-double-mountain-view/_XCS2782.jpg', 'lodge/2-double-mountain-view/2.jpg'],
				views: true,
				features: null,
				caveats: null,
				tags: ['2 double', 'Sleeps 4', 'Beautiful views of the hills']
			}
		]
	}
];
