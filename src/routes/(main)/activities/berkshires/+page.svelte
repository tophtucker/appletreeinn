<script>
	import { PortableText } from '@portabletext/svelte';
	import PlaceReference from '$lib/components/PlaceReference.svelte';
	import ItineraryMap from '$lib/components/ItineraryMap.svelte';

	let { data } = $props();
	let { itineraries } = data;

	console.log(itineraries);
	/*
[{"body":[{"_key":"73bc5e0d6445","_type":"block","children":[{"_key":"13bd2d4de2d5","_type":"span","marks":[],"text":"It’s not as suitable for sightseeing as the many Gilded Age mansions, but keep an eye out for remnants of the Berkshires’ old mills and factories hiding in plain sight. The William Stanley Overlook on the "},{"_key":"e68ca82b1005","_type":"span","marks":["9b3c40a8d16a"],"text":"Housatonic River Walk"},{"_key":"51c75286e5f8","_type":"span","marks":[],"text":" in Great Barrington commemorates the birthplace of his and George Westinghouse’s alternating current transformer (and of the Stanley water bottle). Some street lamps still trace back to Westinghouse. A former Crane Stationery headquarters is now a multifunction event venue in Dalton, aptly named "},{"_key":"acd623645ec7","_type":"span","marks":["12115e0d1ca0"],"text":"The Stationery Factory"},{"_key":"c0f08bb70f32","_type":"span","marks":[],"text":". The "},{"_key":"34478942d49e","_type":"span","marks":["bfb490233273"],"text":"Becket quarry"},{"_key":"1b58a387bf28","_type":"span","marks":[],"text":" was once a major source of Chester Blue granite, and is now a good swimming hole if you’re willing and able to scramble down some rocks. Berkshire Hathaway owes half its name to "},{"_key":"2e38647fcf61","_type":"span","marks":["ba038c6b51a9"],"text":"Berkshire Mill No. 1"},{"_key":"8a66e987367a","_type":"span","marks":[],"text":" up in Adams, now an apartment complex. "},{"_key":"74e3eecc1612","_type":"span","marks":["fec80f72b239"],"text":"Monument Mills"},{"_key":"c3be92d1b108","_type":"span","marks":[],"text":" is “the last un-condofied mill in the Berkshires” (used for photo shoots); "},{"_key":"df8781413faa","_type":"span","marks":["65132b1697ff"],"text":"Rising Paper Mill"},{"_key":"857a98dd7c72","_type":"span","marks":[],"text":" is still operating. "},{"_key":"12d6c34c26c0","_type":"span","marks":["12db537a5a01"],"text":"Building 100"},{"_key":"647dca909dd1","_type":"span","marks":[],"text":" is an icon of GE’s reign in Pittsfield, a hulking monolith of an electrical transformer assembly building."}],"markDefs":[{"_key":"9b3c40a8d16a","_type":"placeReference","place":{"_id":"86e72348-dae0-4dd2-afb8-54369b9a6b62","address":{"city":"Great Barrington","state":"MA","street":"7 Cottage St"},"coordinates":{"latitude":42.197247666090234,"longitude":-73.3609221115127},"gmaps":"https://maps.app.goo.gl/7jyLQjcvyk8eMn8L9","name":"Housatonic River Walk","website":"https://gbriverwalk.org/"}},{"_key":"ba038c6b51a9","_type":"placeReference","place":{"_id":"9faa5bbd-a166-435b-b0c1-4657a7b42e7d","address":{"city":"Adams","state":"MA","street":"1 Berkshire Square Suite 107"},"coordinates":{"latitude":42.62521836676273,"longitude":-73.11808787962147},"gmaps":"https://maps.app.goo.gl/uvYYP2xASE16cnTi8","name":"Berkshire Mill No. 1","website":"https://harvest-properties.com/project/berkshire-mill-apartments/"}},{"_key":"12115e0d1ca0","_type":"placeReference","place":{"_id":"943610af-f8b0-4679-b1be-99f48a66ec82","address":{"city":"Dalton","state":"MA","street":"63 Flansburg Ave"},"coordinates":{"latitude":42.474213113181186,"longitude":-73.17266944081199},"gmaps":"https://maps.app.goo.gl/qeNcoht4o6ts52vk9","name":"The Stationery Factory","website":"https://stationery-factory.com/"}},{"_key":"bfb490233273","_type":"placeReference","place":{"_id":"4e9fcda6-717f-4109-9db6-ab232cfbb2bd","address":{"city":"Becket","state":"MA"},"coordinates":{"latitude":42.251173683580916,"longitude":-73.02014568029017},"gmaps":null,"name":"Becket Quarry","website":"https://thetrustees.org/place/becket-historic-quarry-forest/"}},{"_key":"fec80f72b239","_type":"placeReference","place":{"_id":"a729b2e2-9e69-4b1d-96d2-7e53f3474320","address":{"city":"Housatonic","state":"MA","street":"170 Front St"},"coordinates":{"latitude":42.25757123089828,"longitude":-73.36303154792039},"gmaps":"https://maps.app.goo.gl/E4TQ3wVkYGTS6Qro8","name":"Monument Mills","website":"https://www.monumentmill.com/"}},{"_key":"65132b1697ff","_type":"placeReference","place":{"_id":"21469967-10f5-4534-9ff0-70904a85b1bf","address":{"city":"Housatonic","state":"MA","street":"295 Park St"},"coordinates":{"latitude":42.24040541012393,"longitude":-73.3573200103122},"gmaps":null,"name":"Rising Paper Mill","website":null}},{"_key":"12db537a5a01","_type":"placeReference","place":{"_id":"61d19601-0619-45b2-86db-065ae7aaf681","address":{"city":"Pittsfield","state":"MA","street":"1240 Tyler St"},"coordinates":{"latitude":42.45449385430793,"longitude":-73.2288457169825},"gmaps":"https://maps.app.goo.gl/t4RUUZtFQYf1r4EB8","name":"Building 100","website":"https://ethw.org/Archives:Transformers_at_Pittsfield,_part_1"}}],"style":"normal"}],"title":"Industrial heritage"}]
*/
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
	<h2>Walk to town</h2>

	<p>
		Wake up and give yourself 2.5 hours to walk from the inn into town via Under Mountain Rd (Lenox–
		4 mile walk). I think Under Mountain Rd has got to one of the prettiest roads in America. It
		literally has it all:
	</p>
	<ul>
		<li>scenic pastures</li>
		<li>a charming duck pond at Stonover Farm (an excellent high-end B&B)</li>
		<li>
			a stunning boardwalk that winds you through boggy woods before you emerge onto a gorgeous
			vista at Parsons Marsh Reserve (Lenox– 3 min drive), which adds 0.6 mi total out and back
		</li>
		<li>
			HomeFarm, an equestrian center in a Gilded Age estate farm that offers trail rides and you can
			also just swing by to pat the horses on the nose in their stables
		</li>
		<li>
			gorgeous historic homes, especially once Under Mountain turns into Cliffwood St. Particularly
			impressive are 101 Yokun (the Winthrop Estate/Ethelwynde), 106 Cliffwood (Underledge), and 80
			Cliffwood (Belvoir Terrace). My personal favorites are 71 Cliffwood and 13 Cliffwood.
		</li>
	</ul>
	<p>
		Right before you enter town, check out the Stebbins Fountain (Lenox– 5 min drive) at the
		intersection of Cliffwood and Main Sts. I love this little fountain because it makes me feel
		like I’m in Italy. I also love it because Emma Stebbins was a sculptor who was the first woman
		to receive a public art commission from New York City (the centerpiece of Central Park’s
		Bethesda Fountain) and she summered in Lenox. It was dedicated in her honor by three of her
		friends when she died in 1882.
	</p>

	<h2>Working morning</h2>
	<p>
		Grab a coffee at Lenox Coffee (Lenox – 5 min drive). My signature order is a hot mocha with one
		shot of espresso. And their pastries are pretty good–I think the best in town. Lenox Coffee is a
		real locals spot; see if you can eavesdrop on any good gossip.
	</p>
	<p>
		Read the Berkshire Eagle–the best local paper in America–or get some work done on your laptop in
		the Reading Room at the Lenox Library (Lenox– 5 min drive). I love this building because it
		reminds me of boarding school / makes me feel like I’m about to sign the Constitution.
	</p>

	<h2>Coffee and a hike</h2>
	<p>
		Wake up and drive to No. Six Depot (West Stockbridge – 8 min drive), a charming roastery with a
		mix of indoor and outdoor seating, from which the hotel gets its coffee.
	</p>
	<p>
		Stroll around West Stockbridge. There’s a bunch of good shops, a beautiful old book store, and
		some sculpture gardens — but our favorite thing to do is just to stand on the bridge over the
		river.
	</p>
	<p>Hike Stevens Glen (4 min drive), a 1.1 mile loop leading to a beautiful waterfall.</p>

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

	{#each itineraries as itinerary}
		<h2>{itinerary.title}</h2>
		<ItineraryMap {itinerary} />
		<PortableText
			value={itinerary.body}
			components={{ marks: { placeReference: PlaceReference } }}
		/>
	{/each}
</div>
