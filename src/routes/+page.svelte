<script>
	import HR from '$lib/components/HR.svelte';
	import XR from '$lib/components/XR.svelte';
	import LilFrame from '$lib/components/LilFrame.svelte';
	import Reno from '$lib/components/Reno.svelte';
	import NewsletterSubscribe from '$lib/components/NewsletterSubscribe.svelte';

	import adirondackView from '$lib/assets/adirondack-view.jpg?enhanced';
	import avaloch from '$lib/assets/avaloch.jpg?enhanced';
	import cheers from '$lib/assets/cheers.jpg?enhanced';
	import distant from '$lib/assets/distant.jpg?enhanced';
	import door from '$lib/assets/door.jpg?enhanced';
	import fireplace from '$lib/assets/fireplace.jpg?enhanced';
	import max from '$lib/assets/max.jpg?enhanced';
	import pool1 from '$lib/assets/pool1.jpg?enhanced';
	import room8 from '$lib/assets/room8.jpg?enhanced';
	import sledding from '$lib/assets/sledding.jpg?enhanced';
	import wanda from '$lib/assets/wanda.jpg?enhanced';
</script>

<svelte:head>
	<title>Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<div class="inner main">
	<Reno />

	<div class="tout tout-inner" style="margin-top: 2rem">
		<h2>Follow our renovations</h2>
		<p>
			While we’re closed for “<a href="https://www.instagram.com/reel/DPkb0aVjruV/">some months</a>”
			Claire will share all the debates, blueprints, wrecking balls, and progress.
		</p>
		<div style="display: flex; flex-direction: column; align-items: center; gap: 1em;">
			<div>
				<NewsletterSubscribe />
			</div>
			and
			<a href="https://instagram.com/appletreeinn" class="cta">Follow us on Instagram</a>
		</div>
	</div>

	<HR />

	<div class="tout reverse">
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
		<enhanced:img
			src={room8}
			alt="The bed in Room 8, one of our favorites in the Main House"
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
		<enhanced:img
			src={cheers}
			alt="Two people toast with some of Sean’s cool cocktails out on the deck"
			loading="lazy"
		/>
	</div>

	<div class="tout reverse">
		<LilFrame accent="var(--blue)">
			<div class="tout-inner">
				<h2>Second-best show <br class="hide-mobile" />on the block</h2>
				<p>
					We may not draw 18,000 people like <a
						href="/activities/tanglewood"
						style="color: inherit;">some</a
					>, but locals love the deep bench of musical talent in the Berkshires.
				</p>
				<p><a href="/music" class="cta">See the schedule</a></p>
			</div>
		</LilFrame>
		<enhanced:img
			src={wanda}
			alt="Wanda Houston, one of our favorite performers, on stage in the Ostrich Room; Andy Wrba in the background; I forget the third guy’s name"
			loading="lazy"
		/>
	</div>

	<div class="tagline">
		<HR />
		<h2>
			For the old who are young at heart <br class="hide-mobile" />and the young who are old at
			heart
		</h2>
		<HR />
	</div>

	<div class="img-pair">
		<enhanced:img src={door} alt="Door" loading="lazy" />
		<enhanced:img src={fireplace} alt="Fireplace" loading="lazy" />
	</div>

	<HR />

	<div class="other">
		<div>
			<enhanced:img
				src={adirondackView}
				alt="Adirondack chairs outside the fire pit looking out on the view down the hill"
				loading="lazy"
			/>
			<a href="/overview/gallery" class="cta">Gallery</a>
		</div>
		<div>
			<enhanced:img
				src={max}
				alt="Max the hotel dog doesn’t have much to do with the FAQ, except that people do ask about him"
				loading="lazy"
			/>
			<a href="/overview/faq" class="cta">FAQ</a>
		</div>
		<div>
			<enhanced:img src={distant} alt="" loading="lazy" /><a href="/overview/map" class="cta">Map</a
			>
		</div>
		<div>
			<enhanced:img
				src={pool1}
				alt="There’s lots of things to do on the property and around the Berkshires"
				loading="lazy"
			/>
			<a href="/activities" class="cta">Activities</a>
		</div>
		<div>
			<enhanced:img src={sledding} alt="It’s all about the people, baby!!" loading="lazy" /><a
				href="/about/about-us"
				class="cta">About us</a
			>
		</div>
		<div>
			<enhanced:img
				src={avaloch}
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

	/* TODO: brittle hack to work with enhanced:img */
	.tout.reverse picture {
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
		.tout.reverse picture {
			order: 0;
		}
		.other {
			grid-template-columns: repeat(3, 1fr);
		}
		h2 {
			font-size: 1.2em;
		}
	}

	@media (max-width: 340px) {
		.other {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
