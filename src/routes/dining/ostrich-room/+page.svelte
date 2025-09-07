<script>
	import { RESERVATIONS_URL } from '$lib/nav.js';
	import WeekHours from '$lib/components/WeekHours.svelte';
	import HR from '$lib/components/HR.svelte';
	import Image from '$lib/lightbox/Image.svelte';

	let { data } = $props();
	let {
		performances,
		ostrichRoom: { hours, menus }
	} = data;
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food (and often live music) Wed.–Sat. at the Apple Tree Inn"
	/>
</svelte:head>

<div class="inner">
	<div class="intro">
		<h1>The Ostrich Room</h1>
		<div>Drinks • Food • Music</div>
	</div>
	<div class="links">
		<a href="https://g.co/kgs/7ueSZgy">Google Maps</a>
		<a class="cta" href={RESERVATIONS_URL}>Make a reservation</a>
		<div>(413) 637-1910</div>
	</div>
	<div style="text-align: center;"><em>Walk-ins always welcome!</em></div>
	<div class="hours-wrapper"><WeekHours {hours} {performances} /></div>
	<HR />
	<h2 id="menus">Menus</h2>
	<div class="menus">
		{#each menus as menu}
			<div>
				<a href={menu.url}>{menu.name}</a>
				<iframe src={menu.url} title={menu.name}></iframe>
			</div>
		{/each}
	</div>
	<HR />
	<div class="gallery">
		<Image src="/ostrich-room/cauliflower.jpg" alt="Cauliflower" style="aspect-ratio: 500/643;" />
		<Image src="/ostrich-room/fireplace.jpg" alt="The inglenook" style="aspect-ratio: 500/643;" />
		<Image
			src="/ostrich-room/cocktail.jpg"
			alt="One of Sean’s cocktails"
			style="aspect-ratio: 500/643;"
		/>
		<Image src="/heropics/ostrich3.jpg" alt="The Ostrich Room" style="aspect-ratio: 500/643;" />
		<Image src="/ostrich-room/IMG_6961.jpg" alt="The Ostrich Room" style="aspect-ratio: 500/643;" />
		<Image src="/ostrich-room/empty.jpg" alt="The Ostrich Room" style="aspect-ratio: 500/643;" />
	</div>

	<HR />

	<p>
		Originally built in 1899 by Henry Pease and Katharine Di Pollone as a billiards room (<a
			href="/about/history">more history</a
		>), our tavern is locally famous for its live music, cocktails, and roaring fires in the
		<em>inglenook</em>. It gets its name from its chandelier of real ostrich eggs.
	</p>

	<div class="letter prose">
		<p>
			Our menu isn’t just a list of what we pour. It’s a reflection of the time, care, and heart
			we’ve put into building something we hope feels like yours.
		</p>
		<p>
			Our bar program was never meant to be ordinary. We didn’t build it to play it safe — we built
			it to spark curiosity, to share stories through flavor, and to challenge the idea that
			ordering a drink should ever be boring.
		</p>
		<p>
			We hope you find something familiar here — but more than that, we hope you find something
			unexpected. Something that nudges you gently (or not so gently) out of your usual go-to.
			That’s the fun part. The good part.
		</p>
		<p>
			This whole project is for the community — for the regulars who stay too long (please keep
			staying), the newcomers who ask good questions, and everyone in between. You’re why we do
			this. You’re what keeps the lights on and the ideas flowing. So thank you. For showing up. For
			trusting us with your time and your taste buds.
		</p>
		<p>
			We promise to keep growing, keep listening, and keep putting everything we’ve got into the
			glass in front of you. Here’s to friends, community and trying new things — together.
		</p>
		<div style="text-align: right;">
			<img src="/signatures/sean.png" alt="Sean's signature" height="100" /><br />
			Sean<br />Bar manager
		</div>
	</div>

	<HR />

	<img src="/avaloch/img/cheers.jpg" alt="Cheers!" />
</div>

<style>
	.intro {
		box-shadow: inset 0 0 10em 5vw #000;
		background-image: url('/avaloch/img/ostrich-room-packed.jpg');
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
		font-family: watkins;
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

	.menus {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		width: 100%;
	}

	.menus a {
		display: block;
		margin-bottom: 0.5rem;
	}

	.menus iframe {
		display: block;
		width: 100%;
		height: 600px;
		border: none;
		border: 1px solid var(--black);
		border-radius: 5px;
	}

	@media (max-width: 800px) {
		.menus {
			display: flex;
			flex-direction: column;
		}

		.links {
			flex-direction: column;
		}

		h1 {
			font-size: 2rem;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1em;
	}
	@media (max-width: 800px) {
		.gallery {
			grid-template-rows: 1fr 1fr;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
