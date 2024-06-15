<script>
	const defaultPics = [
		{ src: './heropics/1.jpg', title: 'The house' },
		{ src: './heropics/2.jpg', title: 'The house or something' }
	];
    let {pics = defaultPics} = $props();
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

<div class="slideshow">
	<img src={pic.src} alt={pic.title} />
	<div class="controls">
		<button onclick={prev}>←</button>
		<button onclick={next}>→</button>
	</div>
</div>

<style>
	.slideshow {
		position: relative;
	}
	.slideshow img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
	}
	.controls {
		position: absolute;
		bottom: 1em;
		right: 1em;
	}
</style>
