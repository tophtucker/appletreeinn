<script>
	import XR from '$lib/components/XR.svelte';
	import { ostrichRoom, formatDayRange } from '$lib/index.js';
	const ostrichRange = formatDayRange(ostrichRoom.hours.map((d) => d[0]));
</script>

<svelte:head>
	<title>FAQ • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<div class="inner">
	<h1>FAQ</h1>
	<h2>What’s the deal?</h2>
	<div class="prose-columns">
		<p>
			The Apple Tree Inn is a <a href="/about/history">historic estate</a> built high atop a Lenox
			hill in 1885 by Cecile Bristed, a great-granddaughter of John Jacob Astor. She called it
			<em>The Orchard</em>; in 1952 Roy Rappaport turned it into a hotel called <em>Avaloch</em>.
			Alice Brock of “Alice’s Restaurant” ran her third and final restaurant here,
			<em>Alice’s at Avaloch</em>. In 1983 it became the
			<em>Apple Tree Inn</em>.
		</p>
		<p>
			We have thirteen unique <a href="/rooms">guest rooms</a> in the historic Main House, plus
			twenty-one more basic rooms in the seasonal Lodge. The Main House has the front desk; the
			lobby; the porch; the quirky “round room”; and our tavern,
			<a href="/dining/ostrich-room">The Ostrich Room</a>, which is open to the public {ostrichRange}
			for food, drinks, and <a href="/music">live music</a>.
		</p>
		<p>
			We’re just outside the town of Lenox and close to Stockbridge and Great Barrington, at the far
			Western end of the Massachusetts Turnpike, almost at the New York border, in <a
				href="/activities/berkshires">the Berkshires</a
			>. The area is generally known for performing arts, historic homes, wellness, and hiking.
		</p>
		<p>
			The summer is the peak season. From late June until early September, the world-famous
			<a href="/activities/tanglewood">Tanglewood</a> music festival across the street has concerts almost
			every day. Popular artists include James Taylor and Jon Batiste; the Boston Symphony Orchestra
			is in residence all summer, and we love to pop into one of their casual open rehearsals. Swim in
			our pool, with the best view on the property, or the Stockbridge Bowl, a lake three minutes away.
		</p>
		<p>
			The spring and fall are more relaxed. Pat the cows and get ice cream at High Lawn. Ride horses
			at HomeFarm or HorseWorks. Tour Edith Wharton’s historic home or the Norman Rockwell Museum.
			Do yoga at Kripalu. We can recommend a good local hike for any occasion — bird-watching at
			Parsons Marsh, a quick loop at Olivia’s Overlook, the waterfall at Stevens Glen, or a workout
			at Monument Mountain. The Appalachian Trail passes by ten miles to the east. The autumn
			foliage is spectacular for “peeping”.
		</p>
		<p>
			For the winter, Bousquet ski mountain is fifteen minutes away (and Catamount is thirty). If
			you’re a little lazier, you can just sled on our hill. If you’re even lazier, like us, you can
			enjoy a “book” (or more often a cocktail) by the lobby fire, the outdoor fire pit, the
			tavern’s fireplace <em>inglenook</em>, or one of our four guest rooms with real wood-burning
			private fireplaces. Maybe you’ll write. You know Melville wrote Moby Dick right up the road,
			right? What’re you doing?
		</p>
	</div>
	<hr />
	<h2>How do I get there?</h2>
	<p>
		The nearest airport is Albany, but it has few direct flights, so we typically fly into Boston
		Logan. There are buses to downtown Lenox, but we definitely recommend coming with a car!
		Tanglewood and Kripalu are the only things within walking distance of the hotel; it’s a
		40-minute walk (or 3-minute drive) to downtown Lenox, and there are basically zero taxis or
		Ubers around.
	</p>
	<div class="grid-or-flex trio">
		<div>
			<h3>From Boston</h3>
			<div>
				Two hours once you’re out of the city. Take the Mass Pike for 123 miles (90% of the drive).
				Listen to “Sweet Baby James”. Stop at the 24/7 Charlton Service Plaza McDonald’s; beware the
				D’Angelos rest stops.
			</div>
		</div>
		<XR />
		<div>
			<h3>From NYC</h3>
			<div>
				Two and a half once you’re out of the city. Take the Taconic for 91 miles (⅔ of the drive).
				Stop to eat at <a href="https://troutbeck.com/">Troutbeck</a> (+20 min) or
				<a href="https://www.stissinghouse.com/">Stissing House</a> (+10 min) (check hours). The road
				becomes winding as you get closer; watch for deer.
			</div>
		</div>
		<XR />
		<div>
			<h3>From Albany</h3>
			<div>
				Forty five minutes. It’s slightly prettier if you take NY-22 S through New Lebanon (+ 12
				min) instead of the I-90 route.
			</div>
		</div>
	</div>
	<hr />
	<h2>What should I bring?</h2>
	<ul>
		<li>
			<strong>A car.</strong> The only things within walking distance are Tanglewood and Kripalu
			(about 10 minutes each); it’s a 45-minute walk into town. There’s basically no Uber, and the
			only taxis are more like limosuine services you have reserve ahead of time. There’s very
			little food delivery; the hotel has continental breakfast every morning, but our
			<a href="/dining/ostrich-room">dinner restaurant</a>
			is only open {ostrichRange}
		</li>
		<li>
			<strong>Picnic supplies.</strong> If you’re going to Tanglewood, we think the best way to
			enjoy it is to arrive early and picnic on the lawn. People bring blankets, lawn chairs,
			coolers, baskets, bug spray, binoculars, cheese, crackers, beer, wine, candles, flashlights,
			etc.; read our
			<a href="/activities/tanglewood">Tanglewood guide</a> for more.
		</li>
		<li>
			<strong>A bathing suit.</strong> We have a lovely pool! Open between Memorial Day and Labor
			Day, sunrise to sunset. There’s a lake three minutes down the road and other swimming holes
			and little waterfalls <a href="/activities/berkshires">in the area</a>. We have pool towels
			but we don’t have goggles, swim caps, floaties, etc.
		</li>
		<li>
			<strong>Hiking gear.</strong> There’s lots of hiking opportunities in the area, of varying difficulties.
			Bring sneakers, a water bottle, and long pants (if you’re worried about ticks).
		</li>
		<li>
			<strong>Tablet or laptop.</strong> There are no TVs in the room! You can just bask in the natural
			beauty of the Berkshires and watch the clouds go by, but if you want to watch screen stuff, you’ll
			have to bring your own screen.
		</li>
	</ul>
	<hr />
	<h2>Is the property accessible?</h2>
	<p>
		The downside of being historic is that our buildings are zany. All access, and all guest rooms,
		require at least some stairs; we have no elevators. As examples (not comprehensive): it’s four
		steps up to the Main House lobby; 21 steps up to the 2nd floor, where guest rooms begin; and 15
		steeper steps to the 3rd floor. There are random little internal steps, too: one or two down to
		the round room; two down to the Ostrich Room. The Lodge is 12 steps down from the upper parking
		lot or 12 steps up from the road. Our motto is “Watch your step!” We sometimes have a golf cart
		available to ferry guests down the hill to Tanglewood; if you’re depending on that, call ahead.
	</p>
	<hr />
	<h2>What do you have for kids?</h2>
	<p>
		We have high chairs for the restaurant, one pack ’n play, lots of board games, sleds for winter,
		and tons of lawn space to play around, both flat and hilly, including plenty of space far from
		the road; B.Y.O. wiffle ball. We have a hotel dog, Max, who is great with kids and will play
		fetch with them forever. Our <a href="/activities/berkshires">local guide</a> includes some kid-friendly
		activities.
	</p>
</div>

<style>
	.grid-or-flex h3 {
		margin: 0;
	}

	.grid-or-flex > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	@media (max-width: 800px) {
		.grid-or-flex {
			padding: 0 1rem;
		}
	}

	ul {
		max-width: 640px;
	}
</style>
