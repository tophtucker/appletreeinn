<script>
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import HR from '$lib/components/HR.svelte';
</script>

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

<main>
	<p>is the only lodging within walking distance to Tanglewood.</p>
	<p>
		Perched on a big hill overlooking the Stockbridge Bowl, it has a view, a pool, a coffee machine,
		and almost nothing else.
	</p>

	<a class="cta" href="https://direct-book.com/properties/AppleTreeInndirect">Book now</a>
</main>

<style>
	:global(body) {
		font-size: 4em;
		background: var(--green);
		color: white;
		font-family: 'Align Web';
	}

	main {
		max-width: 980px;
		margin: 0 auto;
	}

	header {
		position: relative;
	}

	h1 {
		margin: 0;
		text-box-trim: trim-both;
		margin-top: -0.4em;
		font-size: 5vw;
	}

	p {
		max-width: 15em;
	}

	.cta {
		height: auto;
		padding: 0.2em 0.4em;
		border-width: 8px;
		border-color: var(--green);
		background: inherit;
		color: inherit;
	}
	main .cta:hover {
		background: rgba(255, 255, 255, 0.8);
		color: var(--green);
	}

	:global(.avaloch) {
		height: 15vw;
	}

	.wordmark {
		position: absolute;
		top: 2rem;
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

	.hero-img-wrap img {
		display: block;
		width: 100%;
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
