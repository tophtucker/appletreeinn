export const BOOKING_URL = 'https://direct-book.com/properties/AppleTreeInndirect';
export const RESERVATIONS_URL =
	'https://tables.toasttab.com/restaurants/701827ce-60b2-4de3-a117-eeef40adcbe1/findTime';

const nav = [
	{ pathname: '/', title: 'Home', color: 'var(--black)' },
	{
		pathname: '/rooms',
		title: 'Lodging',
		color: 'var(--green)',
		children: [
			{ title: 'Rooms', pathname: null },
			{ title: 'The property', pathname: 'property' },
			{ title: 'The area', pathname: 'area' },
			{ title: 'Book now', url: BOOKING_URL }
		]
	},
	{
		pathname: '/ostrich-room',
		title: 'Dining',
		color: 'var(--red)',
		children: [
			{ title: 'The Ostrich Room', pathname: null },
			{ title: 'Make a reservation', url: RESERVATIONS_URL }
		]
	},
	{
		pathname: '/music',
		title: 'Live music',
		color: 'var(--blue)'
	},
	{
		pathname: '/weddings-events',
		title: 'Private events'
	},
	{
		pathname: '/gallery',
		title: 'Gallery',
		color: 'var(--gold)'
	},
	{
		pathname: '/map',
		title: 'Map',
		color: 'var(--gold)'
	},
	{
		pathname: '/about',
		title: 'About',
		color: 'var(--gold)',
		children: [
			{ title: 'Staff', pathname: null },
			{ title: 'Claire', pathname: 'claire' },
			{ title: 'History', pathname: 'history' },
			{ title: 'Newsletter', pathname: 'newsletter' },
			{ title: 'Terms of service', pathname: 'terms-of-service' }
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
