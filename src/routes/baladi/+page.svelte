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
			<p style="margin-top: 0;">Reservations: Call 413-717-9522</p>
			<p>
				Baladi (<em><small>BALL</small>-ah-dee</em>, بلدي, Arabic for “local”) is our new brunch
				restaurant featuring the Mediterranean food that our husband–wife team of Hagai and Adi have
				always loved cooking for themselves.
			</p>
			<p>
				They originally dreamed of opening it in Greece, and we feel lucky they instead landed on
				the sun-kissed shores of Lenox. Take in the panoramic view of the Berkshire hills from our
				round room (formerly the site of Alice’s Restaurant).
			</p>
		</div>
	</div>
	<hr />
	<h2 id="menu">Menu</h2>
	<img src="img/menu-baladi.jpg" alt="Baladi menu" />
	<hr />
	<h2 id="glossary"><u>Glo</u>ssary</h2>

	<ul>
		<li>
			<u>A</u>rak — a distilled, anise-flavored alcoholic beverage that originated in Lebanon and
			Armenia. A Middle Eastern favorite!
		</li>
		<li>
			Bu<u>re</u>kas — flaky and light turnovers, known in the Middle East as burekas. Popular
			Israeli street food.
		</li>
		<li>
			<u>Ei</u>ja — “latkes” shredded potatoes, zucchini and carrots mined with a lot of herbs. Our
			eija is gluten free, vegan, baked (not fried) and extremely delicious! Originally from Syria
			and Iraq.
		</li>
		<li>
			<u>Fa</u>va — classic Greek dish. Yellow split pea cooked with onion, garlic, olive oll and
			thyme. Served warm with a touch of lemon.
		</li>
		<li>
			<u>Fre</u>na — soft and fluffy Moroccan bread.
		</li>
		<li>
			Mat<u>bu</u>cha — slow cooked North African condiment made of tomatoes, garlic and hot pepper.
			Slightly spicy.
		</li>
		<li>
			Sa<u>bich</u> — some say it is the perfect street food. Fried eggplant, potato, hard boiled egg,
			pickles, tahini and a lot of parsley, topped with amba (pickled green mango sauce) to bring it
			all together. Originated in Iraq.
		</li>
		<li>
			Schug — based on cilantro, jalapeno, garlic and lemon, this spicy mix can be added to
			anything. Originated in Yemen.
		</li>
		<li>
			Shak<u>shu</u>ka — eggs poached in slow cooked roasted tomatoes, pepper, garlic, cilantro and
			spices. Traditionally served up in a cast iron pan with bread to mop up the sauce (most
			important!).
		</li>
		<li>
			Tat<u>bi</u>la — a spicy condiment with a fresh kick. Lemon mixed with olive oil, garlic and
			fresh jalapeno. Popular in Israeli and Palestinian cuisine.
		</li>
	</ul>
</div>

<Footer />

<style>
	h2 {
		margin: 1em 0 0.5em 0;
	}
	.grid-or-flex {
		grid-template-columns: 1fr 3fr;
	}

	ul {
		max-width: 640px;
	}
	li {
		margin-bottom: 1em;
	}
</style>
