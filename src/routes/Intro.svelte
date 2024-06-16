<script>
	import Slideshow from './Slideshow.svelte';
	const pics = [
		{ src: './heropics/1.jpg', title: 'The house' },
		{ src: './heropics/2.jpg', title: 'The house or something' }
	];
</script>

<div class="inner">
	<div class="intro">
		<article>
			<p>
				Come to enjoy our beautiful views & grounds, our hidden gem pool, our wood-paneled tavern
				(open for food & drinks Wed-Sat with live music twice a week), our luxurious bedding, and
				our location walking distance to Tanglewood and Kripalu.
			</p>
		</article>
		<Slideshow {pics} />
	</div>
</div>

<style>
	.intro {
		display: grid;
		grid-template-columns: 1fr 2fr;
		border-radius: 5px;
		border: 1px solid var(--brown);
		overflow: hidden;
		margin-bottom: 1em;
	}

	.intro article {
		font-size: 1.4em;
		padding: 2em;
		max-width: 640px;
		background: var(--tan);
		border-right: 1px solid var(--brown);
	}

	/* .intro article p:first-child {
		margin: 0;
		font-size: 2em;
	}
	.intro article p:last-child {
		margin-bottom: 0;
	} */
	@media (max-width: 640px) {
		.intro {
			grid-template-columns: none;
			grid-template-rows: 1fr 2fr;
		}
		.intro .slideshow {
			order: 1;
		}
		.intro article {
			order: 2;
			padding: 1em;
			border: none;
			border-top: 1px solid var(--brown);
		}
	}
</style>
