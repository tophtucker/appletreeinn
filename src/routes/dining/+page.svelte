<script>
	import Image from '$lib/lightbox/Image.svelte';
	import VR from '$lib/components/VR.svelte';
	import { RESERVATIONS_URL } from '$lib/nav.js';
</script>

<svelte:head>
	<title>Dining • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/> -->
</svelte:head>

<div class="inner">
	<div class="comparison-table">
		<div class="header hide-mobile"></div>
		<h2>Continental breakfast</h2>
		<VR style="grid-column: 3; grid-row: 1 / 10;" class="hide-mobile" />
		<div>
			<h2>The Ostrich Room</h2>
			<a class="cta" href="/dining/ostrich-room">Learn more</a>
		</div>

		<div class="header hide-mobile"></div>
		<Image
			src="/heropics/baladi2.jpg"
			style="width: 200px; height: 200px; object-fit: cover; border: 3px double black; border-radius: 100%; margin: 0 auto;"
		/>
		<Image
			src="/ostrich-room/fireplace.jpg"
			style="width: 200px; height: 200px; object-fit: cover; border: 3px double black; border-radius: 100%; margin: 0 auto;"
		/>

		<div class="header">Offerings</div>
		<div>Toast, fruit, hard-boiled eggs (no hot food)</div>
		<div>Beer, cocktails, elevated tavern classics</div>

		<div class="header">Open to</div>
		<div>Guests</div>
		<div>Guests and public</div>

		<div class="header">Hours</div>
		<div>Daily 8 – 10 a.m.</div>
		<div>Wed. – Sat. evenings</div>

		<div class="header">Location</div>
		<div>Round room (Main House)</div>
		<div>Ostrich Room (Main House)</div>

		<div class="header">Price</div>
		<div>Included with room</div>
		<div>$$</div>

		<div class="header">Reservations</div>
		<div>None</div>
		<div>Optional; <a href={RESERVATIONS_URL}>make a reservation</a></div>
	</div>
</div>
