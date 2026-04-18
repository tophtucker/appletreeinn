<script>
	import { PortableText } from '@portabletext/svelte';
	import PlaceReference from '$lib/components/PlaceReference.svelte';
	import ItineraryMap from '$lib/components/ItineraryMap.svelte';

	let { data } = $props();
	let { itineraries } = data;

	const bodyLength = (body) =>
		body?.flatMap((block) => block.children?.map((span) => span.text) ?? []).join('').length ?? 0;

	console.log(itineraries);
</script>

<svelte:head>
	<title>The Berkshires • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
	<meta
		name="description"
		content="Do as we do! Tips for local activities, hikes, restaurants, shows, farms, and one bowling alley."
	/>
</svelte:head>

<div class="inner">
	<h1>The Berkshires</h1>

	<h2>Itineraries</h2>
	<p>
		Do as we do! Living here, Claire has some ideas from personal experience about how to spend a
		spare chunk of your time.
	</p>

	<div class="itineraries">
		{#each itineraries.filter((d) => d.title) as itinerary}
			<div class="itinerary">
				<div>
					<h3>{itinerary.title}</h3>
					<PortableText
						value={itinerary.body}
						components={{ marks: { placeReference: PlaceReference } }}
					/>
				</div>
				<ItineraryMap {itinerary} />
			</div>
		{/each}
	</div>

	<h3>Other pairings</h3>

	<div class="others">
		{#each itineraries
			.filter((d) => !d.title)
			.sort((a, b) => bodyLength(b.body) - bodyLength(a.body)) as itinerary}
			<div class="other">
				<ItineraryMap {itinerary} />
				<div>
					<PortableText
						value={itinerary.body}
						components={{ marks: { placeReference: PlaceReference } }}
					/>
				</div>
			</div>
		{/each}
	</div>

	<footer>
		Maps made with <a href="https://leafletjs.com/">Leaflet</a>. &copy;
		<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
		contributors &copy;
		<a href="https://carto.com/attributions">CARTO</a>.
	</footer>
</div>

<style>
	.itineraries {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}
	.itinerary {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
	}
	.itinerary h3 {
		margin: 0;
	}

	.others {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1em;
	}
	.other {
		display: grid;
		grid-template-rows: 140px 1fr;
		gap: 0.5em;
	}
	:global(.other p) {
		margin: 0;
	}

	footer {
		font-size: smaller;
		font-style: italic;
		margin-top: 4em;
	}
</style>
