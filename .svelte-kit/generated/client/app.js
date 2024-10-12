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
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about-us": [3],
		"/baladi": [4],
		"/career": [~5],
		"/dining_ati/[...catchall]": [~7],
		"/dining/[...catchall]": [~6],
		"/explore": [~8],
		"/history": [9],
		"/jobs": [10],
		"/offers": [~11],
		"/ostrich-room": [12],
		"/restaurants": [~13],
		"/rooms": [~14],
		"/terms-of-service": [15],
		"/termsandcondition": [~16],
		"/things-to-do": [17],
		"/weddings-events": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';