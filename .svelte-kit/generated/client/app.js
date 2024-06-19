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
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about-us": [3],
		"/career": [~4],
		"/dining-ati/[...catchall]": [~5],
		"/explore": [~6],
		"/history": [7],
		"/jobs": [8],
		"/offers": [~9],
		"/ostrich-room": [10],
		"/restaurants": [~11],
		"/rooms": [~12],
		"/terms-of-service": [13],
		"/termsandcondition": [~14],
		"/things-to-do": [15],
		"/weddings-events": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';