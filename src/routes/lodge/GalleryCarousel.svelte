<script>
	const images = [
		{ src: '/heropics/summer-annex.jpg', alt: 'Summer annex' },
		{ src: '/newlodge/1.jpg', alt: 'Queen room' },
		// { src: '/heropics/view2.jpg', alt: 'View of the Stockbridge Bowl' },
		{ src: '/heropics/pool1.jpg', alt: 'The pool' },
		{ src: '/newlodge/2.jpg', alt: 'Queen room' },
		// { src: '/heropics/view3.jpg', alt: 'View from the hill' },
		{ src: '/newlodge/3.jpg', alt: 'Bathroom' },
		// { src: '/heropics/pool2.jpg', alt: 'Pool area' },
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
