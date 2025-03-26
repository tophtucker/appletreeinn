<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import { loadEvents, formatDate, ostrichRoom } from '$lib/index.js';
	import WeekHours from '../WeekHours.svelte';

	let events = $state(undefined);
	(async function () {
		events = await loadEvents();
	})();

	const pics = [
		{ src: './ostrich-room/IMG_8470.jpg', title: 'Live music in the Ostrich Room' },
		{ src: './heropics/ostrich2.jpg', title: 'The Ostrich Room' },
		{ src: './heropics/ostrich3.jpg', title: 'The Ostrich Room' },
		{ src: './heropics/ostrich4.jpg', title: 'The Ostrich Room' }
	];
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food (and often live music) Wed.–Sat. at the Apple Tree Inn"
	/>
</svelte:head>

<Header />

<div class="inner">
	<div class="intro">
		<div>Drinks • Food • Music</div>
		<h1>The Ostrich Room</h1>
		<div>All are welcome</div>
		<div class="notice">Closed April 3 – 5</div>
	</div>
	<div class="hours-wrapper">
		<WeekHours data={ostrichRoom} {events} />
		<em>Limited reservations available for parties of 5 or more; call (413) 637-1910.</em>
	</div>
	<hr />
	<h2 id="menus">Menus</h2>
	<div class="menus">
		<img src="ostrich-room/menu1.png" alt="Food menu" />
		<img src="ostrich-room/menu2.png" alt="Drinks menu" />
	</div>
	<p><a href="ostrich-room/menu.pdf">View as PDF</a></p>
	<hr />
	<div class="gallery">
		<img src="./ostrich-room/cauliflower.jpg" alt="Food at Baladi" />
		<img src="./ostrich-room/fireplace.jpg" alt="Food at Baladi" />
		<img src="./ostrich-room/cocktail.jpg" alt="Food at Baladi" />
		<img src="./heropics/ostrich3.jpg" alt="Food at Baladi" />
		<img src="./ostrich-room/IMG_6961.jpg" alt="Food at Baladi" />
		<img src="./ostrich-room/empty.jpg" alt="Food at Baladi" />
	</div>
	<hr />
	<h2 id="calendar">Live music calendar</h2>
	<p>
		See <a href="https://instagram.com/appletreeinn">Instagram</a>
		for previews and updates. Email Jenny Rubin at
		<a href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a> for information about booking
		acts.
	</p>
	{#if events === undefined}
		<div style="padding-bottom: 20em;">Loading music calendar…</div>
	{:else if events === null}
		We can’t load the events calendar right now. Try again in a minute or see our <a
			href="https://instagram.com/appletreeinn">Instagram</a
		> for posts about upcoming shows.
	{:else}
		<table>
			<tbody>
				{#each events.future as { date, description }}
					<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
				{/each}
			</tbody>
		</table>
		<details>
			<summary>Past shows</summary>
			<table>
				<tbody>
					{#each events.past as { date, description }}
						<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
					{/each}
				</tbody>
			</table>
		</details>
	{/if}
	<hr />
	<p>
		Originally built in 1899 by then-owners Henry Pease and Katharine Di Pollone as a billiards
		room, our tavern is locally famous for its live music program and the roaring fires in the <em
			>inglenook</em
		> (that’s a fireplace nook with facing benches). It gets its name from its chandelier of real ostrich
		eggs. Sean’s always thinking of great cocktails, new and old, seasonal and timeless. And Hagai’s
		cooking elevates fries to an art.
	</p>
</div>

<Footer />

<style>
	.intro {
		box-shadow: inset 0 0 10em 5vw #000;
		background-image: url('/ostrich-room/packed.jpg');
		background-size: cover;
		background-position: 50% 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 1rem;
		border-radius: 5px;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		position: relative;
	}

	.intro div {
		opacity: 0.6;
		color: var(--tan);
		text-align: center;
	}

	h1 {
		font-size: 5vw;
		text-shadow: 3px 3px 3px black;
		margin: 3em 1em 3em 1em;
		text-align: center;
	}

	.notice {
		position: absolute;
		padding: 1rem;
		background: red;
		text-transform: uppercase;
		color: white;
		opacity: 1 !important;
		bottom: 0;
		transform: rotate(-7deg);
		border: 1px solid white;
	}

	@media (min-width: 1200px) {
		h1 {
			font-size: 80px;
		}
	}

	@media (min-width: 420px) and (max-width: 1200px) {
		h1 {
			font-size: 6vw;
		}
	}

	@media (max-width: 420px) {
		h1 {
			font-size: 2em;
			margin: 3em 1em;
		}
		.intro div {
			font-size: small;
		}
	}

	.hours-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
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

	.menus img {
		width: 100%;
		border: 1px solid var(--brown);
		border-radius: 5px;
	}

	table {
		margin: 1em 0;
		border-collapse: collapse;
	}

	td {
		padding: 0 1em 0.5em 0;
	}

	details {
		margin-bottom: 1em;
	}

	@media (max-width: 800px) {
		.menus {
			display: flex;
			flex-direction: column;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1em;
	}
	.gallery img {
		flex: 1 1 auto;
		max-width: 100%;
		height: auto;
		min-height: 1px;
		border-radius: 5px;
		aspect-ratio: 500/643;
		object-fit: cover;
	}
	@media (max-width: 800px) {
		.gallery {
			grid-template-rows: 1fr 1fr;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
