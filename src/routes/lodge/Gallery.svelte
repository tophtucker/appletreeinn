<script>
	import Image from '$lib/lightbox/Image.svelte';
	let { images } = $props();
</script>

<div class="gallery">
	{#each images as img}
		<Image
			src={img.image}
			alt={img.caption}
			style="aspect-ratio: 3 / 2; object-fit: cover; object-position: center;"
		/>
	{/each}
	<a href="/overview/gallery" data-sveltekit-reload class="cta">More</a>
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		background: white;
		position: relative;
	}
	.gallery .cta {
		position: absolute;
		bottom: 1em;
		right: 1em;
		padding: 0.25em 1em;
		height: auto;
	}
</style>
