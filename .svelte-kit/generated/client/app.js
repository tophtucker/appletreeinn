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
	() => import('./nodes/23')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about-us": [3],
		"/about-us/claire": [4],
		"/about-us/history": [5],
		"/about-us/newsletter": [6],
		"/about-us/scrapbook": [7],
		"/baladi": [8],
		"/career": [~9],
		"/dining_ati/[...catchall]": [~11],
		"/dining/[...catchall]": [~10],
		"/explore": [~12],
		"/history": [13],
		"/jobs": [14],
		"/nye": [15],
		"/offers": [~16],
		"/ostrich-room": [17],
		"/restaurants": [~18],
		"/rooms": [~19],
		"/terms-of-service": [20],
		"/termsandcondition": [~21],
		"/things-to-do": [22],
		"/weddings-events": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';