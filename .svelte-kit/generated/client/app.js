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
	() => import('./nodes/32')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/about/about-us": [3],
		"/about/claire": [4],
		"/about/history": [5],
		"/about/jobs": [6],
		"/about/newsletter": [7],
		"/about/policies": [8],
		"/about/scrapbook": [9],
		"/activities": [10],
		"/activities/amenities": [11],
		"/activities/berkshires": [12],
		"/activities/tanglewood": [13],
		"/baladi": [~14],
		"/career": [~15],
		"/dining_ati/[...catchall]": [~18],
		"/dining": [16],
		"/dining/ostrich-room": [17],
		"/explore": [~19],
		"/landing/review": [20],
		"/music": [~21],
		"/offers": [~22],
		"/ostrich-room": [~23],
		"/overview/faq": [24],
		"/overview/gallery": [25],
		"/overview/map": [26],
		"/restaurants": [~27],
		"/rooms": [28],
		"/rooms/lodge": [29],
		"/rooms/main-house": [30],
		"/termsandcondition": [~31],
		"/weddings-events": [32]
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