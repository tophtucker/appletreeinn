/**
 * MailChimp makes their embeds available as a script that has a document.write
 * with the HTML of your “campaign” listings. I wanted to be able to format the
 * listings a bit differently, and I wanted them to SSR with the rest of the
 * page. So this fetches the source of that script, extracts the HTML it wants
 * to write to the DOM, parses it with JSDOM, and then extracts a
 * {date, title, url}[] array of object.
 *
 * Prototyped in this val, helpful for iterating if this breaks:
 * https://www.val.town/x/tophtucker/fetch-ati-mailchimp/code/main.ts
 */

import { JSDOM } from 'jsdom';
import { Temporal } from '@js-temporal/polyfill';

const MAILCHIMP_EMBED_SCRIPT =
	'https://appletreeinnlenox.us19.list-manage.com/generate-js/?u=0e2051740f0e8e07588b8b1ce&show=20&fid=27878';
async function fetchNewsletters() {
	try {
		let response = await (await fetch(MAILCHIMP_EMBED_SCRIPT)).text();
		response = response.replace(`document.write("`, '').replace(`");`, '');
		response = JSON.parse(`"${response}"`);
		const dom = new JSDOM(response);
		return [...dom.window.document.querySelectorAll('.campaign')].map((d) => {
			const [date, title] = d.textContent.split(' - ');
			const [month, day, year] = date.split('/');
			const url = d.querySelector('a').getAttribute('href');
			return { date: Temporal.PlainDate.from(`${year}-${month}-${day}`), title, url };
		});
	} catch (err) {
		console.error(err);
		return [];
	}
}

export async function load() {
	return { newsletters: await fetchNewsletters() };
}
