import { sanity } from '$lib/sanity.js';

const QUERY = `*[_type == "itinerary"] {
  title,
  body[] {
      ...,
      markDefs[] {
        ...,
        "place": place-> { _id, name, address, gmaps, website, coordinates }
      }
    }
}
`;

export async function load() {
	const itineraries = await sanity.fetch(QUERY);
	console.log(itineraries);
	return {
		itineraries
	};
}
