<script>
	import Image from '$lib/lightbox/Image.svelte';
	const pics = [
		{ src: '/heropics/verdant.jpg', alt: 'Main house' },
		{ src: '/heropics/driveway.jpg', alt: 'Driveway' },
		{ src: '/heropics/pool1.jpg', alt: 'The pool' },
		{ src: '/img/pool-view.jpg', alt: 'pool-view' },
		{ src: '/heropics/lawn.jpg', alt: 'Lawn' },
		{ src: '/heropics/drone-repainted.jpg', alt: 'Main house' },

		{ src: '/heropics/view1.jpg', alt: 'The view' },
		{ src: '/img/firepit.jpg', alt: 'firepit' },
		{ src: '/heropics/fire-pit.jpg', alt: 'Fire pit' },
		{ src: '/roompics/main-house/2/_XCS2623.jpg', alt: 'Main House, Room 2' },
		{ src: '/roompics/main-house/2/_XCS2621.jpg', alt: 'Main House, Room 2' },
		{ src: '/roompics/main-house/2/_XCS2624.jpg', alt: 'Main House, Room 2' },
		{ src: '/roompics/main-house/4/_XCS2628.jpg', alt: 'Main House, Room 4' },
		{ src: '/roompics/main-house/8/_XCS2672.jpg', alt: 'Main House, Room 8' },
		{ src: '/roompics/main-house/8/_XCS2669.jpg', alt: 'Main House, Room 8' },
		{ src: '/roompics/main-house/9/_XCS2640.jpg', alt: 'Main House, Room 9' },
		{ src: '/heropics/ostrich3.jpg', alt: 'The glass pane doors on the Ostrich Room' },
		{ src: '/img/wanda.jpg', alt: 'wanda' },
		{ src: '/img/bar.jpg', alt: 'bar' },
		{ src: '/ostrich-room/cocktail.jpg', alt: 'Cocktails' },
		{ src: '/img/inglenook.jpg', alt: 'inglenook' },
		{ src: '/img/tanglewood.jpg', alt: 'tanglewood' },
		{ src: '/ostrich-room/empty.jpg', alt: 'The Ostrich Room' },
		{ src: '/img/music.jpg', alt: 'music' },
		{ src: '/ostrich-room/fireplace.jpg', alt: 'The Ostrich Room' },
		{ src: '/ostrich-room/IMG_6961.jpg', alt: 'The Ostrich Room' },
		{ src: '/ostrich-room/P8243018.JPG', alt: 'The Ostrich Room' },
		{ src: '/ostrich-room/packed.jpg', alt: 'The Ostrich Room' },
		{ src: '/img/dining.jpg', alt: 'dining' },
		{ src: '/img/fireplace.jpg', alt: 'fireplace' },
		{ src: '/img/piano.jpg', alt: 'piano' },
		{ src: '/img/chess.jpg', alt: 'chess' },
		{ src: '/heropics/max.jpg', alt: 'Max' },
		{ src: '/img/claire-stride.jpg', alt: 'claire-stride' },
		{ src: '/img/proposal.jpg', alt: 'proposal' },
		{ src: '/img/flowers.jpg', alt: 'flowers' },
		{ src: '/img/door.jpg', alt: 'door' },
		{ src: '/heropics/view2.jpg', alt: 'The view' },
		{ src: '/heropics/view3.jpg', alt: 'The view' },
		{ src: '/heropics/view4.jpg', alt: 'The view' },
		{ src: '/img/sledding.jpg', alt: 'sledding' },
		{ src: '/img/lawn-snow.jpg', alt: 'lawn-snow' },
		{ src: '/heropics/summer-annex.jpg', alt: 'The lodge' },
		{ src: '/roompics/lodge/queen-scenic-view/_XCS2772.jpg', alt: 'Lodge, Queen Scenic View' },
		{
			src: '/roompics/lodge/2-double-scenic-view/_XCS2782.jpg',
			alt: 'Lodge, 2 Double Scenic View'
		},
		{
			src: '/weddings/Robin&Nat_Reception-1.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		},
		{
			src: '/weddings/Robin&Nat_B&G-53.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		},
		{
			src: '/weddings/Robin&Nat_B&G-93.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		},
		{
			src: '/weddings/Robin&Nat_B&G-206.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		},
		{
			src: '/weddings/Robin&Nat_Prep-82.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		},
		{
			src: '/weddings/Robin&Nat_Prep-125.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		},
		{
			src: '/weddings/Robin&Nat_Reception-414.jpg',
			alt: 'Robin and Nat’s wedding, by Leah Freeman Photography'
		}
	];
</script>

<svelte:head>
	<title>Gallery • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
	<meta
		name="description"
		content="Photographs of Avaloch in all seasons featuring the rooms, food, cocktails, weddings, fireplaces, sledding, and foliage."
	/>
</svelte:head>

<div class="inner">
	<h1>Gallery</h1>

	<div class="grid">
		{#each pics as image}
			<Image
				src={image.src}
				alt={image.alt}
				loading="lazy"
				style="object-fit: cover; width: 100%; height: 100%;"
			/>
		{/each}
	</div>
</div>

<style>
	h1 {
		margin-bottom: 1em;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-auto-rows: 200px;
		gap: 1rem;
	}
</style>
