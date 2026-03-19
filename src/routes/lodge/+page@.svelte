<script>
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import HR from '$lib/components/HR.svelte';
</script>

<main>
	<header>
		<Avaloch class="avaloch" />
		<h1>Lodge</h1>
	</header>

	<p>is the only lodging within walking distance to Tanglewood.</p>
	<p>
		Perched on a big hill overlooking the Stockbridge Bowl, it has a view, a pool, a coffee machine,
		and almost nothing else.
	</p>

	<a class="cta" href="https://direct-book.com/properties/AppleTreeInndirect">Book now</a>
</main>

<style>
	main {
		padding: 2em;
		font-size: 4em;
		background: var(--green);
		color: white;
		font-family: Align;
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
	}

	:global(.avaloch) {
		height: 15vw;
	}
</style>
