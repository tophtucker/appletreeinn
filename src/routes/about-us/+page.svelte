<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Slideshow from '../Slideshow.svelte';

	const pics = [
		{ src: './heropics/staff1.jpg', title: 'Staff barbecue' },
		{ src: './heropics/staff2.jpg', title: 'Bar crew opening night' }
	];
</script>

<svelte:head>
	<title>About us • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
</svelte:head>

<Header />

<div class="inner">
	<div class="grid-or-flex">
		<div>
			<h1>About us</h1>
			<p>Claire took over the hotel in April 2024, realizing a lifelong dream.</p>
			<p>
				For three summers in college, Claire worked at the concierge desk of the Chatham Bars Inn in
				Cape Cod and fell in love with the industry. She loved the hours sitting at her desk in its
				glamorous old lobby, helping guests experience the best of the area. She later interned at
				Rosewood and then, after business school, managed hotels from the corporate side for
				Starwood. After three years there, she decided she understood enough to strike out on her
				own, and is excited to now be in a position to run it end-to-end: build the business, craft
				the guest experience, and introduce you to town.
			</p>
			<p>
				She lives on the property with her husband, Toph, who works remotely for a <a
					href="https://observablehq.com">different job</a
				> but does run social media for the hotel and is making this website right now.
			</p>
		</div>
		<img src="./heropics/claire-toph.jpg" alt="Claire and Toph" />
	</div>
	<hr />
	<div class="grid-or-flex">
		<img src="./heropics/christian.jpg" alt="Christian and Max" style="order: 1" />
		<div style="order: 2">
			<p>
				Christian is Claire’s right-hand man; one of the two of them will probably check you in. He
				followed us out here from the Boston area to escape the office desk job life and try
				something different, and judging from some of the stuff we’ve got him doing (climbing
				ladders to update security cameras or cleaning up bird poop), we bet we have achieved
				“different”. His mom is in Toph’s mom’s book group and has always worked at bookstores,
				which is how she met Christian’s dad. Christian is currently reading:
			</p>
			<ul>
				<li><em>The Year of the Locust</em>, by Terry Hayes</li>
				<li><em>Martyr!</em>, by Kaveh Akbar</li>
				<li><em>Four Seasons: The Story of a Business Philosophy</em>, by Isadore Sharp</li>
			</ul>
			<p>
				You’re also likely to meet Christian’s German shepherd Max, who is not yet trained to use
				the point-of-sale systems but is otherwise a startlingly good listener. Max will be very
				grateful if you kick a ball down the hill for him to fetch, and then he will gently toss the
				ball at your feet and wait, and so on <em>ad infinitum</em>.
			</p>
		</div>
	</div>
	<hr />
	<Slideshow {pics} />
	<p>
		Above, see our staff barbecue and bar crew opening night, featuring the other people you might
		see around with some of their families: Memo and Demetrio on maintenance, Karla on housekeeping,
		Giovanna and Nic bartending, Finn and Rory as their barbacks, Kari on food and beverage
		operations, and Danny arranging and decorating the space.
	</p>
</div>

<Footer />
