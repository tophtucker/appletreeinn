<script>
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
	import HR from '$lib/components/HR.svelte';
	import LilFrame from '$lib/components/LilFrame.svelte';
	import heroDrone from '$lib/assets/hero-drone.jpg?enhanced';
</script>

<svelte:head>
	<title>Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<div class="inner main">
	<enhanced:img src={heroDrone} alt="The Apple Tree Inn’s Main House" />

	<div class="tagline">
		<HR />
		<h2>For the young who are old at heart<br />and the old who are young at heart</h2>
		<HR />
	</div>

	<div class="tout">
		<LilFrame accent="var(--green)">
			<div class="tout-inner">
				<h2>Not fancy</h2>
				<p>
					For seventy years, this 1885 house has been welcoming guests to stay and dine directly
					across the street from Tanglewood.
				</p>
				<p><a href="/rooms" class="cta">See rooms</a></p>
			</div>
		</LilFrame>
		<img
			src="/roompics/main-house/8/_XCS2672.jpg"
			alt="The bed in Room 8, one of our favorites in the Main House"
			class="first"
		/>
	</div>

	<div class="tout">
		<LilFrame accent="var(--red)">
			<div class="tout-inner">
				<h2>Food with a view</h2>
				<p>
					You can enjoy the Ostrich Room’s casual food and Sean’s elevated cocktails anywhere from
					the cozy hearth to the airy porch.
				</p>
				<p><a href="/dining/ostrich-room" class="cta">See the menu</a></p>
			</div>
		</LilFrame>
		<img src="/img/cheers.jpg" alt="Two people toast out on the deck " />
	</div>

	<div class="tout">
		<LilFrame accent="var(--blue)">
			<div class="tout-inner">
				<h2>Second-best show<br />on the block</h2>
				<p>
					We may not draw 18,000 people like <a
						href="/activities/tanglewood"
						style="color: inherit;">some</a
					>, but locals love the deep bench of musical talent in the Berkshires.
				</p>
				<p><a href="/dining/ostrich-room" class="cta">See the schedule</a></p>
			</div>
		</LilFrame>
		<img
			src="/img/wanda.jpg"
			alt="Wanda Houston, one of our favorite performers, on stage in the Ostrich Room"
			class="first"
		/>
	</div>

	<div class="img-pair">
		<img src="./img/door.jpg" alt="Door" loading="lazy" />
		<img src="./img/fireplace.jpg" alt="Fireplace" loading="lazy" />
	</div>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tagline {
		text-align: center;
	}

	.tout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		text-wrap: pretty;
		text-align: center;
	}

	.tout h2,
	.tout p {
		margin: 0;
	}

	.tout p {
		font-size: larger;
	}

	.tout-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		height: 100%;
	}

	.tout img {
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	.first {
		order: -1;
	}

	.img-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.img-pair img {
		max-width: 100%;
	}

	picture img {
		height: auto;
	}

	@media (max-width: 800px) {
		.tout {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		.tout p {
			font-size: inherit;
		}
		.first {
			order: 0;
		}
	}
</style>
