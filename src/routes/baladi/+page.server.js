import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	redirect(301, 'https://www.instagram.com/baladiberkshires');
}
