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
		"/music/past": [~15],
		"/offers": [~16],
		"/ostrich-room": [~17],
		"/other": [18],
		"/other/claire": [19],
		"/other/history": [20],
		"/other/jobs": [21],
		"/other/newsletter": [22],
		"/other/policies": [23],
		"/other/scrapbook": [24],
		"/overview/faq": [25],
		"/overview/gallery": [~26],
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