<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Slideshow from '../Slideshow.svelte';
	import { loadEvents, formatDate } from '$lib/index.js';

	let data = $state(undefined);
	(async function () {
		data = await loadEvents();
	})();

	const pics = [
		{ src: './heropics/ostrich2.jpg', title: 'The Ostrich Room' },
		{ src: './heropics/ostrich3.jpg', title: 'The Ostrich Room' },
		{ src: './heropics/ostrich4.jpg', title: 'The Ostrich Room' }
	];
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food Wed.–Sat., 4–10 pm, with live music on Wed. and Sat., at the Apple Tree Inn"
	/>
</svelte:head>

<Header />

<div class="inner">
	<div class="grid-or-flex">
		<div>
			<h1>The Ostrich Room</h1>
			<p><s>Ten</s> Eight things to know:</p>
			<ol>
				<li>We are open Wednesday – Saturday evenings for both guests and the public.</li>
				<li>Drinks start at 4 p.m. and food starts at 5 p.m.</li>
				<li>We close at 10 p.m.</li>
				<li>
					We have live music twice a week — Wednesdays & Saturdays — from approximately 7:30–9:30
					p.m. (see <a href="#calendar">schedule</a>).
				</li>
				<li>
					We do not take reservations & we do not keep a wait list. All tables are first come, first
					serve, including for hotel guests!
				</li>
				<li>If you snag a table in the Ostrich Room, we offer full waiter service.</li>
				<li>
					You can also find a spot to sit in the lobby, on the front porch, or outside on the picnic
					tables and then come in and order at the bar. Take your drinks with you and we’ll bring
					the food out to you when it’s ready. We will bus your table when you’re done.
				</li>
				<li>
					Life is a work in progress! All of the above may change in the future! Thank you for being
					here!
				</li>
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
	<h2 id="menus">Sample menus</h2>
	<p>The menu’s always changing, but here are a couple recent ones for drinks and food.</p>
	<div class="menus">
		<img src="img/menu-drinks.png" alt="Drinks menu" />
		<img src="img/menu-food.png" alt="Food menu" />
	</div>
	<hr />
	<h2 id="calendar">Live music calendar</h2>
	<p>
		Live music goes from around 7:30 to around 9:30 p.m. on Wednesdays and Saturdays. Shows are
		subject to change… the farther out, the more subject! See <a
			href="https://instagram.com/appletreeinn">Instagram</a
		> for previews and updates.
	</p>
	{#if data === undefined}
		<div style="padding-bottom: 20em;">Loading music calendar…</div>
	{:else if data === null}
		We can’t load the events calendar right now. Try again in a minute or see our <a
			href="https://instagram.com/appletreeinn">Instagram</a
		> for posts about upcoming shows.
	{:else}
		<table>
			<tbody>
				{#each data.future as { date, description }}
					<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
				{/each}
			</tbody>
		</table>
		<details>
			<summary>Past shows</summary>
			<table>
				<tbody>
					{#each data.past as { date, description }}
						<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
					{/each}
				</tbody>
			</table>
		</details>
	{/if}
	<p>
		Email Jenny Rubin at <a href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a> for information
		about booking acts.
	</p>
</div>

<Footer />

<style>
	h1 {
		margin-bottom: 0;
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

	@media (max-width: 800px) {
		.menus {
			display: flex;
			flex-direction: column;
		}
	}
</style>
