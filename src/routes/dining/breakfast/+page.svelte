<script>
	import Image from '$lib/lightbox/Image.svelte';
	import XR from '$lib/components/XR.svelte';
	import HR from '$lib/components/HR.svelte';
</script>

<svelte:head>
	<title>Continental breakfast • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
	<meta
		name="description"
		content="Guests enjoy a complimentary breakfast buffet served with panoramic views of the Berkshire hills"
	/>
</svelte:head>

<div class="inner">
	<h1>Continental breakfast</h1>
	<Image src="/img/continental-breakfast.jpg" />

	<p>
		Guests enjoy a complimentary continental breakfast every morning from 8 to 10 a.m. Offerings
		vary day by day, but in general you can choose from…
	</p>

	<div class="offerings">
		<figure>
			<Image
				src="/img/breakfast-eggs.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>hard-boiled eggs,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-fruit.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>fresh fruit,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-granola.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>local BOLA granola,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-jam.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>homemade jam,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-juice.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>juice,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-yogurt.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>Greek yogurt,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-muffins.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>homemade muffins,</figcaption>
		</figure>

		<figure>
			<Image
				src="/img/breakfast-bread.jpg"
				style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 100%;"
			/>
			<figcaption>and fresh bread from the famous Berkshire Mountain Bakery.</figcaption>
		</figure>
	</div>

	<HR />

	<p>Pick your view! Enjoy your breakfast from…</p>

	<div class="grid-or-flex trio">
		<div>
			<h3>The Round Room</h3>
			<div>Our iconic 18-sided room offers panoramic views</div>
			<Image src="/img/round-room.jpg" style="width: 260px; height: 260px; object-fit: cover;" />
		</div>
		<XR />
		<div>
			<h3>The Porch</h3>
			<div>Take in the fresh morning air and play fetch with Max</div>
			<Image src="/img/porch.jpg" style="width: 260px; height: 260px; object-fit: cover;" />
		</div>
		<XR />
		<div>
			<h3>The Lobby Lounge</h3>
			<div>A brisk morning is a great excuse for a fire</div>
			<Image src="/img/fireplace.jpg" style="width: 260px; height: 260px; object-fit: cover;" />
		</div>
	</div>

	<HR />

	<p>
		Whether you rise with the sun or burn the midnight oil, the coffee and tea station offers 24/7
		caffeine. We have a selection of Harney &amp; Sons teas, a Keurig machine, and — while the
		morning supply lasts — fresh coffee from No. Six Depot, our favorite roastery down the road.
	</p>

	<Image src="/img/coffee-station.jpg" />

	<p>
		There’s always plenty of reading material around, including the latest New York Times, Berkshire
		Eagle, Berkshire Magazine, The B, and Edible Berkshires. You will also find books written by no
		fewer than two (2) prior owners of the inn.
	</p>
</div>

<style>
	.grid-or-flex h3 {
		margin: 0;
	}

	.grid-or-flex > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		text-align: center;
	}

	.offerings {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		text-align: center;
	}

	.grid-or-flex {
		margin: 2rem 0;
	}

	@media (max-width: 800px) {
		.offerings {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	figure {
		margin: 0;
	}
</style>
