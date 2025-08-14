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
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/about-us/[...catchall]": [~12],
		"/about": [~3],
		"/about/about-us": [4],
		"/about/claire": [5],
		"/about/history": [6],
		"/about/jobs": [7],
		"/about/newsletter": [8],
		"/about/policies": [9],
		"/about/press": [10],
		"/about/scrapbook": [11],
		"/activities": [13],
		"/activities/amenities": [14],
		"/activities/berkshires": [15],
		"/activities/tanglewood": [16],
		"/baladi": [~17],
		"/career": [~18],
		"/dining_ati/[...catchall]": [~21],
		"/dining": [19],
		"/dining/ostrich-room": [~20],
		"/explore": [~22],
		"/landing/kripalu": [23],
		"/landing/review": [24],
		"/music": [~25],
		"/offers": [~26],
		"/ostrich-room": [~27],
		"/overview/faq": [28],
		"/overview/gallery": [29],
		"/overview/map": [30],
		"/restaurants": [~31],
		"/rooms": [32],
		"/rooms/lodge": [33],
		"/rooms/main-house": [34],
		"/termsandcondition": [~35],
		"/weddings-events": [36]
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