<script>
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
			class="first-lg"
			loading="lazy"
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
		<img
			src="/img/cheers.jpg"
			alt="Two people toast with some of Sean’s cool cocktails out on the deck"
			loading="lazy"
		/>
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
			alt="Wanda Houston, one of our favorite performers, on stage in the Ostrich Room; Andy Wrba in the background; I forget the third guy’s name"
			class="first-lg"
			loading="lazy"
		/>
	</div>

	<div class="img-pair">
		<img src="./img/door.jpg" alt="Door" loading="lazy" />
		<img src="./img/fireplace.jpg" alt="Fireplace" loading="lazy" />
	</div>

	<HR />

	<div class="other">
		<div>
			<img
				src="/img/adirondack-view.jpg"
				alt="Adirondack chairs outside the fire pit looking out on the view down the hill"
				loading="lazy"
			/><a href="/overview/gallery" class="cta">Gallery</a>
		</div>
		<div>
			<img
				src="/heropics/max.jpg"
				alt="Max the hotel dog doesn’t have much to do with the FAQ, except that people do ask about him"
				loading="lazy"
			/><a href="/overview/faq" class="cta">FAQ</a>
		</div>
		<div><img src="/img/distant.jpg" alt="" /><a href="/overview/map" class="cta">Map</a></div>
		<div>
			<img
				src="/heropics/pool1.jpg"
				alt="There’s lots of things to do on the property and around the Berkshires"
				loading="lazy"
			/><a href="/activities" class="cta">Activities</a>
		</div>
		<div>
			<img src="/img/sledding.jpg" alt="It’s all about the people, baby!!" loading="lazy" /><a
				href="/about/about-us"
				class="cta">About us</a
			>
		</div>
		<div>
			<img
				src="/history/avaloch.jpg"
				alt="Claire has read and written more than you can imagine about the history of the hotel"
				loading="lazy"
			/><a href="/about/history" class="cta">History</a>
		</div>
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

	.first-lg {
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

	.other {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(6, 1fr);
	}

	.other div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.other div img {
		max-width: 100%;
		border-radius: 100%;
		aspect-ratio: 1;
		object-fit: cover;
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
		.first-lg {
			order: 0;
		}
		.other {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 400px) {
		.other {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
