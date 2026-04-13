import { sanity, parseAmenity } from '$lib/sanity.js';

const QUERY = `*[_type == "amenity" && disabled != true] | order(name asc) {
  _id,
  name,
  badge,
  description
}`;

export async function load() {
	const amenities = (await sanity.fetch(QUERY)).map(parseAmenity);
	return {
		amenities: amenities.filter((d) => d.name !== 'Non-amenities'),
		nonAmenities: amenities.find((d) => d.name === 'Non-amenities')?.description
	};
}
