<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Slideshow from '../Slideshow.svelte';

	const pics = [
		{ src: './heropics/ostrich2.jpg', title: 'The Ostrich Room' },
		{ src: './heropics/ostrich3.jpg', title: 'The Ostrich Room' },
		{ src: './heropics/ostrich4.jpg', title: 'The Ostrich Room' }
	];
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food Wed.–Sat., 4–10 pm, with live music on Wed. and Sat., at the Apple Tree Inn"
	/>
</svelte:head>

<Header />

<div class="inner">
	<div class="grid-or-flex">
		<div>
			<h1>The Ostrich Room</h1>
			<p>
				Originally built around 1900 by then-owners Mr. and Mrs. Pease as a billiards room, our
				tavern is locally famous for its music program and roaring fires in the <em>inglenook</em> (that’s
				a fireplace nook with facing benches).
			</p>
			<ul>
				<li>Open Wednesday – Saturday</li>
				<li>Drinks 4 – 10 p.m.</li>
				<li>Food 5 – 9 p.m.</li>
				<li>Live music Wednesdays and Saturdays</li>
			</ul>
			<p>
				Follow us on <a href="https://instagram.com/appletreeinn">Instagram</a> to find out about upcoming
				live music.
			</p>
		</div>
		<Slideshow {pics} aspectRatio={1.33} objectFit={'contain'} />
	</div>
	<hr />
	<h2>Sample menus</h2>
	<p>The menu’s always changing, but here are a couple recent ones for drinks and food.</p>
	<div class="menus">
		<img src="img/menu-drinks.png" alt="Drinks menu" />
		<img src="img/menu-food.png" alt="Food menu" />
	</div>
</div>

<Footer />

<style>
	.menus {
		display: grid;
		grid-template-columns: 8.5fr 5.5fr;
		gap: 1em;
		width: 100%;
	}

	.menus img {
		width: 100%;
		border: 1px solid var(--brown);
		border-radius: 5px;
	}

	@media (max-width: 640px) {
		.menus {
			display: flex;
			flex-direction: column;
		}
	}
</style>
