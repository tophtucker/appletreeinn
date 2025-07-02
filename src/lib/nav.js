export const BOOKING_URL = 'https://direct-book.com/properties/AppleTreeInndirect';
export const RESERVATIONS_URL =
	'https://tables.toasttab.com/restaurants/701827ce-60b2-4de3-a117-eeef40adcbe1/findTime';

const nav = [
	{ pathname: '/', title: 'Home', color: 'var(--black)' },
	{
		pathname: '/',
		title: 'Overview',
		children: [
			{ title: 'Property map', pathname: 'map' },
			{ title: 'Gallery', pathname: '/gallery' },
			{ title: 'FAQ', pathname: 'plan' }
		]
	},
	{
		pathname: '/rooms',
		title: 'Rooms',
		color: 'var(--green)',
		children: [
			{ title: 'Main House', pathname: null },
			{ title: 'Lodge', pathname: null },
			{ title: 'Book a room', url: BOOKING_URL }
		]
	},
	{
		pathname: '/dining',
		title: 'Dining',
		color: 'var(--red)',
		children: [
			// { title: 'Overview', pathname: null },
			{ title: 'The Ostrich Room', pathname: 'ostrich-room' },
			{ title: 'Make a reservation', url: RESERVATIONS_URL }
		]
	},
	{
		pathname: '/music',
		title: 'Live music',
		color: 'var(--blue)'
		// children: [
		// 	{ title: 'Upcoming shows', pathname: null },
		// 	{ title: 'Past shows', pathname: 'past' }
		// ]
	},
	{
		pathname: '/weddings-events',
		title: 'Private events'
	},
	{
		pathname: '/activities',
		title: 'Activities',
		color: 'var(--gold)',
		children: [
			{ title: 'Amenities', pathname: 'amenities' },
			{ title: 'Tanglewood', pathname: 'tanglewood' },
			{ title: 'The Berkshires', pathname: 'berkshires' }
		]
	},
	{
		pathname: '/about',
		title: 'About us',
		color: 'var(--gold)',
		children: [
			{ title: 'Staff', pathname: null },
			// { title: 'Claire', pathname: 'claire' },
			{ title: 'History', pathname: 'history' },
			{ title: 'Press', pathname: null },
			{ title: 'Newsletter', pathname: 'newsletter' }
		]
	},
	{
		pathname: '/footer',
		title: '(Footer)',
		children: [
			{ title: 'Policies', pathname: 'terms-of-service' },
			{ title: 'Jobs', pathname: 'jobs' }
		]
	}
];

export const getCurrentPage = ($page) => {
	const pages = getNav($page).flatMap((section) => section.children || [{ ...section, section }]);
	return pages.find((d) => d.pathname === $page.url.pathname);
};

export const getNav = ($page) => {
	const clone = structuredClone(nav);
	for (const section of clone) {
		section.active = $page.url.pathname === section.pathname;
		if (section.children) {
			for (const page of section.children) {
				page.pathname = page.url
					? null
					: [section.pathname, page.pathname].filter(Boolean).join('/');
				page.active = page.pathname === $page.url.pathname;
				page.section = section;
			}
		}
	}
	return clone;
};
