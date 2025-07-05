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

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/activities": [3],
		"/activities/amenities": [4],
		"/activities/berkshires": [5],
		"/activities/tanglewood": [6],
		"/baladi": [~7],
		"/career": [~8],
		"/dining_ati/[...catchall]": [~11],
		"/dining": [9],
		"/dining/ostrich-room": [10],
		"/explore": [~12],
		"/landing/review": [13],
		"/music": [~14],
		"/offers": [~15],
		"/ostrich-room": [~16],
		"/other": [17],
		"/other/claire": [18],
		"/other/history": [19],
		"/other/jobs": [20],
		"/other/newsletter": [21],
		"/other/policies": [22],
		"/other/scrapbook": [23],
		"/overview/faq": [24],
		"/overview/gallery": [~25],
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