import { sanity, parseGallery } from '$lib/sanity.js';

const QUERY = `*[_type == "gallery"] {
  _id,
  name,
  images[] {
    image,
    caption
  }
}`;

export async function load() {
	const galleries = (await sanity.fetch(QUERY)).map(parseGallery);
	return {
		mainGallery: galleries.find((gallery) => gallery.name === 'Main').images,
		otherGalleries: galleries.filter((gallery) => gallery.name !== 'Main')
	};
}
