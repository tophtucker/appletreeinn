import * as universal_hooks from '../../../src/hooks.js';

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
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40')
];

export const server_loads = [2];

export const dictionary = {
		"/(main)": [3,[2]],
		"/(main)/about": [~5,[2]],
		"/(main)/about/about-us": [6,[2]],
		"/(main)/about/claire": [7,[2]],
		"/(main)/about/history": [8,[2]],
		"/(main)/about/jobs": [9,[2]],
		"/(main)/about/newsletter": [~10,[2]],
		"/(main)/about/policies": [11,[2]],
		"/(main)/about/press": [12,[2]],
		"/(main)/about/renovations": [13,[2]],
		"/(main)/about/scrapbook": [14,[2]],
		"/(main)/activities": [15,[2]],
		"/(main)/activities/amenities": [16,[2]],
		"/(main)/activities/berkshires": [17,[2]],
		"/(main)/activities/tanglewood": [18,[2]],
		"/(main)/baladi": [~19,[2]],
		"/(main)/career": [~20,[2]],
		"/(main)/dining_ati/[...catchall]": [~24,[2]],
		"/(main)/dining": [21,[2]],
		"/(main)/dining/breakfast": [22,[2]],
		"/(main)/dining/ostrich-room": [~23,[2]],
		"/(main)/explore": [~25,[2]],
		"/(main)/landing/kripalu": [26,[2]],
		"/(main)/landing/review": [27,[2]],
		"/lodge": [40],
		"/(main)/music": [~28,[2]],
		"/(main)/offers": [~29,[2]],
		"/(main)/ostrich-room": [~30,[2]],
		"/(main)/overview/faq": [31,[2]],
		"/(main)/overview/gallery": [32,[2]],
		"/(main)/overview/map": [33,[2]],
		"/(main)/restaurants": [~34,[2]],
		"/(main)/rooms": [35,[2]],
		"/(main)/rooms/lodge": [36,[2]],
		"/(main)/rooms/main-house": [37,[2]],
		"/(main)/termsandcondition": [~38,[2]],
		"/(main)/weddings-events": [39,[2]],
		"/(main)/[...catchall]": [~4,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: universal_hooks.reroute || (() => {}),
	transport: universal_hooks.transport || {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';