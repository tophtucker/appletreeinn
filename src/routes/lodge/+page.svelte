<script>
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import Pentathing from '$lib/icons/Pentathing.svelte';
	import Doorknob from '$lib/icons/Doorknob.svelte';
	import Rule from './Rule.svelte';
</script>

<svelte:head>
	<title>Avaloch Lodge • Lenox, Mass.</title>
</svelte:head>

<Rule />

<header>
	<div class="hero-img-wrap">
		<img src="/heropics/pool1.jpg" alt="The pool at Avaloch" />
		<svg class="noise-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
			<filter id="noise-filter">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.65"
					numOctaves="3"
					stitchTiles="stitch"
				/>
			</filter>
			<rect width="100%" height="100%" filter="url(#noise-filter)" />
		</svg>
		<div class="grain-overlay" aria-hidden="true"></div>
	</div>
	<div class="wordmark">
		<div class="wordmark-inner">
			<Avaloch class="avaloch" />
			<h1>Lodge</h1>
		</div>
	</div>
</header>

<Rule />

<section class="first">
	<p>is the only lodging within walking distance to Tanglewood<sup>(9 min.)</sup>.</p>
	<p>
		Perched on a big hill overlooking the Stockbridge Bowl, it has a view, a pool, a coffee machine,
		and almost nothing else.
	</p>

	<a class="cta" href="https://direct-book.com/properties/AppleTreeInndirect">Book now</a>
</section>

<Rule />

<section class="gallery">
	<img src="/heropics/summer-annex.jpg" alt="Pic" />
	<img src="/roompics/lodge/queen-scenic-view/_XCS2772.jpg" alt="Pic" />
	<img src="/heropics/view2.jpg" alt="Pic" />
</section>

<Rule />

<section>
	<div style="display: flex; justify-content: space-between; align-items: center;">
		<div>
			<div>10 Richmond Mountain Road</div>
			<div>Lenox, Massachusetts 01240</div>
			<div>
				<a href="mailto:frontdesk@avalochinn.com" target="_blank">frontdesk@avalochinn.com</a>
			</div>
			<div>(413) 637-1910</div>
			<div><a href="https://www.instagram.com/avaloch.inn/" target="_blank">@avaloch.inn</a></div>
		</div>
		<Pentathing height="100" width="100" altFill="var(--green)" />
	</div>
</section>

<Rule />

<section>
	<div class="coming-soon">Coming Fall 2026</div>
	<p>
		The <span class="inalign">Avaloch Inn</span> and <span class="inalign">Café</span> and
		<span class="inalign">Ostrich Room</span> are currently closed for renovations. The whole main
		house of the former
		<em>Apple Tree Inn</em> will miss the summer season. Claire and Christian and co. are going as fast
		as they can and expect to reopen fully this fall. There will be construction onsite this summer.
	</p>
</section>

<style>
	:global(body) {
		font-size: 2em;
		background: var(--green);
		color: rgba(255, 255, 255, 0.85);
		font-family: 'Align Web';
		padding-bottom: 200px;
	}

	section {
		max-width: 980px;
		margin: 4rem auto;
	}

	section.first {
		font-size: 2em;
	}

	section.gallery {
		max-width: 100%;
		margin: 0;
		display: grid;
		gap: 2px;
		grid-template-columns: repeat(3, 1fr);
		height: 400px;
	}

	section.gallery img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: bottom;
	}

	header {
		position: relative;
	}

	h1 {
		margin: 0;
		margin-top: -0.4em;
		font-size: 5vw;
	}

	p {
		max-width: 100%;
	}

	a {
		color: inherit;
	}

	sup {
		font-size: 20px;
		position: absolute;
		padding-left: 5px;
		padding-top: 10px;
	}

	a:hover {
		color: white;
	}

	.inalign {
		font-family: 'Align Web';
		font-variation-settings: 'wght' 800;
		text-transform: uppercase;
		color: white;
	}

	.coming-soon {
		border: 3px double currentColor;
		padding: 0.25rem 0.5rem;
		font-size: smaller;
		color: var(--green);
		background: white;
		text-transform: uppercase;
		display: inline-block;
		letter-spacing: 2px;
	}

	.cta {
		height: auto;
		padding: 0.2em 0.4em;
		border-width: 8px;
		border-color: var(--green);
		background: inherit;
		color: inherit;
	}

	section .cta:hover {
		background: rgba(255, 255, 255, 0.8);
		color: var(--green);
	}

	:global(.avaloch) {
		height: 180px;
	}

	.wordmark {
		position: absolute;
		bottom: 4rem;
		left: 0;
		right: 0;
		color: white;
	}

	.wordmark-inner {
		max-width: 980px;
		margin: 0 auto;
	}

	.hero-img-wrap {
		position: relative;
	}

	.hero-img-wrap {
		aspect-ratio: 2 / 1;
		overflow: hidden;
	}

	.hero-img-wrap img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: bottom;
	}

	.noise-svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.grain-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(to right, white 20%, var(--green) 100%);
		filter: contrast(120%) brightness(100%);
		mix-blend-mode: multiply;
	}
</style>
