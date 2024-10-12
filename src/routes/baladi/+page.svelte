<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Slideshow from '../Slideshow.svelte';
	import { baladi } from '$lib/index.js';
	import OpenSignBig from '../OpenSignBig.svelte';

	const pics = [
		{ src: './heropics/baladi1.jpg', title: 'The panoramic views of our round room' },
		{ src: './heropics/baladi2.jpg', title: 'The panoramic views of our round room' },
		{ src: './heropics/baladi3.jpg', title: 'The panoramic views of our round room' },
		{ src: './heropics/baladi4.jpg', title: 'The panoramic views of our round room' }
	];
</script>

<svelte:head>
	<title>Baladi • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Baladi is our new brunch restaurant serving Mediterranean fare Sat. & Sun., 9 am – 2 pm"
	/>
</svelte:head>

<Header />

<div class="inner">
	<div class="grid-or-flex">
		<Slideshow {pics} aspectRatio={0.75} />
		<div>
			<h1>Baladi</h1>
			<OpenSignBig data={baladi} />
			<p>
				Baladi (<em><small>BALL</small>-ah-dee</em>, بلدي, Arabic for “local”) is our new brunch
				restaurant featuring the Mediterranean food our husband–wife team of Hagai and Adi have
				always loved cooking for themselves.
			</p>
			<p>
				They originally dreamed of opening it in Greece, and we feel lucky they instead landed on
				the sun-kissed shores of Lenox.
			</p>
		</div>
	</div>
	<hr />
	<h2 id="menu">Menu</h2>
	<img src="img/menu-baladi.jpg" alt="Baladi menu" />
</div>

<Footer />

<style>
	h2 {
		margin: 1em 0 0.5em 0;
	}
	.grid-or-flex {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 1em;
	}
</style>
