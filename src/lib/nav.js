export const BOOKING_URL = 'https://direct-book.com/properties/AppleTreeInndirect';
export const RESERVATIONS_URL =
	'https://tables.toasttab.com/restaurants/701827ce-60b2-4de3-a117-eeef40adcbe1/findTime';

const nav = [
	{
		slug: 'overview',
		title: 'Overview',
		children: [
			{ title: 'Property map', slug: 'map' },
			{ title: 'Gallery', slug: 'gallery' },
			{ title: 'FAQ', slug: 'faq' }
		]
	},
	{
		slug: 'rooms',
		title: 'Rooms',
		color: 'var(--green)',
		children: [
			{ title: 'Main House', slug: 'main-house' },
			{ title: 'Lodge', slug: 'lodge' },
			{ title: 'Book a room', url: BOOKING_URL }
		]
	},
	{
		slug: 'dining',
		title: 'Dining',
		color: 'var(--red)',
		children: [
			{ title: 'The Ostrich Room', slug: 'ostrich-room' },
			{ title: 'Make a reservation', url: RESERVATIONS_URL }
		]
	},
	{
		slug: 'music',
		title: 'Live music',
		color: 'var(--blue)'
	},
	{
		slug: 'weddings-events',
		title: 'Private events'
	},
	{
		slug: 'activities',
		title: 'Activities',
		color: 'var(--gold)',
		children: [
			{ title: 'Amenities', slug: 'amenities' },
			{ title: 'Tanglewood', slug: 'tanglewood' },
			{ title: 'The Berkshires', slug: 'berkshires' }
		]
	},
	{
		slug: 'about',
		title: 'About us',
		color: 'var(--gold)',
		footer: true,
		children: [
			{ title: 'Staff', slug: 'staff' },
			{ title: 'History', slug: 'history' },
			{ title: 'Press', slug: 'press' },
			{ title: 'Newsletter', slug: 'newsletter' }
		]
	},
	{
		slug: 'other',
		title: 'Other',
		footer: true,
		children: [
			{ title: 'Policies', slug: 'policies' },
			{ title: 'Jobs', slug: 'jobs' }
		]
	}
];

export const getCurrentPage = ($page) => {
	const pages = getNav($page).flatMap((section) => [
		...(section.children || []),
		{ ...section, section }
	]);
	return pages.find((d) => d.pathname === $page.url.pathname);
};

export const getNav = ($page) => {
	const clone = structuredClone(nav);
	for (const section of clone) {
		if (section.slug === 'overview') {
			// The “overview” section homepage is just the overall homepage
			section.pathname = '/';
			section.active =
				$page.url.pathname === '/' || $page.url.pathname.split('/')[0] === section.slug;
		} else {
			section.pathname = `/${section.slug}`;
			section.active = $page.url.pathname.split('/')[1] === section.slug;
			console.log($page.url.pathname.split('/'), section.slug);
		}
		if (section.children) {
			for (const page of section.children) {
				if (page.slug) {
					page.pathname = '/' + [section.slug, page.slug].join('/');
				}
				page.active = page.pathname === $page.url.pathname;
				page.section = section;
			}
		}
	}
	return clone;
};
