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
	() => import('./nodes/33'),
	() => import('./nodes/34')
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
		"/about/press": [10],
		"/about/scrapbook": [11],
		"/activities": [12],
		"/activities/amenities": [13],
		"/activities/berkshires": [14],
		"/activities/tanglewood": [15],
		"/baladi": [~16],
		"/career": [~17],
		"/dining_ati/[...catchall]": [~20],
		"/dining": [18],
		"/dining/ostrich-room": [~19],
		"/explore": [~21],
		"/landing/review": [22],
		"/music": [~23],
		"/offers": [~24],
		"/ostrich-room": [~25],
		"/overview/faq": [26],
		"/overview/gallery": [27],
		"/overview/map": [28],
		"/restaurants": [~29],
		"/rooms": [30],
		"/rooms/lodge": [31],
		"/rooms/main-house": [32],
		"/termsandcondition": [~33],
		"/weddings-events": [34]
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