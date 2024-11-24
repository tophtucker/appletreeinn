<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Slideshow from '../Slideshow.svelte';
	import { loadEvents, formatDate, ostrichRoom } from '$lib/index.js';
	import OpenSignBig from '../OpenSignBig.svelte';

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
	<div class="grid-or-flex">
		<div>
			<h1>The Ostrich Room</h1>
			<div style="margin-top: 1em">
				<OpenSignBig data={ostrichRoom} {events} />
			</div>
			<h2>Five things to know</h2>
			<ol>
				<li>
					We do not take reservations and we do not keep a wait list. All tables are “first come,
					first served”, including for hotel guests.
				</li>
				<li>If you sit in the Ostrich Room, we will come to your table to take your order.</li>
				<li>
					If you want to sit elsewhere, please order at the bar. Take your drinks with you, and
					we’ll bring the food.
					<ul>
						<li>
							Feel free to sit in the lobby, on the porch, or outside at the picnic tables. It’s a
							nice view!
						</li>
					</ul>
				</li>
				<li>We will clear your table when you’re done.</li>
				<li>Life is a work in progress! All this may change! Thank you for being here!</li>
			</ol>
			<p>
				Originally built in 1899 by then-owners Henry Pease and Katharine Di Pollone as a billiards
				room, our tavern is locally famous for its music program and the roaring fires in the <em
					>inglenook</em
				> (that’s a fireplace nook with facing benches).
			</p>
		</div>
		<Slideshow {pics} />
	</div>
	<hr />
	<h2 id="menus">Menus</h2>
	<div class="menus">
		<img src="ostrich-room/menu-drinks.png" alt="Drinks menu" />
		<img src="ostrich-room/menu-food.png" alt="Food menu" />
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
</div>

<Footer />

<style>
	h2 {
		margin: 1em 0 0.5em 0;
	}

	.menus {
		display: grid;
		grid-template-columns: 1.305fr 1fr;
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
</style>
