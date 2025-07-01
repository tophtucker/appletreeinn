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
	() => import('./nodes/26')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/about/claire": [4],
		"/about/history": [5],
		"/about/newsletter": [6],
		"/about/scrapbook": [7],
		"/baladi": [~8],
		"/career": [~9],
		"/dining_ati/[...catchall]": [~11],
		"/dining/[...catchall]": [~10],
		"/explore": [~12],
		"/gallery": [~13],
		"/jobs": [14],
		"/landing/review": [15],
		"/music": [~16],
		"/music/past": [~17],
		"/offers": [~18],
		"/ostrich-room": [19],
		"/restaurants": [~20],
		"/rooms": [21],
		"/rooms/area": [22],
		"/rooms/property": [23],
		"/terms-of-service": [24],
		"/termsandcondition": [~25],
		"/weddings-events": [26]
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