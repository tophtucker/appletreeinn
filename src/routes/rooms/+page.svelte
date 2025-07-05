<script>
	import { page } from '$app/stores';
	import { buildings } from '$lib/index.js';
	import Frame from '$lib/template/Frame.svelte';
	import Slideshow from '$lib/components/Slideshow.svelte';

	const defaultTab = buildings[0].id;
	let tab = $state(new URLSearchParams($page.url.search).get('building') || defaultTab);
	const building = $derived(buildings.find((d) => d.id === tab));
	const setBuilding = (id) =>
		void window.history.replaceState(null, '', `/rooms?building=${(tab = id)}`);
</script>

<svelte:head>
	<title>Rooms • Apple Tree Inn • Lenox, MA</title>
</svelte:head>

<Frame>
	<div class="inner">
		<p>
			We have two buildings: the historic Main House, including our front desk, lounge, and tavern,
			where every guest room is unique; and the more basic and standardized Lodge, only open in the
			summer.
		</p>
		<p>
			There are no elevators in either building; all rooms require stairs to access. Continental
			breakfast is included in the room rates.
		</p>
		<div class="comparison-table">
			<div></div>
			<h2>Main House</h2>
			<div class="divider"></div>
			<h2>Lodge</h2>

			<div></div>
			<div><a class="cta" href="/rooms/main-house">See rooms</a></div>
			<div><a class="cta" href="/rooms/lodge">See rooms</a></div>

			<div></div>
			<img src="heropics/driveway.jpg" alt="Main House" />
			<img src="heropics/summer-annex.jpg" alt="Lodge" />

			<div class="header">Built</div>
			<div>1885</div>
			<div>1966</div>

			<div class="header">Rooms</div>
			<div>13 (all unique)</div>
			<div>21 (standardized)</div>

			<div class="header">Room types</div>
			<div>King, queen, 2 double, or suite</div>
			<div>Queen or 2 double</div>

			<div class="header">Amenities</div>
			<div>Front desk, tavern, lobby</div>
			<div>None</div>

			<div class="header">Open</div>
			<div>All year</div>
			<div>Memorial Day to Labor Day</div>
		</div>
	</div>
</Frame>

<style>
	.comparison-table {
		display: grid;
		grid-template-columns: max-content 1fr 1px 1fr;
		gap: 1rem 2rem;
		margin-top: 4rem;
	}
	.comparison-table div,
	.comparison-table h2 {
		text-align: center;
		margin: 0;
	}
	.comparison-table img {
		border: 3px double black;
		aspect-ratio: 5/3;
	}
	.header {
		color: var(--gray);
	}
	.comparison-table div a.cta {
		display: inline-flex;
	}
	.divider {
		grid-column: 3;
		grid-row: 1 / 10; /* span every row */
		background: var(--black); /* line colour */
	}
</style>
