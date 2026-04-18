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

	<h2>Other pairings</h2>

	<ul>
		<li>Get brunch at No Comply and then tour Naumkeag.</li>
		<li>
			Get takeout sandwiches at Lost Lamb. There’s nowhere to sit, so do the Housatonic Flats
			walking loop and eat your sandwich on a bench there. (Or substitute Berkshire Mountain Bakery,
			where Tartine founder Chad Robertson trained.)
		</li>
		<li>
			Get a classic diner breakfast at Paige’s Place and then walk around Ashintully, the ruins of
			an old historic home.
		</li>
		<li>
			Get a sandwich at Southfield Store, a nice old-fashioned general store, and then go see
			Umpachene Falls.
		</li>
		<li>
			For antiques, check out Elise Abrams Antiques and the Berkshire Galleries in Great Barrington;
			Linda Rosen Antiques, Corner House, and Mix On Main along Route 7 in Sheffield; Sandy Klempner
			@ Home and Shaker Mill Books in West Stockbridge; or Knollwood Antiques, Retro Pop Shop,
			Christopher James, Henry’s Eclectic, and Finders Keepers in Lee.
		</li>
		<li>
			Take your kids to all the animal spots: the little duck pond at Stoneover Farm, the stables at
			HomeFarm, the calf barn at High Lawn, and the variety of animals at the Hancock Shaker
			Village.
		</li>
		<li>
			For a rainy kid-friendly night, eat at Amici Italian or Xicohtencatl and then go bowling at
			Cove Bowling and Entertainment.
		</li>
		<li>
			For another rainy kid-friendly night, get fried chicken or cauliflower at Juju’s and then see
			a movie at the Triplex.
		</li>
		<li>
			If the kids have been extra good, buy them a toy at Acorn in Egremont (fancier and farther
			away) or The Gifted Child in Lenox (less fancy and closer).
		</li>
		<li>
			Follow the “Arlo Guthrie’s Historic Garbage Trail Walk to Massacree HD” six miles through
			Stockbridge and Great Barrington along the path described in “Alice’s Restaurant Massacree”
			(Alice being our former owner).
		</li>
		<li>
			If our live music isn’t enough, try the Lion’s Den, Dream Away Lodge, Stationery Factory, or
			Egremont Barn. Mark Greenlaw’s <a href="https://musicintheberkshires.com/"
				>Music in the Berkshires</a
			> is the definitive guide to smaller local shows (aside from Tanglewood).
		</li>
		<li>
			If you’re not tired when the Ostrich Room kicks you out, the classic place to go next is Ombra
			(5 minute drive to Lenox downtown).
		</li>
	</ul>

	<small
		>Maps made with <a href="https://leafletjs.com/">Leaflet</a>. &copy;
		<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
		contributors &copy;
		<a href="https://carto.com/attributions">CARTO</a>.</small
	>
</div>
