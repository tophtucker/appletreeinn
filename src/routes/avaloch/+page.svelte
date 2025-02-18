<script>
	import Slideshow from '../Slideshow.svelte';
	import { loadEvents, formatDate, ostrichRoom } from '$lib/index.js';
	import OpenSignBig from '../OpenSignBig.svelte';

	let events = $state(undefined);
	(async function () {
		events = await loadEvents();
	})();

	const pics = [
		// { src: './heropics/view2.jpg', title: 'The view' },
		{ src: './heropics/view3.jpg', title: 'The view' },
		{ src: './ostrich-room/P8243018.JPG', title: 'The Ostrich Room, our tavern' },
		{ src: './baladi/room.jpg', title: 'Brunch at Baladi' },
		{ src: './heropics/view4.jpg', title: 'The main house' },
		// { src: './heropics/drone-repainted.jpg', title: 'The Apple Tree Inn, viewed from the air' },
		{ src: './roompics/main-house/8/_XCS2672.jpg', title: 'Room 8' },
		{ src: './heropics/fire-pit.jpg', title: 'The fire pit' },
		// { src: './heropics/view1.jpg', title: 'The view from the lawn' },
		{ src: './heropics/max.jpg', title: 'Max, the hotel dog, but really Christian’s' },
		{ src: './heropics/pool1.jpg', title: 'The pool' }
		// { src: './heropics/exterior.jpg', title: 'The Apple Tree Inn, viewed from the air' }
	];

	const nav = [
		{ name: 'Rooms' },
		{ name: 'Dining' },
		{ name: 'Public events' },
		{ name: 'Private events' },
		{ name: 'Map' },
		{ name: 'Gallery' },
		{ name: 'About' }
	];
</script>

<svelte:head>
	<title>Avaloch • A Country Inn • Lenox, MA</title>
	<meta name="description" content="TK" />
	<link rel="stylesheet" href="/avaloch/avaloch.css" />
</svelte:head>

<div class="container">
	<div class="hero">
		<Slideshow {pics} aspectRatio={2} />
		<img src="/avaloch/avaloch.svg" />
	</div>

	<div class="nav">
		{#each nav as n}
			<div class="navItem">
				<!-- <small>(icon)</small> -->
				<a href="#">{n.name}</a>
			</div>
		{/each}
	</div>

	<div class="zany-pitch"></div>
</div>

<style>
	.container {
		border: 3px double black;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero {
		position: relative;
		border: 1px solid black;
	}

	.hero img {
		position: absolute;
		top: 60vh;
		width: 60vw;
	}

	.nav {
		border: 1px solid black;
		display: flex;
		/* justify-content: center; */
		align-items: center;
	}

	.navItem {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		border-right: 1px solid black;
		padding: 1rem;
		width: 8em;
	}

	/* .navItem:first-child {
		border-left: 1px solid black;
	} */
</style>
