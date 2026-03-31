<script>
	import Image from '$lib/lightbox/Image.svelte';
	const images = [
		{ src: '/heropics/summer-annex.jpg', alt: 'The lodge' },
		{ src: '/newlodge/view.jpg', alt: 'The view from the lodge' },
		{ src: '/newlodge/1.jpg', alt: 'King room' },
		{ src: '/heropics/pool1.jpg', alt: 'The pool' },
		{ src: '/newlodge/2.jpg', alt: 'King room' },
		{ src: '/newlodge/drone-hill.jpg', alt: 'The whole property' },
		// { src: '/newlodge/3.jpg', alt: 'Bathroom' },
		{ src: '/newlodge/pool-chairs.jpg', alt: 'Chairs by the pool' },
		{ src: '/newlodge/drone-lot.jpg', alt: 'The parking lot and lodge' },
		{ src: '/newlodge/4.jpg', alt: 'Double room' }
	];
</script>

<div class="gallery">
	{#each images as img}
		<Image
			src={img.src}
			alt={img.alt}
			style="aspect-ratio: 3 / 2; object-fit: cover; object-position: center;"
		/>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		background: white;
	}
</style>
