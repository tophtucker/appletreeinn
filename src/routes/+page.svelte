<script>
	import { page } from '$app/stores';
	import { buildings } from '$lib/index.js';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Intro from './Intro.svelte';
	import Slideshow from './Slideshow.svelte';
	import Events from './Events.svelte';
	import Pin from './Pin.svelte';

	const defaultTab = buildings[0].id;
	let tab = $state(new URLSearchParams($page.url.search).get('building') || defaultTab);
	const building = $derived(buildings.find((d) => d.id === tab));
	const setBuilding = (id) =>
		void window.history.replaceState(null, '', `/?building=${(tab = id)}`);
</script>

<svelte:head>
	<title>Apple Tree Inn • Lenox, MA</title>
	<link rel="stylesheet" href="styles.css" />
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<Header />

<Intro />

<Events />

<nav>
	<div class="links">
		<span style="display: flex; align-items: center; gap: 5px">
			<Pin />
			<a href="https://maps.app.goo.gl/vpsxJ5KnzqR1n78q8" target="_blank"
				><span class="hide-mobile">10 Richmond Mountain Road,{' '}</span>Lenox, MA</a
			>
		</span>
	</div>
	<div class="links">
		<a href="https://www.instagram.com/appletreeinn" target="_blank">Instagram</a>
		<a href="mailto:info@appletreeinnlenox.com" target="_blank">Email</a>
		<a href="tel:1.413.637.1910" target="_blank">(413) 637-1910</a>
	</div>
</nav>

<div id="rooms" class="rooms-section">
	<div class="tabs-wrapper">
		<div class="tabs">
			<em class="hide-mobile">Choose your building</em>
			{#each buildings as building (building.id)}
				<button
					onclick={() => setBuilding(building.id)}
					class={`tab ${tab === building.id ? 'active' : ''}`}
				>
					{building.title}
				</button>
			{/each}
		</div>
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
					There are no elevators in either building; all rooms require stairs to access. Continental
					breakfast is included in the room rates.
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

<Footer />

<style>
	.tabs-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 2em;
		border-bottom: 1px solid var(--brown);
	}

	.tabs {
		width: 1200px;
		max-width: 100%;
		display: flex;
		gap: 1em;
		align-items: center;
		justify-content: center;
	}

	.tab {
		text-decoration: none;
		color: var(--brown);
		margin: 0;
		position: relative;
		bottom: -1px;
		background: none;
		border: none;
		border-top: 1px solid var(--brown);
		border-right: 1px solid var(--brown);
		border-left: 1px solid var(--brown);
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

	#buildingContainer {
		padding: 1em var(--gutter);
	}

	.room {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 1em;
		border-bottom: 1px solid var(--brown);
		padding: 1em 0;
	}

	.room:last-child {
		border-bottom: none;
	}
	.building {
		display: flex;
		justify-content: center;
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
		border: 1px solid var(--brown);
	}

	@media (max-width: 800px) {
		.building,
		.room {
			display: flex;
			flex-direction: column;
		}
	}
</style>
