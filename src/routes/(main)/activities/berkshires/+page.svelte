<script>
	import { PortableText } from '@portabletext/svelte';
	import PlaceReference from '$lib/components/PlaceReference.svelte';
	import ItineraryMap from '$lib/components/ItineraryMap.svelte';

	let { data } = $props();
	let { itineraries } = data;

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
	<p>
		Do as we do! Living here, Claire has some ideas from personal experience about how to spend a
		spare chunk of your time.
	</p>

	{#each itineraries as itinerary}
		<h2 style="margin-bottom: 0;">{itinerary.title}</h2>
		<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1em;">
			<div>
				<PortableText
					value={itinerary.body}
					components={{ marks: { placeReference: PlaceReference } }}
				/>
			</div>
			<ItineraryMap {itinerary} />
		</div>
	{/each}

	<small
		><em>
			Maps made with <a href="https://leafletjs.com/">Leaflet</a>. &copy;
			<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
			contributors &copy;
			<a href="https://carto.com/attributions">CARTO</a>.
		</em>
	</small>
</div>
