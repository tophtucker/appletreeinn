<script>
	import { ostrichRoom, formatDayRange } from '$lib/index.js';
	const ostrichRange = formatDayRange(ostrichRoom.hours.map((d) => d[0]));
</script>

<svelte:head>
	<title>Amenities • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<div class="inner">
	<h1>Amenities</h1>

	<dl>
		<dt>COFFEE AND TEA</dt>
		<dd>
			Complimentary coffee and tea are served in the Round Room servery all day long. Fresh brewed
			coffee from our favorite local coffee roastery, No. Six Depot, is available each morning,
			until supplies run out. After that, please help yourself to Keurig pods. We also offer a
			selection of Harney & Sons teas at all times.
		</dd>

		<dt>DINING</dt>
		<dd>
			We have a complimentary continental breakfast buffet every day and a tavern open {ostrichRange};
			see <a href="/dining">dining</a>.
		</dd>

		<dt>GAMES</dt>
		<dd>
			Board games and packs of cards can be found in the Living Room; most are stored in the cabinet
			outside of Reception. A bocce set is generally set up by the yard; ask at the Front Desk. We
			have giant Jenga somewhere in the basement, too!
		</dd>

		<dt>HEAT AND AIR CONDITIONING</dt>
		<dd>
			All rooms are heated with baseboard heaters that can be adjusted individually. The dial is
			located either on the heater itself or on the wall. All rooms are also air conditioned with
			in-window or in-wall units that can be adjusted individually.
		</dd>

		<dt>HIGH CHAIRS</dt>
		<dd>Available for dining upon request. (Limited inventory.)</dd>

		<dt>ICE</dt>
		<dd>A cooler filled with ice is located in the Round Room servery.</dd>

		<dt>MICROWAVE</dt>
		<dd>A communal microwave is located in the Round Room servery.</dd>

		<dt>PARKING</dt>
		<dd>
			There is ample free parking on the property. The lower lot is closer to the Main House; the
			larger upper lot is closer to the Lodge. All guests are welcome to use whichever lot suits
			their needs.
		</dd>

		<dt>PACK ’N PLAY</dt>
		<dd>Available to borrow upon request. (Ask early — we only have one!)</dd>

		<dt>POOL</dt>
		<dd>
			The pool is located beyond the Lodge and the Carriage House and is open from dawn to dusk from
			the Friday of Memorial Day Weekend to the Monday of Labor Day Weekend. Pool towels are
			provided in your room. There is no lifeguard.
		</dd>

		<dt>REFRIGERATORS</dt>
		<dd>
			In the Main House, there is a communal refrigerator in the Round Room servery. In the Lodge,
			there is a communal refrigerator off of the entryway on the first floor.
		</dd>

		<dt>WI-FI</dt>
		<dd>
			There is fast free Wi-Fi available throughout the property. It even works well from the picnic
			benches and pool!
		</dd>

		<dt>YOGA MATS</dt>
		<dd>Available to borrow upon request.</dd>
	</dl>

	<hr />

	<h2>How Claire would use the hotel</h2>
	<p>Living here, we have some opinions about how to make the most of it!</p>

	<ul>
		<li>
			Stay in the Main House and book Room 2 (Orchard). It has its own balcony and the best light.
		</li>
		<li>
			Bring your breakfast out to the Front Porch. You can also work out here with a laptop. There
			is good Wi-Fi everywhere on property.
		</li>
		<li>
			Throw Max the dog a stick, ball, anything. He will always return it. He will never get tired.
		</li>
		<li>
			In the summer, add a night to your stay so that you have a leisurely day to lounge by the
			pool. We have great chaises, umbrellas, and our pool has the best view of any pool in the
			Berkshires.
		</li>
		<li>
			In the winter, sit by the lobby wood-burning fireplace and best your travel partner in chess,
			backgammon, cribbage, or cards.
		</li>
		<li>
			Instead of sitting at a table in the Ostrich Room, sit at a table in the lobby so that you can
			easily hear your dinner conversation, but you still get the Ostrich Room live music vibes
			wafting out to you.
		</li>
		<li>Bring a drink out to the firepit to close out the night.</li>
		<li>Talk to us at the desk to get advice for your stay! We are here to help!</li>
		<li>Come on a day besides a Friday or Saturday. Weekdays are much, much cheaper year-round!</li>
	</ul>

	<hr />

	<h2>Non-amenities</h2>
	<p>
		There are no TVs, no elevators, no electric car charger, no brunch, and no lunch. On some
		nights, there’s no dinner; check the <a href="/dining/ostrich-room">Ostrich Room</a> hours if
		you’re counting on it. Sorry!! If you’re hungry or in need of entertainment we have lots of
		recommendations for
		<a href="/activities/berkshires">around town</a>!
	</p>
</div>

<style>
	dt {
		font-family: watkins;
	}
	dd {
		margin-bottom: 1rem;
		max-width: 640px;
	}
</style>
