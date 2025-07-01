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
	() => import('./nodes/27')
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
		"/dining_ati/[...catchall]": [~12],
		"/dining": [10],
		"/dining/ostrich-room": [11],
		"/explore": [~13],
		"/gallery": [~14],
		"/jobs": [15],
		"/landing/review": [16],
		"/music": [~17],
		"/music/past": [~18],
		"/offers": [~19],
		"/ostrich-room": [~20],
		"/restaurants": [~21],
		"/rooms": [22],
		"/rooms/area": [23],
		"/rooms/property": [24],
		"/terms-of-service": [25],
		"/termsandcondition": [~26],
		"/weddings-events": [27]
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