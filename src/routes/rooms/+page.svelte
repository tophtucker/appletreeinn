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
		<h1>Rooms</h1>
		<p>
			We have two buildings: the historic Main House, including our front desk, lounge, and tavern,
			where every guest room is unique; and the more basic and standardized Lodge, only open in the
			summer.
		</p>
	</div>

	<div id="rooms" class="rooms-section">
		<div class="tabs">
			<div class="spacer"></div>
			{#each buildings as building (building.id)}
				<button
					onclick={() => setBuilding(building.id)}
					class={`tab ${tab === building.id ? 'active' : ''}`}
				>
					{building.title}
				</button>
				<div class="gap"></div>
			{/each}
			<div class="spacer grow"></div>
		</div>
		<div id="buildingContainer">
			<div class="building">
				<img
					src={building.img}
					alt={building.title}
					style="aspect-ratio: 3 / 2; width: 100%; object-fit: cover;"
				/>
				<div style="display: flex; flex-direction: column; gap: 1em;">
					<p>
						{building.desc}
					</p>
					<p>
						There are no elevators in either building; all rooms require stairs to access.
						Continental breakfast is included in the room rates.
					</p>
				</div>
			</div>
			<hr style="margin-bottom: 0" />
			{#each building.rooms as { room_number, room_name, floor, tags, pics }, i (room_name)}
				<div class="room">
					<Slideshow pics={pics.map((src) => ({ src: `roompics/${src}`, title: room_name }))} />
					<div>
						{#if room_number}
							<small
								>{floor === 1 ? '1st' : floor === 2 ? '2nd' : floor === 3 ? '3rd' : floor} floor, room
								{room_number?.split(', ')?.join(' or ')}</small
							>
						{/if}
						<h3>{room_name}</h3>
						<ul>
							{#each tags as tag}
								<li>{tag}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Frame>

<style>
	.spacer {
		width: var(--gutter);
		border-bottom: 1px solid var(--black);
	}

	.gap {
		width: 1em;
		border-bottom: 1px solid var(--black);
	}

	.grow {
		flex-grow: 1;
	}

	.tabs {
		display: flex;
		align-items: end;
		justify-content: center;
		margin-top: 2rem;
	}

	.tab {
		text-decoration: none;
		color: var(--black);
		margin: 0;
		position: relative;
		background: none;
		border: none;
		border-top: 1px solid var(--black);
		border-right: 1px solid var(--black);
		border-left: 1px solid var(--black);
		padding: 0.5em;
		cursor: pointer;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		font-size: larger;
	}

	.tab.active {
		text-decoration: none;
		border-bottom: 1px solid white;
		z-index: 2;
	}

	.tab:not(.active) {
		border-bottom: 1px solid var(--black);
	}

	#buildingContainer {
		padding: 1em var(--gutter);
	}

	.room {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 1em;
		border-bottom: 1px solid var(--black);
		padding: 1em 0;
	}

	.room:last-child {
		border-bottom: none;
	}
	.building {
		display: flex;
		align-items: center;
		gap: 1em;
		margin: 1em 0;
	}

	.building p {
		max-width: 460px;
		margin: 0;
	}

	.building img {
		width: 100%;
		max-width: 400px;
		border-radius: 50%;
		border: 1px solid var(--black);
	}

	@media (max-width: 800px) {
		.building,
		.room {
			display: flex;
			flex-direction: column;
		}
	}
</style>
