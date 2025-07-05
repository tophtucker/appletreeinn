<script>
	import { buildings } from '$lib/index.js';
	import Frame from '$lib/template/Frame.svelte';
	import Slideshow from '$lib/components/Slideshow.svelte';
	const building = buildings.find((d) => d.id === 'lodge');
</script>

<svelte:head>
	<title>Lodge • Apple Tree Inn • Lenox, MA</title>
</svelte:head>

<Frame>
	<div class="inner">
		<h1>Lodge</h1>
	</div>

	<div id="rooms" class="rooms-section">
		<div id="buildingContainer">
			{#each building.rooms as { room_number, room_name, floor, tags, pics }, i (room_name)}
				<div class="room">
					<Slideshow pics={pics.map((src) => ({ src: `/roompics/${src}`, title: room_name }))} />
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

	@media (max-width: 800px) {
		.room {
			display: flex;
			flex-direction: column;
		}
	}
</style>
