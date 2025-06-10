<script>
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
	<img src={pic.src} alt={pic.title} loading="lazy" style={`object-fit: ${objectFit}`} />
	{#if pics.length > 1}
		<div class={`controls ${side}`}>
			<button onclick={prev}>←</button>
			<button onclick={next}>→</button>
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
	.slideshow img {
		display: block;
		width: 100%;
		height: 100%;
		object-position: 50% 50%;
	}
	.controls {
		position: absolute;
	}

	.controls.bottom {
		bottom: 1em;
		right: 1em;
	}
	.controls.top {
		top: 1em;
		left: 1em;
	}
	figcaption {
		position: absolute;
		left: 1em;
		bottom: 1em;
		color: var(--black);
		font-family: sans-serif;
		font-size: smaller;
		margin-top: 0.25em;
		background: rgb(255, 255, 255, 1);
		border: 1px solid var(--black);
		padding: 4px 8px;
		border-radius: 4px;
		margin-right: 120px;
	}
	figcaption a {
		color: inherit;
	}
</style>
