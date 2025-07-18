export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/about": [~3],
		"/about/about-us": [4],
		"/about/claire": [5],
		"/about/history": [6],
		"/about/jobs": [7],
		"/about/newsletter": [8],
		"/about/policies": [9],
		"/about/scrapbook": [10],
		"/activities": [11],
		"/activities/amenities": [12],
		"/activities/berkshires": [13],
		"/activities/tanglewood": [14],
		"/baladi": [~15],
		"/career": [~16],
		"/dining_ati/[...catchall]": [~19],
		"/dining": [17],
		"/dining/ostrich-room": [~18],
		"/explore": [~20],
		"/landing/review": [21],
		"/music": [~22],
		"/offers": [~23],
		"/ostrich-room": [~24],
		"/overview/faq": [25],
		"/overview/gallery": [26],
		"/overview/map": [27],
		"/restaurants": [~28],
		"/rooms": [29],
		"/rooms/lodge": [30],
		"/rooms/main-house": [31],
		"/termsandcondition": [~32],
		"/weddings-events": [33]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';