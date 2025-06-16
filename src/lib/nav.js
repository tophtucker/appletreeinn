import { ostrichRoom } from '$lib/index.js';

export const BOOKING_URL = 'https://direct-book.com/properties/AppleTreeInndirect';

export const RESERVATIONS_URL =
	'https://tables.toasttab.com/restaurants/701827ce-60b2-4de3-a117-eeef40adcbe1/findTime';

const nav = [
	{ pathname: '/', title: 'Home', color: 'var(--black)' },
	{
		pathname: '/rooms',
		title: 'Lodging',
		color: 'var(--green)',
		icon: 'Doorknob',
		children: [
			{ title: 'Main House', pathname: null },
			{ title: 'The Lodge', pathname: 'things-to-do' },
			{ title: 'Amenities', pathname: 'amenities' },
			{ title: 'Book now', url: BOOKING_URL }
		]
	},
	{
		pathname: '/ostrich-room',
		title: 'Dining',
		color: 'var(--red)',
		icon: 'Pentathing',
		hours: ostrichRoom,
		children: [
			{ title: 'Cocktails', pathname: 'cocktails' },
			{ title: 'Make a reservation', url: RESERVATIONS_URL }
		]
	},
	{
		pathname: '/weddings-events',
		title: 'Live music',
		color: 'var(--blue)',
		icon: 'Pane'
	},
	{
		pathname: '/weddings-events',
		title: 'Private events'
	},
	{
		pathname: '/explore',
		title: 'Explore',
		color: 'var(--gold)',
		icon: 'Door',
		children: [
			{ title: 'Gallery', pathname: 'gallery' },
			{ title: 'Map', pathname: 'map' },
			{ title: 'Things to do', pathname: 'things-to-do' }
		]
	},
	{
		pathname: '/about',
		title: 'About',
		color: 'var(--gold)',
		icon: 'Door',
		children: [
			{ title: 'Staff', pathname: null },
			{ title: 'Claire', pathname: 'claire' },
			{ title: 'History', pathname: 'history' },
			{ title: 'Newsletter', pathname: 'newsletter' }
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
