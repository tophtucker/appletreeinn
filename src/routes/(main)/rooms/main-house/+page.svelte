<script>
	import { buildings } from '$lib/index.js';
	import Slideshow from '$lib/components/Slideshow.svelte';
	import RenoNotice from '$lib/components/RenoNotice.svelte';
	const building = buildings.find((d) => d.id === 'main-house');
</script>

<svelte:head>
	<title>Main House • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
</svelte:head>

<RenoNotice
	>Our Main House guest rooms will be the same charming quirky experience as ever. Renovations focus
	on the common spaces: more beautiful, less confusing, better flow, and nicer windows!</RenoNotice
>

<div class="inner blur">
	<h1>Main House</h1>

	{#each building.rooms as { room_number, room_name, floor, tags, pics, overOstrich }, i (room_name)}
		<div class="room">
			<Slideshow pics={pics.map((src) => ({ src: `/roompics/${src}`, title: room_name }))} />
			<div>
				{#if room_number}
					<div>
						{floor === 1 ? '1st' : floor === 2 ? '2nd' : floor === 3 ? '3rd' : floor} floor, room
						{room_number?.split(', ')?.join(' or ')}
					</div>
				{/if}
				<h3>{room_name}</h3>
				<ul>
					{#each tags as tag}
						<li>{tag}</li>
					{/each}
					{#if overOstrich}
						<li>
							Located above Ostrich Room; can be noisy until closing (<a href="/dining/ostrich-room"
								>see hours</a
							>)
						</li>
					{/if}
				</ul>
			</div>
		</div>
	{/each}
</div>

<style>
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

	h3 {
		margin-top: 0;
	}

	@media (max-width: 800px) {
		.room {
			display: flex;
			flex-direction: column;
		}
	}
</style>
