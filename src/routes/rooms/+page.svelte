<script>
	import Frame from '$lib/template/Frame.svelte';
	import VR from '$lib/components/VR.svelte';
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
			Both buildings can access all hotel <a href="/activities/amenities">amenities</a>, such as
			free Wi-Fi, parking, and pool. Continental breakfast is included in the room rates. There are
			no elevators in either building; all rooms require stairs to access.
		</p>
		<div class="comparison-table">
			<div></div>
			<h2>Main House</h2>
			<VR style="grid-column: 3; grid-row: 1 / 10;" />
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
			<div>Front desk, tavern, lobby, tea & coffee station</div>
			<div>Tea & coffee station</div>

			<div class="header">Open</div>
			<div>All year</div>
			<div>Summer and Fall</div>
		</div>
	</div>
</Frame>

<style>
	.comparison-table {
		display: grid;
		grid-template-columns: max-content 1fr 15px 1fr;
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
</style>
