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
	() => import('./nodes/24')
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
		"/book": [9],
		"/career": [~10],
		"/dining_ati/[...catchall]": [~12],
		"/dining/[...catchall]": [~11],
		"/explore": [~13],
		"/history": [14],
		"/jobs": [15],
		"/nye": [16],
		"/offers": [~17],
		"/ostrich-room": [18],
		"/restaurants": [~19],
		"/rooms": [~20],
		"/terms-of-service": [21],
		"/termsandcondition": [~22],
		"/things-to-do": [23],
		"/weddings-events": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';