<script>
	import AvalochShadowed from '$lib/icons/AvalochShadowed.svelte';
	import Pentathing from '$lib/icons/Pentathing.svelte';
	import Doorknob from '$lib/icons/Doorknob.svelte';
	import Rule from './Rule.svelte';
	import Map from './Map.svelte';
	import GalleryCarousel from './GalleryCarousel.svelte';
	import NewsletterSubscribe from '$lib/components/NewsletterSubscribe.svelte';
	import NoMinimum from './NoMinimum.svelte';
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
			<div class="top">SUMMER 2026</div>
			<div class="bottom">
				<AvalochShadowed class="avaloch" altFill="var(--green)" />
				<h1>Lodge</h1>
			</div>
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

	<div style="display: flex; justify-content: flex-start; align-items: center; gap: 2rem;">
		<a class="cta" href="https://direct-book.com/properties/AppleTreeInndirect">Book now</a>
		<NoMinimum />
	</div>
</section>

<Rule />

<GalleryCarousel />

<Rule />

<section class="flex">
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
</section>

<Rule />

<section>
	<Map />
	<div>
		<div class="notice">ACTIVITY GUIDES</div>
		<p>
			<a href="/activities/tanglewood" data-sveltekit-reload>Tanglewood</a> •
			<a href="/activities/berkshires" data-sveltekit-reload>The Berkshires</a>
		</p>
	</div>
</section>

<Rule />

<section style="display: grid; grid-template-columns: 3fr 2fr; gap: 1rem;">
	<div>
		<div class="coming-soon">Coming soon</div>
		<p>
			The <span class="inalign">Avaloch Inn</span> and <span class="inalign">Café</span> and
			<span class="inalign">Ostrich Room</span> are currently closed for renovations. Subscribe to our
			newsletter for updates.
		</p>
		<div style="font-size: smaller;">
			<NewsletterSubscribe />
		</div>
	</div>
	<img
		src="/reno/hill.jpg"
		alt="Construction underway on the main house"
		style="border: 3px double currentColor"
	/>
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

	section.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;
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

	.notice {
		border: 3px double currentColor;
		padding: 0.25rem 0.5rem;
		font-size: smaller;
		text-transform: uppercase;
		display: inline-block;
		letter-spacing: 2px;
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
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		color: white;
		text-shadow: 2px 2px 2px var(--green);
	}

	.wordmark-inner {
		max-width: 980px;
		margin: 0 auto;
		padding: 4rem 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.wordmark-inner .top {
		font-variation-settings: 'wght' 700;
		display: flex;
		justify-content: space-between;
		font-size: smaller;
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
