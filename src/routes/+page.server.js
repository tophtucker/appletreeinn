import { sanity, parseGallery } from '$lib/sanity.js';

const QUERY = `*[_type == "gallery" && name == "Main"][0] {
  _id,
  name,
  images[] {
    image,
    caption
  }
}`;

export async function load() {
	return { mainGallery: parseGallery(await sanity.fetch(QUERY)).images.slice(0, 9) };
}
