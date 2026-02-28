<script>
	import Image from '$lib/lightbox/Image.svelte';
</script>

<svelte:head>
	<title>Property map • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
	<meta
		name="description"
		content="Getting around Avaloch, including two guest room buildings, restaurant, parking lots, and pool."
	/>
</svelte:head>

<div class="inner">
	<h1>Property map</h1>

	<Image src="/map/map.svg" alt="Property map" />

	<div class="item">
		<h3>1.</h3>
		<div class="img-wrapper">
			<Image
				src="/img/lower-parking.jpg"
				alt="1. Lower parking lot"
				class="square"
				style="width: 100%"
			/>
		</div>
		<div>
			<h3>Lower parking lot</h3>
			<p>
				The smaller lower lot is right next to the Main House, where all guests check in. It’s also
				closest for the Ostrich Room.
			</p>
		</div>
	</div>
	<div class="item">
		<h3>2.</h3>
		<div class="img-wrapper">
			<Image src="/heropics/driveway.jpg" alt="Main House" class="square" style="width: 100%" />
		</div>
		<div>
			<h3>Main House</h3>
			<p>
				Built in 1885, the Main House is the heart of the property. Enter the main (west) entrance
				from the lower parking lot. The front desk is just inside, where all guests check in. Beyond
				is our lobby, round room, and the Ostrich Room; upstairs are thirteen unique guest rooms.
			</p>
			<a href="/rooms/main-house" class="cta">See rooms</a>
		</div>
	</div>
	<div class="item">
		<h3>3.</h3>
		<div class="img-wrapper">
			<Image
				src="/img/ostrich-exterior.jpg"
				alt="3. The Ostrich Room"
				class="square"
				style="width: 100%"
			/>
		</div>
		<div>
			<h3>The Ostrich Room</h3>
			<p>
				Our historic tavern is open to the public for dinner, drinks, and live music. Located inside
				the Main House, you can also access it from the east entrance, past the fire pit.
			</p>
			<a href="/dining/ostrich-room" class="cta">More info</a>
		</div>
	</div>
	<div class="item">
		<h3>4.</h3>
		<div class="img-wrapper">
			<Image
				src="/img/map-upper-lot.jpg"
				alt="4. Upper parking lot"
				class="square"
				style="width: 100%"
			/>
		</div>
		<div>
			<h3>Upper parking lot</h3>
			<p>
				The larger upper parking lot is closer to the lodge, and available as overflow parking for
				everyone. It’s 12 steps down from there to the lodge entrance.
			</p>
		</div>
	</div>
	<div class="item">
		<h3>5.</h3>
		<div class="img-wrapper">
			<Image src="/heropics/summer-annex.jpg" alt="5. Lodge" class="square" style="width: 100%" />
		</div>
		<div>
			<h3>Lodge</h3>
			<p>
				Built in 1966, the lodge is a seasonal annex to the main house. It features 21 more basic
				and standardized rooms, only open summer and fall. Guests staying here still check in at the
				Main House.
			</p>
			<a href="/rooms/lodge" class="cta">See rooms</a>
		</div>
	</div>
	<div class="item">
		<h3>6.</h3>
		<div class="img-wrapper">
			<Image src="/heropics/pool1.jpg" alt="6. Pool" class="square" style="width: 100%" />
		</div>
		<div>
			<h3>Pool</h3>
			<p>
				Don’t miss the best view on the property! Open Memorial Day to Labor Day. Keep walking past
				the pool to take our recommended walking route down to <a href="/activities/tanglewood"
					>Tanglewood</a
				>.
			</p>
		</div>
	</div>
</div>

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
	.item .img-wrapper {
		width: 200px;
		height: 200px;
		border: 3px double black;
		align-self: self-start;
		flex-shrink: 0;
	}
	.item .cta {
		margin-top: 0.5rem;
	}

	@media (max-width: 1000px) {
		.item .img-wrapper {
			width: 50px;
			height: 50px;
		}
	}
</style>
