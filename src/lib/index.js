// place files you want to import through the `$lib` alias in this folder.

// https://observablehq.com/d/37b2ab91a954e6bc
export const buildings = [
	{
		id: 'main-house',
		title: 'Main House',
		img: 'heropics/main-house.jpg',
		desc: 'Built in 1885, the three-story main house includes our front desk, breakfast room, and weekend tavern. Every room is unique.',
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
				features: 'Writing desk with three windows in turret',
				caveats: '',
				pics: ['main-house/1/_XCS2684.jpg'],
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
				features: 'Working wood-burning fireplace, Balcony with seating, Large room',
				caveats: '',
				pics: [
					'main-house/2/_XCS2621.jpg',
					'main-house/2/_XCS2623.jpg',
					'main-house/2/_XCS2624.jpg'
				],
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
				views: null,
				features: 'Working wood-burning fireplace',
				caveats: '',
				pics: ['main-house/3/_XCS2685.jpg', 'main-house/3/_XCS2686.jpg'],
				tags: ['1 queen', 'Sleeps 2', 'Working wood-burning fireplace']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '4',
				room_name: 'Astalula',
				beds: '1 king',
				sleeps: 2,
				views: null,
				features: 'Working wood-burning fireplace, Window seat',
				caveats: '',
				pics: [
					'main-house/4/_XCS2628.jpg',
					'main-house/4/_XCS2629.jpg',
					'main-house/4/_XCS2631.jpg'
				],
				tags: ['1 king', 'Sleeps 2', 'Working wood-burning fireplace', 'Window seat']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '5 or 6',
				room_name: 'Woodside',
				beds: '2 double',
				sleeps: 4,
				views: null,
				features: '',
				caveats: 'Room 6 obstructed view',
				pics: ['main-house/5-or-6/5/_XCS2662.jpg', 'main-house/5-or-6/6/_XCS2678.jpg'],
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
				features: 'Claw foot bathtub, Vintage sink',
				caveats: '',
				pics: ['main-house/7/_XCS2637.jpg'],
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
				features: 'Working wood-burning fireplace, Living room',
				caveats: '',
				pics: [
					'main-house/8/_XCS2666.jpg',
					'main-house/8/_XCS2668.jpg',
					'main-house/8/_XCS2669.jpg',
					'main-house/8/_XCS2672.jpg'
				],
				tags: [
					'1 king, 1 pull-out',
					'Sleeps 4',
					'Beautiful views of the hills',
					'Working wood-burning fireplace',
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
				features: '',
				caveats: '',
				pics: ['main-house/9/_XCS2640.jpg', 'main-house/9/_XCS2641.jpg'],
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
				features: '',
				caveats:
					'Low ceilings, Steep staircase to 3rd floor, No in-room bathroom; private bathroom in hallway with separate key',
				pics: ['main-house/10/_XCS2642.jpg'],
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
				features: 'Living room',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				pics: [
					'main-house/11-12/_XCS2643.jpg',
					'main-house/11-12/_XCS2647.jpg',
					'main-house/11-12/_XCS2649.jpg',
					'main-house/11-12/_XCS2650.jpg'
				],
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
				features: 'Living room',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				pics: ['main-house/14/_XCS2679.jpg', 'main-house/14/_XCS2680.jpg'],
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
				features: '',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				pics: ['main-house/15/_XCS2683.jpg'],
				tags: ['1 queen', 'Sleeps 2', 'Low ceilings', 'Steep staircase to 3rd floor']
			}
		]
	},
	{
		id: 'lodge',
		title: 'Lodge',
		img: 'heropics/summer-annex.jpg',
		desc: 'Open from Memorial Day to Labor Day, the lodge has four standard room types. Simpler, quieter, newer rooms. It’s located by the pool, a three-minute walk from the main house.',
		building: 'lodge',
		rooms: [
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: 'Queen Woods View',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				features: '',
				caveats: '',
				pics: ['lodge/queen-woods-view/1.jpg', 'lodge/queen-woods-view/2.jpg'],
				tags: ['1 queen', 'Sleeps 2']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: '2 Double Woods View',
				beds: '2 double',
				sleeps: 4,
				views: null,
				features: '',
				caveats: '',
				pics: [
					'lodge/2-double-woods-view/1.jpg',
					'lodge/2-double-woods-view/2.jpg',
					'lodge/2-double-woods-view/3.jpg'
				],
				tags: ['2 double', 'Sleeps 4']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: 'Queen Mountain View',
				beds: '1 queen',
				sleeps: 2,
				views: true,
				features: '',
				caveats: '',
				pics: [
					'lodge/queen-mountain-view/1.jpg',
					'lodge/queen-mountain-view/2.jpg',
					'lodge/queen-mountain-view/3.jpg'
				],
				tags: ['1 queen', 'Sleeps 2', 'Beautiful views of the hills']
			},
			{
				building: 'lodge',
				floor: null,
				room_number: null,
				room_name: '2 Double Mountain View',
				beds: '2 double',
				sleeps: 4,
				views: true,
				features: '',
				caveats: '',
				pics: ['lodge/2-double-mountain-view/1.jpg', 'lodge/2-double-mountain-view/2.jpg'],
				tags: ['2 double', 'Sleeps 4', 'Beautiful views of the hills']
			}
		]
	}
];
