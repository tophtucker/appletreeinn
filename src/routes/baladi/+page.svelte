<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Pin from '../Pin.svelte';
</script>

<svelte:head>
	<title>Báladi • Apple Tree Inn • Lenox, MA</title>
	<link rel="stylesheet" href="https://use.typekit.net/ktg1lbx.css" />
	<meta
		name="description"
		content="Báladi was our weekend brunch restaurant serving Mediterranean fare — moving to a new location soon"
	/>
</svelte:head>

<Header />

<div class="inner">
	<div class="intro">
		<img src="./baladi/room.jpg" alt="The Báladi dining room" />
		<h1>BÁLADI</h1>
		<div style="text-shadow: 1px 1px 2px black;">
			<span><Pin /> <a href="https://maps.app.goo.gl/s2E2mA27XHEvfAuj8">Google Maps</a></span>
			<span><a href="tel:413.717.9522" target="_blank">(413) 717-9522</a></span>
			<span><a href="https://www.instagram.com/baladiberkshires">@baladiberkshires</a></span>
		</div>
	</div>
	<hr />
	<div class="notice">
		<h2 class="pill">Temporarily closed — moving soon</h2>
		Báladi’s last brunch service at the Apple Tree Inn was a packed house for Mother’s Day on Sunday,
		May 11. It is moving to a new location to be announced soon. Stay tuned to{' '}<a
			href="https://www.instagram.com/baladiberkshires">@baladiberkshires</a
		> for updates!
	</div>
	<hr />
	<div id="menu" class="menu-grid">
		<img src="baladi/menu.png" alt="Báladi menu" />
		<div class="glossary">
			<h2 id="glossary"><u>Glo</u>ssary</h2>
			<ul>
				<li>
					<u>A</u>rak — a distilled, anise-flavored alcoholic beverage that originated in Lebanon
					and Armenia. A Middle Eastern favorite!
				</li>
				<li>
					Bu<u>re</u>kas — flaky and light turnovers, known in the Middle East as burekas. Popular
					Israeli street food.
				</li>
				<li>
					<u>Ei</u>ja — “latkes” shredded potatoes, zucchini and carrots mined with a lot of herbs.
					Our eija is gluten free, vegan, baked (not fried) and extremely delicious! Originally from
					Syria and Iraq.
				</li>
				<li>
					<u>Fa</u>va — classic Greek dish. Yellow split pea cooked with onion, garlic, olive oll
					and thyme. Served warm with a touch of lemon.
				</li>
				<li>
					<u>Fre</u>na — soft and fluffy Moroccan bread.
				</li>
				<li>
					Mat<u>bu</u>cha — slow cooked North African condiment made of tomatoes, garlic and hot
					pepper. Slightly spicy.
				</li>
				<li>
					Sa<u>bich</u> — some say it is the perfect street food. Fried eggplant, potato, hard boiled
					egg, pickles, tahini and a lot of parsley, topped with amba (pickled green mango sauce) to
					bring it all together. Originated in Iraq.
				</li>
				<li>
					Schug — based on cilantro, jalapeno, garlic and lemon, this spicy mix can be added to
					anything. Originated in Yemen.
				</li>
				<li>
					Shak<u>shu</u>ka — eggs poached in slow cooked roasted tomatoes, pepper, garlic, cilantro
					and spices. Traditionally served up in a cast iron pan with bread to mop up the sauce
					(most important!).
				</li>
				<li>
					Tat<u>bi</u>la — a spicy condiment with a fresh kick. Lemon mixed with olive oil, garlic
					and fresh jalapeno. Popular in Israeli and Palestinian cuisine.
				</li>
			</ul>
		</div>
	</div>
	<hr style="margin-bottom: 1em;" />

	<div class="gallery">
		<img src="./baladi/IMG_7442.jpg" alt="Food at Báladi" />
		<img src="./baladi/IMG_7496.jpg" alt="Food at Báladi" />
		<img src="./baladi/IMG_7580.jpg" alt="Food at Báladi" />
		<img src="./baladi/IMG_7445.jpg" alt="Food at Báladi" />
		<img src="./baladi/IMG_7540.jpg" alt="Food at Báladi" />
		<img src="./baladi/IMG_7613.jpg" alt="Food at Báladi" />
	</div>

	<hr style="margin-top: 1em;" />
	<p>
		Báladi (<em><small>BALL</small>-ah-dee</em>, بلدي, Arabic for “local”) is a brunch restaurant
		featuring the Mediterranean food that the husband–wife team of Hagai and Adi have always loved
		cooking for themselves.
	</p>
	<p>
		They originally dreamed of opening it in Greece, and we feel lucky they instead landed on the
		sun-kissed shores of the Berkshires.
	</p>
</div>

<Footer />

<style>
	@font-face {
		font-family: 'JohnDoeRegular';
		src:
			url('/baladi/font.woff2') format('woff2'),
			url('/baladi/font.woff') format('woff');
	}
	h1 {
		font-family: 'JohnDoeRegular';
		color: #003070;
		letter-spacing: 0.1em;
		font-size: min(6em, 16vw);
		margin-bottom: 2.5em;
		font-weight: bold;
		text-shadow: 0.05em 0.05em #eaeaa9;
	}
	.intro {
		position: relative;
		border-radius: 5px;
		border: 1px solid var(--brown);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2em;
		color: white;
		font-family: 'cheddar-gothic-sans', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	.intro > img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 50%;
		z-index: -1;
	}
	.intro > div {
		display: flex;
		gap: 1em;
		margin-top: 1em;
	}
	.pill {
		color: #003070;
		background: #eaeaa9;
		padding: 0.5em 1em;
		text-align: center;
		border-radius: 1em;
	}
	.intro a {
		color: inherit;
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1em;
	}
	.gallery img {
		flex: 1 1 auto;
		max-width: 100%;
		height: auto;
		min-height: 1px;
		border-radius: 5px;
		aspect-ratio: 500/643;
		object-fit: cover;
	}
	.menu-grid {
		display: grid;
		grid-template-columns: 5fr 2fr;
		gap: 2em;
	}
	.menu-grid img {
		width: 100%;
		max-width: 800px;
		border-radius: 5px;
	}
	h2 {
		margin: 0 0 0.5em 0;
		font-family: 'cheddar-gothic-sans', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	p {
		font-family: 'cheddar-gothic-sans', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	ul {
		max-width: 640px;
		padding-left: 0;
		font-size: smaller;
		font-family: 'cheddar-gothic-sans', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
	li {
		margin-bottom: 1em;
	}
	.notice {
		max-width: 640px;
		margin: 0 auto;
		text-align: center;
		font-size: larger;
		font-family: 'cheddar-gothic-sans', sans-serif;
	}
	@media (max-width: 800px) {
		.menu-grid {
			display: block;
		}
		.glossary {
			display: none;
		}
		.gallery {
			grid-template-rows: 1fr 1fr;
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 660px) {
		.intro > div {
			flex-direction: column;
		}
	}
</style>
