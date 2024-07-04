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
			<div
				style="padding: 1em; border: 1px solid var(--brown); border-radius: 5px; background: var(--tan); margin: 2em 0;"
			>
				<h2>Holiday week schedule</h2>
				<ul>
					<li>Wed July 3rd — closing early: 4-8pm drinks & food; no live music</li>
					<li>Thu July 4th — closing early: 4-8pm drinks & food</li>
					<li>Fri July 5th — business as usual: 4-10pm drinks & 5-10pm food</li>
					<li>
						Sat July 6th — business as usual: 4-10pm drinks & 5-10pm food; live music, act TBD
					</li>
				</ul>
			</div>
			<p><s>Ten</s> Eight things to know:</p>
			<ol>
				<li>We are open Wednesday - Saturday evenings.</li>
				<li>Drinks start at 4 p.m. and food starts at 5 p.m.</li>
				<li>We close at 10 p.m.</li>
				<li>
					We have live music twice a week — Wednesdays & Saturdays — from approximately 7:30 - 9:30
					p.m. (see <a href="https://instagram.com/appletreeinn">Instagram</a> for show details).
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
		subject to change… the farther out, the more subject! Email Jenny, <a
			href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a
		>, for information about booking acts.
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
				{#each data as { date, description }}
					<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

<Footer />

<style>
	h1 {
		margin-bottom: 0;
	}

	.menus {
		display: grid;
		grid-template-columns: 8.5fr 5.5fr;
		gap: 1em;
		width: 100%;
	}

	.menus img {
		width: 100%;
		border: 1px solid var(--brown);
		border-radius: 5px;
	}

	table {
		margin: 2em 0;
		border-collapse: collapse;
	}

	td {
		padding-right: 1em;
		padding-bottom: 0.5em;
	}

	@media (max-width: 800px) {
		.menus {
			display: flex;
			flex-direction: column;
		}
	}
</style>
