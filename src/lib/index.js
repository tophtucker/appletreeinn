// place files you want to import through the `$lib` alias in this folder.

// https://observablehq.com/d/37b2ab91a954e6bc
export const buildings = [
	{
		id: 'summer-annex',
		title: 'Summer Annex',
		img: 'heropics/summer-annex.jpg',
		desc: 'Open from Memorial Day to Labor Day, the summer annex has four standard room types. It’s located by the pool, a three-minute walk from the main house.',
		building: 'summer-annex',
		rooms: [
			{
				building: 'summer-annex',
				floor: null,
				room_number: null,
				room_name: 'Queen Woods View',
				beds: '1 queen',
				sleeps: 2,
				views: null,
				features: '',
				caveats: '',
				'thing at foot of bed': null,
				tags: ['1 queen', 'Sleeps 2']
			},
			{
				building: 'summer-annex',
				floor: null,
				room_number: null,
				room_name: '2 Double Woods View',
				beds: '2 double',
				sleeps: 4,
				views: null,
				features: '',
				caveats: '',
				'thing at foot of bed': null,
				tags: ['2 double', 'Sleeps 4']
			},
			{
				building: 'summer-annex',
				floor: null,
				room_number: null,
				room_name: 'Queen Mountain View',
				beds: '1 queen',
				sleeps: 2,
				views: true,
				features: '',
				caveats: '',
				'thing at foot of bed': null,
				tags: ['1 queen', 'Sleeps 2', 'Beautiful views of the hills']
			},
			{
				building: 'summer-annex',
				floor: null,
				room_number: null,
				room_name: '2 Double Mountain View',
				beds: '2 double',
				sleeps: 4,
				views: true,
				features: '',
				caveats: '',
				'thing at foot of bed': null,
				tags: ['2 double', 'Sleeps 4', 'Beautiful views of the hills']
			}
		]
	},
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
				'thing at foot of bed': true,
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
				'thing at foot of bed': false,
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
				'thing at foot of bed': true,
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
				features: 'Working wood-burning fireplace',
				caveats: '',
				'thing at foot of bed': false,
				tags: ['1 king', 'Sleeps 2', 'Working wood-burning fireplace']
			},
			{
				building: 'main-house',
				floor: 2,
				room_number: '5, 6',
				room_name: 'Woodside',
				beds: '2 double',
				sleeps: 4,
				views: null,
				features: '',
				caveats: 'Room 6 obstructed view',
				'thing at foot of bed': null,
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
				'thing at foot of bed': null,
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
				'thing at foot of bed': null,
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
				'thing at foot of bed': null,
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
				'thing at foot of bed': null,
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
				room_number: '12',
				room_name: 'Arlo’s Suite',
				beds: '1 queen, 2 double',
				sleeps: 6,
				views: null,
				features: 'Living room',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				'thing at foot of bed': null,
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
				beds: '1 king, 1 pull-out',
				sleeps: 4,
				views: true,
				features: 'Living room',
				caveats: 'Low ceilings, Steep staircase to 3rd floor',
				'thing at foot of bed': null,
				tags: [
					'1 king, 1 pull-out',
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
				'thing at foot of bed': null,
				tags: ['1 queen', 'Sleeps 2', 'Low ceilings', 'Steep staircase to 3rd floor']
			}
		]
	}
];
