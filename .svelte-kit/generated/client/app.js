import * as universal_hooks from '../../../src/hooks.js';

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
	() => import('./nodes/36'),
	() => import('./nodes/37')
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
		"/dining_ati/[...catchall]": [~22],
		"/dining": [19],
		"/dining/breakfast": [20],
		"/dining/ostrich-room": [~21],
		"/explore": [~23],
		"/landing/kripalu": [24],
		"/landing/review": [25],
		"/music": [~26],
		"/offers": [~27],
		"/ostrich-room": [~28],
		"/overview/faq": [29],
		"/overview/gallery": [30],
		"/overview/map": [31],
		"/restaurants": [~32],
		"/rooms": [33],
		"/rooms/lodge": [34],
		"/rooms/main-house": [35],
		"/termsandcondition": [~36],
		"/weddings-events": [37]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: universal_hooks.reroute || (() => {}),
	transport: universal_hooks.transport || {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';