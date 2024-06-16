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

<div class="slideshow" style={`aspect-ratio: ${aspectRatio}`}>
	<img src={pic.src} alt={pic.title} loading="lazy" style={`object-fit: ${objectFit}`} />
	{#if pics.length > 1}
		<div class={`controls ${side}`}>
			<button onclick={prev}>←</button>
			<button onclick={next}>→</button>
		</div>
	{/if}
</div>

<style>
	.slideshow {
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
</style>
