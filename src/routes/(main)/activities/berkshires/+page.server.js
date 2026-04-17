import { sanity } from '$lib/sanity.js';

const QUERY = `*[_type == "itinerary"] {
  title,
  body[]
}
`;

export async function load() {
	const itineraries = await sanity.fetch(QUERY);
	console.log(itineraries);
	return {
		itineraries
	};
}
