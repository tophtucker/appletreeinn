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
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about-us": [3],
		"/about-us/claire": [4],
		"/about-us/newsletter": [5],
		"/about-us/scrapbook": [6],
		"/baladi": [7],
		"/career": [~8],
		"/dining_ati/[...catchall]": [~10],
		"/dining/[...catchall]": [~9],
		"/explore": [~11],
		"/history": [12],
		"/jobs": [13],
		"/nye": [14],
		"/offers": [~15],
		"/ostrich-room": [16],
		"/restaurants": [~17],
		"/rooms": [~18],
		"/terms-of-service": [19],
		"/termsandcondition": [~20],
		"/things-to-do": [21],
		"/weddings-events": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.js';