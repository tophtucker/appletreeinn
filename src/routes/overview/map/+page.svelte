<script>
	import Frame from '$lib/template/Frame.svelte';
</script>

<svelte:head>
	<title>Property map • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<Frame>
	<div class="inner">
		<h1>Property map</h1>

		<img src="/avaloch/map/map.svg" alt="Property map with labels 1–6" />

		<div class="item">
			<h3>1.</h3>
			<img src="/avaloch/img/map-lower-lot.jpg" alt="Lower parking" />
			<div>
				<h3>Lower parking lot</h3>
				<p>
					The smaller lower lot is right next to the Main House, where all guests check in. It’s
					also closest for the Ostrich Room.
				</p>
			</div>
		</div>
		<div class="item">
			<h3>2.</h3>
			<img src="/heropics/driveway.jpg" alt="Main House" />
			<div>
				<h3>Main House</h3>
				<p>
					Built in 1885, the Main House is the heart of the property. Enter the main (west) entrance
					from the lower parking lot. The front desk is just inside, where all guests check in.
					Beyond is our lobby, round room, and the Ostrich Room; upstairs are thirteen unique guest
					rooms.
				</p>
				<a href="/rooms/main-house" class="cta">See rooms</a>
			</div>
		</div>
		<div class="item">
			<h3>3.</h3>
			<img src="/avaloch/img/wanda.jpg" alt="Lower parking" />
			<div>
				<h3>The Ostrich Room</h3>
				<p>
					Our historic tavern is open to the public for dinner, drinks, and live music. Located
					inside the Main House, you can also access it from the east entrance, past the fire pit.
				</p>
				<a href="/dining/ostrich-room" class="cta">More info</a>
			</div>
		</div>
		<div class="item">
			<h3>4.</h3>
			<img src="/avaloch/img/map-upper-lot.jpg" alt="Upper parking" />
			<div>
				<h3>Upper parking lot</h3>
				<p>
					The larger upper parking lot is closer to the lodge, and available as overflow parking for
					everyone. It’s TK steps down from there to the lodge entrance.
				</p>
			</div>
		</div>
		<div class="item">
			<h3>5.</h3>
			<img src="/heropics/summer-annex.jpg" alt="Lodge" />
			<div>
				<h3>Lodge</h3>
				<p>
					Built in 1966, the lodge is a seasonal annex to the main house. It features 21 more basic
					and standardized rooms, only open summer and fall. Guests staying here still check in at
					the Main House.
				</p>
				<a href="/rooms/lodge" class="cta">See rooms</a>
			</div>
		</div>
		<div class="item">
			<h3>6.</h3>
			<img src="/heropics/pool1.jpg" alt="Pool" />
			<div>
				<h3>Pool</h3>
				<p>
					Don’t miss the best view on the property! Open Memorial Day to Labor Day. Keep walking
					past the pool to take our recommended walking route down to <a
						href="/activities/tanglewood">Tanglewood</a
					>.
				</p>
			</div>
		</div>
	</div>
</Frame>

<style>
	.item {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		max-width: 640px;
	}
	.item > h3:first-child {
		width: 25px;
		flex-shrink: 0;
	}
	.item h3,
	.item p {
		margin: 0;
	}
	.item img {
		width: 200px;
		height: 200px;
		border: 3px double black;
		aspect-ratio: 1/1;
		object-fit: cover;
	}
	.item .cta {
		margin-top: 0.5rem;
	}

	@media (max-width: 1000px) {
		.item img {
			width: 50px;
			height: 50px;
		}
	}
</style>
