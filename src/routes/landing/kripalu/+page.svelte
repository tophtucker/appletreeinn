<script>
	import HR from '$lib/components/HR.svelte';
</script>

<svelte:head>
	<title
		>Your Berkshires Retreat Doesn’t Have to End Yet • Avaloch (formerly Apple Tree Inn) • Lenox,
		Mass.</title
	>
</svelte:head>

<div class="inner">
	<div>
		<h1>Your Berkshires Retreat Doesn’t Have to End Yet</h1>
		<img src="/img/hero-drone.jpg" alt="The Apple Tree Inn’s Main House" />
		<p>
			Just 3 minutes from Kripalu, the <a href="/">Apple Tree Inn</a> is your home base for exploring
			the Berkshires. After a day out, come back for a swim, live music, cocktails, and plenty of space
			to unwind.
		</p>
		<HR style="width: 100%;" />
		<h2>Your Berkshires Escape,<br />Your Way</h2>
		<HR style="width: 100%;" />
	</div>

	<div>
		<img src="/img/firepit2.jpg" alt="The view approaching the fire pit" />
		<h3>Peaceful and Private</h3>
		<p>
			Our hilltop location offers sweeping mountain views, a calm setting, and plenty of space to
			breathe deeply.
		</p>
	</div>

	<div>
		<img src="/roompics/main-house/2/_XCS2623.jpg" alt="Room 2 in the Main House" />
		<h3>Beautiful Rooms</h3>
		<p>
			Choose from <a
				href="https://direct-book.com/properties/AppleTreeInndirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-08-13&checkOutDate=2025-08-15&trackPage=yes"
				target="_blank">charming rooms</a
			> in our historic Main House, each designed for comfort and furnished to create a relaxing, welcoming
			stay.
		</p>
	</div>

	<div>
		<img
			src="/img/adirondack-cheers.jpg"
			alt="Enjoying cocktails on the lawn overlooking the Berkshire hills"
		/>
		<h3>Cocktails with a view</h3>
		<p>
			After a day of hiking and exploring, relax in an Adirondack chair and take in the hillside
			view with one of our delicious <a href="/dining/ostrich-room" target="_blank"
				>handcrafted cocktails</a
			>.
		</p>
	</div>

	<div>
		<img src="/img/pool-2025.jpg" alt="A view of the pool" />
		<h3>No Schedule Required</h3>
		<p>
			Sleep in, sip coffee on the porch, take a hike up Monument Mountain, or take a dip in the
			pool. You set the pace.
		</p>
	</div>

	<div>
		<img
			src="/img/rigatoni-outside.jpg"
			alt="Enjoying a bowl of spicy rigatoni on the side patio"
		/>
		<h3>Relaxed Dining Options</h3>
		<p>
			Start your day with a nourishing breakfast, or enjoy a comforting meal at our on-site
			restaurant, the <a href="/dining/ostrich-room" target="_blank">Ostrich Room</a>.
		</p>
	</div>

	<div>
		<img src="/img/music2.jpg" alt="Andy Wrba and friends performing in the Ostrich Room" />
		<h3>Live Music in the Evenings</h3>
		<p>
			Unwind with intimate <a href="/music" target="_blank">live music performances</a> in the Ostrich
			Room, featuring local musicians Wednesdays-Saturdays.
		</p>
	</div>

	<a
		class="cta"
		href="https://direct-book.com/properties/AppleTreeInndirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2025-08-13&checkOutDate=2025-08-15&trackPage=yes"
		target="_blank">Plan your stay</a
	>
</div>

<style>
	.inner {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	h1,
	h2,
	h3 {
		max-width: 640px;
		margin: 1rem auto;
	}

	p {
		font-size: larger;
		margin: 1rem auto;
		max-width: 500px;
		text-wrap: pretty;
	}

	img {
		display: block;
	}

	.cta {
		font-size: x-large;
		padding: 20px 20px;
	}
</style>
