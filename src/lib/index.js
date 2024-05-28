// place files you want to import through the `$lib` alias in this folder.
export const buildings = [
	{
		id: 'main-house',
		title: 'Main House',
		rooms: [
			{
				number: 'Room 1',
				name: 'Orchard',
				floor: 2,
				tags: ["Queen bed", "Pull-out full bed", "Working fireplace"],
				desc: `Located on the second floor of our 1885 main house, the centerpieces of this room are a charming working fireplace and a spacious balcony with seating for reading, sipping coffee, and watching the sunset. A romantic wrought iron bed features high-thread-count Frette linens, while an indoor seating area includes an expandable full bed for additional guests. Enjoy views of the woods and sink into a deep reading chair for full relaxation, or tackle a creative project at the included desk. A full bath is outfitted with our luxe Beekman 1802 bath amenities.`
			},
			{
				number: 'Room 2',
				name: 'Astalula',
				floor: 2,
				tags: ["King bed", "Working fireplace"],
				desc: `One of our most luxe rooms, Astalula includes charming details original to the 1885 Victorian mansion, including an intimate daybed tucked into a French window alcove, surrounded by lush trees and a built-in wood-burning fireplace. Spread out in the plush king bed featuring Frette linens, nap in the chaise lounge, and soak in the full bath using our signature Beekman 1802 amenities.`
			},
			{
				number: 'Room 3',
				name: 'Bristed Suite',
				floor: 2,
				tags: ["King bed", "Pull-out full bed", "Working fireplace"],
				desc: `Make a grand entrance to this massive suite on the second floor of our Victorian mansion. This spacious king suite offers a taste of historic elegance with modern amenities like Frette linens and Beekman 1802 bath products. A brass king bed, fully separate living room with a pull-out couch, writing desk, and wood-burning fireplace will make you never want to leave this creative haven. An included table seats four for shared dinner, and wide windows open to expansive views of the rolling hills.`
			}
		],
		img: 'heropics/main-house.jpg',
		desc: `Built in 1885, the three-story main house includes our front desk, breakfast room, and weekend tavern. Every room is unique.`
	},
	{
		id: 'summer-annex',
		title: 'Summer Annex',
		rooms: [
			{
				name: 'Queen',
				tags: ["Queen bed"],
				desc: `Ideal for a solo getaway or a romantic couples weekend, this room includes a plush queen bed dressed in Frette linens and space to spread out. Read a book by the window with views of the forest, or sit down to work at the full size writing desk. In the bathroom you’ll find a shower with an included tub, outfitted with 1802 bath amenities.`
			},
			{
				name: 'Two Double',
				tags: ["2 double beds"],
				desc: `Richly textured and warmly designed, this Lodge room features two double beds and is a great choice for a weekend trip to reconnect with a friend, or a convenient setting for a family getaway. A spacious bathroom offers a full bath, and amenities include our signature Beekman 1802 bath products and silky Frette sateen sheets.`
			},
			{
				name: 'Queen, Mountain View',
				tags: ["Queen bed"],
				desc: `A favorite for couples getaways or some indulgent solo time, this Lodge queen features expansive windows with views of the rustling trees and a soaring mountain backdrop. Sink into our soft Frette linens and soak in the full bath using our signature Beekman 1802 amenities.`
			},
			{
				name: 'Two Double, Mountain View',
				tags: ["2 double beds"],
				desc: `Located on both the first and second floors of our Lodge, these rooms offer large windows and sprawling views of our rolling lawns and the treetops beyond. In addition to the stunning sights, each room includes two double beds outfitted in our high-thread-count Frette linens and a full bath including Beekman 1802 amenities. A great choice for friends and families alike.`
			}
		],
		img: 'heropics/summer-annex.jpg',
		desc: `Open from Memorial Day to Labor Day, the summer annex has four standard room types. It’s located by the pool, a three-minute walk from the main house.`
	}
];
