<script>
	import Image from '$lib/lightbox/Image.svelte';
	let { pics, side = 'bottom', aspectRatio = 'auto', objectFit = 'cover' } = $props();
	let i = $state(0);
	const pic = $derived(pics[i]);
	function next() {
		move(1);
	}
	function prev() {
		move(-1);
	}
	function move(d) {
		i = mod(i + d, pics.length);
	}
	function mod(n, m) {
		return ((n % m) + m) % m;
	}
</script>

<figure class="slideshow" style={`aspect-ratio: ${aspectRatio}`}>
	<Image
		src={pic.src}
		alt={pic.title}
		loading="lazy"
		style={`
         	display: block;
         	width: 100%;
         	height: 100%;
         	object-position: 50% 50%;
         	object-fit: ${objectFit}`}
	/>
	{#if pics.length > 1}
		<div class={`controls ${side}`}>
			<button onclick={prev}>&lt;</button>
			<button onclick={next}>&gt;</button>
		</div>
	{/if}
	{#if pic.caption}
		<figcaption>{@html pic.caption}</figcaption>
	{/if}
</figure>

<style>
	.slideshow {
		margin: 0;
		position: relative;
	}
	.slideshow.square {
		aspect-ratio: 1 / 1;
	}

	.controls {
		font-family: watkins;
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
	}
	.controls button {
		width: 2rem;
	}

	figcaption {
		font-size: smaller;
		margin-top: 0.5rem;
	}
</style>
