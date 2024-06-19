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
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about-us": [3],
		"/career": [~4],
		"/dining_ati/[...catchall]": [~6],
		"/dining/[...catchall]": [~5],
		"/explore": [~7],
		"/history": [8],
		"/jobs": [9],
		"/offers": [~10],
		"/ostrich-room": [11],
		"/restaurants": [~12],
		"/rooms": [~13],
		"/terms-of-service": [14],
		"/termsandcondition": [~15],
		"/things-to-do": [16],
		"/weddings-events": [17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';