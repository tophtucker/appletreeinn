<script>
	import { RESERVATIONS_URL } from '$lib/nav.js';
	import WeekHours from '$lib/components/WeekHours.svelte';
	import HR from '$lib/components/HR.svelte';
	import XR from '$lib/components/XR.svelte';
	import Image from '$lib/lightbox/Image.svelte';

	let { data } = $props();
	let {
		performances,
		ostrichRoom: { calendar, menus }
	} = data;

	const foodGallery = {
		Food: [
			['food-focaccia.jpg', 'Homemade focaccia'],
			['food-deviled-eggs.jpg', 'Deviled eggs'],
			['food-chicken.jpg', 'Panko fried chicken strips'],
			['food-burger.jpg', 'Hamburger'],
			['food-spicy-rigatoni.jpg', 'Spicy rigatoni'],
			['food-creme-brulee.jpg', 'Crème brûlée']
		],
		Drinks: [
			['drinks.jpg', 'An assortment of Sean’s cocktails'],
			['drink-plum-sour.jpg', 'Plum sour'],
			['drink-son-of-fire.jpg', 'Son of Fire'],
			['drink-worm-moon-martini.jpg', 'Worm moon martini'],
			['drink-1.jpg', 'Not sure what this one is'],
			['drink-2.jpg', 'Not sure about this one either']
		]
	};
</script>

<svelte:head>
	<title>The Ostrich Room • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
	<meta
		name="description"
		content="The Ostrich Room is the tavern at Avaloch featuring dark wood paneling, an inglenook, and frequent live music"
	/>
</svelte:head>

<div class="inner">
	<div class="intro">
		<h1>The Ostrich Room</h1>
		<div>Drinks • Food • Music</div>
	</div>
	<div class="links">
		<a href="https://g.co/kgs/7ueSZgy">Google Maps</a>
		<a class="cta disabled" href={RESERVATIONS_URL}>Make a reservation</a>
		<div>(413) 637-1910</div>
	</div>
	<div style="text-align: center;"><em>Walk-ins always welcome!</em></div>
	<div class="hours-wrapper"><WeekHours {calendar} {performances} /></div>
	<HR />
	<h2 id="menus">Menus</h2>
	<div class="grid-or-flex duo">
		{#each menus as menu, i}
			{#if i}
				<XR />
			{/if}
			<div class="menu">
				<div>
					<a class="cta" href={menu.url}>See {menu.name.toLowerCase()} menu</a> —
					<em>for example:</em>
				</div>
				<div class="food-gallery">
					{#each foodGallery[menu.name] as [img, alt]}
						<Image src={`/img/${img}`} {alt} style="aspect-ratio: 500/643; object-fit: cover;" />
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<HR />
	<div class="gallery">
		<Image src="/ostrich-room/fireplace.jpg" alt="The inglenook" style="aspect-ratio: 500/643;" />
		<Image src="/heropics/ostrich3.jpg" alt="The Ostrich Room" style="aspect-ratio: 500/643;" />
	</div>

	<HR />

	<div class="grid-or-flex history">
		<div class="letter prose">
			<p>
				Our bar program was never meant to be ordinary. We didn’t build it to play it safe — we
				built it to spark curiosity, to share stories through flavor, and to challenge the idea that
				ordering a drink should ever be boring. We hope you find something familiar here — but more
				than that, we hope you find something unexpected.
			</p>
			<div style="text-align: right;">
				<img src="/signatures/sean.png" alt="Sean's signature" height="100" /><br />
				Sean<br />Bar manager
			</div>
		</div>
		<div class="prose">
			<p>
				Originally built in 1899 by Henry Pease and Katharine Di Pollone as a billiards room (<a
					href="/about/history">learn more</a
				>), our tavern is locally famous for its live music, cocktails, and roaring fires in the
				<em>inglenook</em>. It gets its name from its chandelier of real ostrich eggs.
			</p>
			<p>
				You are welcome to enjoy your food and drinks in the room itself; in the lobby lounge; on
				the outdoor patio; around the fire pit; or on the front porch. The food is generally kind of
				“elevated bar bites”. Under Sean’s leadership, the list of cocktails and spirits has grown
				dramatically, and he has a story behind each one.
			</p>
			<p>
				Take note of architectural details such as the quarter-sawn wood beams; the old mosaic over
				the fireplace resembling an Islamic <em>mihrab</em> (though it does not face the
				<em>qibla</em>); and the door with the especially sagging crooked panes.
			</p>
		</div>
	</div>

	<HR />

	<div class="tagline">
		<h2>Most elevated cocktails on<br />I-90 east of South Dakoka</h2>
	</div>

	<HR />

	<img src="/img/cheers.jpg" alt="Cheers!" />
</div>

<style>
	.intro {
		box-shadow: inset 0 0 10em 5vw #000;
		background-image: url('/img/ostrich-room-packed.jpg');
		background-size: cover;
		background-position: 50% 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 2rem 1rem;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		position: relative;
		min-height: 400px;
		font-family: var(--hed-font);
		color: white;
	}

	.intro div {
		text-align: center;
		display: flex;
		align-items: center;
	}

	h1 {
		font-size: 3rem;
		text-shadow: 3px 3px 3px black;
	}

	.menu {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: start;
	}

	.food-gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.history {
		gap: 3rem;
		align-items: center;
	}

	.letter {
		max-width: 640px;
		border: 1px solid var(--black);
		padding: 2rem;
		margin-top: 2rem;
		border-radius: 3px;
		transform: rotate(-1deg);
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 420px) {
		.intro div {
			font-size: small;
			flex-direction: column;
		}
	}

	.links {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 2rem 0;
		gap: 2rem;
	}

	.hours-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
	}

	h2 {
		margin: 1em 0 0.5em 0;
	}

	.tagline {
		text-align: center;
		text-wrap: balance;
	}

	@media (max-width: 800px) {
		.links {
			flex-direction: column;
		}

		h1 {
			font-size: 2rem;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}
</style>
