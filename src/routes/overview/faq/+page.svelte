<script>
	import VR from '$lib/components/VR.svelte';
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
			The Apple Tree Inn is a historic estate built high atop a Lenox hill in 1885 by Cecile
			Bristed, a great-granddaughter of John Jacob Astor. She called it <em>The Orchard</em>; in
			1952 Roy Rappaport turned it into a hotel called <em>Avaloch</em>. Alice Broch of “Alice’s
			Restaurant” ran her third and final restaurant here, <em>Alice’s at Avaloch</em>. In 1983 it
			became the
			<em>Apple Tree Inn</em>.
		</p>
		<p>
			The summer is the peak season. From late June until early September, the world-famous
			Tanglewood music festival across the street has concerts almost every day. Not just the Boston
			Symphony Orchestra in residence, or the popular artists series featuring the likes of James
			Taylor and John Legend; our personal favorite is to pop into the free open rehearsals. Or you
			lifelong learners can try a lecture! For a swim, jump into our pool, with the best view on the
			property, or drive three minutes to the Stockbridge Bowl.
		</p>
		<p>
			In the fall, visitors tend to relax and “peep” the spectacular foliage. We can recommend a
			good local hike for any occasion — bird-watching at Parsons Marsh, a quick loop at Olivia’s
			Overlook, the waterfall at Stevens Glen, a workout at Monument Mountain. Pat the cows and get
			ice cream at High Lawn; go for a horse ride at HomeFarm or HorseWorks. It’s a great time to
			take in the area’s many historic houses and museums, from Edith Wharton to Norman Rockwell.
		</p>
		<p>
			In the winter, Bousquet ski mountain is a fifteen minute drive away. If you’re a little
			lazier, you can just sled on our hill. If you’re even lazier, like us, you can enjoy a “book”
			(or more often cocktail) by the lobby fire, the outdoor fire pit, the tavern’s fireplace <em
				>inglenook</em
			>, or one of our four guest rooms with real wood-burning private fireplaces. You know Melville
			wrote Moby Dick right up the road, right? What’s your excuse?
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
	<div class="comparison">
		<div>
			<h3>From Boston</h3>
			<p>
				Two hours once you’re out of the city. Take the Mass Pike for 123 miles (90% of the drive).
				Listen to “Sweet Baby James”. Stop at the 24/7 Charlton Service Plaza McDonald’s; beware the
				D’Angelos rest stops.
			</p>
		</div>
		<VR />
		<div>
			<h3>From NYC</h3>
			<p>
				Two and a half once you’re out of the city. Take the Taconic for 91 miles (⅔ of the drive).
				Try stopping at Troutbeck (+20 min) or Stissing House (+10 min) (check hours). The road
				becomes winding as you get closer; watch for deer.
			</p>
		</div>
		<VR />
		<div>
			<h3>From Albany</h3>
			<p>
				Forty five minutes. It’s slightly prettier if you take NY-22 S through New Lebanon (+ 12
				min) instead of the I-90 route.
			</p>
		</div>
	</div>
	<hr />
	<h2>What should I bring?</h2>
	<ul>
		<li>
			<strong>A car.</strong> The only things within walking distance are Tanglewood and Kripalu
			(about 10 minutes each); it’s a 45-minute walk into town. There’s basically no Uber, and the
			only taxis are more like limosuine services you have reserve ahead of time. There’s very
			little food delivery; the hotel has continental breakfast every morning, but our dinner
			restaurant is only open <a href="/dining/ostrich-room">certain nights</a>.
		</li>
		<li>
			<strong>Picnic supplies.</strong> If you’re going to Tanglewood, we think the best way to
			enjoy it is to arrive early and picnic on the lawn. People bring blankets, lawn chairs,
			coolers, baskets, bug spray, binoculars, cheese, crackers, beer, wine, candles, flashlights,
			etc.; read our
			<a href="/activities/tanglewood">Tanglewood guide</a> for more.
		</li>
		<li>
			<strong>A bathing suit.</strong> We have a lovely pool! Open between Memorial Day and Labor Day,
			sunrise to sunset. There’s a pond a couple minutes down the road and other swimming holes and little
			waterfalls in the area. We have pool towels but we don’t have goggles, swim caps, floaties, etc.
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
		the round room; two down to the Ostrich Room. Our motto is “Watch your step!” We sometimes have
		a golf cart available to ferry guests down the hill to Tanglewood; if you’re depending on that,
		call ahead.
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
	.comparison {
		display: grid;
		grid-template-columns: 1fr 12px 1fr 12px 1fr;
		gap: 1rem;
		text-align: center;
		margin-top: 2rem;
	}

	.comparison h3 {
		margin: 0;
	}

	.comparison > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	ul {
		max-width: 640px;
	}
</style>
