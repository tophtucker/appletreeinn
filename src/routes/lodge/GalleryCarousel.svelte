<script>
	const images = [
		{ src: '/heropics/summer-annex.jpg', alt: 'Summer annex' },
		{ src: '/newlodge/view.jpg', alt: 'The view from the lodge' },
		{ src: '/newlodge/1.jpg', alt: 'Queen room' },
		{ src: '/heropics/pool1.jpg', alt: 'The pool' },
		{ src: '/newlodge/2.jpg', alt: 'Queen room' },
		{ src: '/newlodge/drone-hill.jpg', alt: 'The whole property' },
		// { src: '/newlodge/3.jpg', alt: 'Bathroom' },
		{ src: '/newlodge/pool-chairs.jpg', alt: 'Chairs by the pool' },
		{ src: '/newlodge/drone-lot.jpg', alt: 'The parking lot and lodge' },
		{ src: '/newlodge/4.jpg', alt: 'Double room' }
	];
</script>

<div class="gallery">
	{#each images as img}
		<img src={img.src} alt={img.alt} />
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		background: white;
	}
	img {
		display: block;
		height: 100%;
		width: auto;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		object-position: center;
		flex-shrink: 0;
	}
</style>
