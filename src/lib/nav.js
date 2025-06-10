import { ostrichRoom } from '$lib/index.js';

export const BOOKING_URL = 'https://direct-book.com/properties/AppleTreeInndirect';

const nav = [
	{
		pathname: '/rooms',
		title: 'Stay',
		color: 'var(--green)',
		icon: 'Doorknob',
		children: [
			{ title: 'Rooms', pathname: null },
			{ title: 'Things to do', pathname: 'things-to-do' }
		]
	},
	{
		pathname: '/ostrich-room',
		title: 'The Ostrich Room',
		color: 'var(--red)',
		icon: 'Pentathing',
		hours: ostrichRoom
	},
	{
		pathname: '/weddings-events',
		title: 'Private events',
		color: 'var(--blue)',
		icon: 'Pane'
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
	},
	{ pathname: '/', title: 'Home', color: 'var(--black)' }
];

export const getCurrentPage = ($page) => {
	const pages = getNav($page).flatMap((section) => section.children || [{ ...section, section }]);
	return pages.find((d) => d.pathname === $page.url.pathname);
};

export const getNav = ($page) => {
	const clone = structuredClone(nav);
	for (const section of clone) {
		section.active = $page.url.pathname.startsWith(section.pathname);
		if (section.children) {
			for (const page of section.children) {
				page.pathname = [section.pathname, page.pathname].filter(Boolean).join('/');
				page.active = page.pathname === $page.url.pathname;
				page.section = section;
			}
		}
	}
	return clone;
};
