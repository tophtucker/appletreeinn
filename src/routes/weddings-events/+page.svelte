<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Slideshow from '../Slideshow.svelte';

	const pics = [
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_B&G-53.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_B&G-93.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_B&G-206.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_Prep-82.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_Prep-125.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_Reception-1.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{
			title: 'Robin and Nat’s wedding, by Leah Freeman Photography',
			src: './weddings/Robin&Nat_Reception-414.jpg',
			caption: `Robin and Nat’s wedding, by <a href="https://leahfreemanphotography.com/">Leah Freeman Photography</a>`
		},
		{ src: './heropics/lawn.jpg', title: 'The main lawn' }
	];
</script>

<svelte:head>
	<title>Weddings & Events • Apple Tree Inn • Lenox, MA</title>
	<meta name="description" content="TODO" />
</svelte:head>

<Header />

<div class="inner">
	<div class="grid-or-flex">
		<div>
			<h1>Weddings & events</h1>
			<p class="notice">
				<em>Feb. 2025</em> — Thank you for your interest in hosting an event with us! Due to heavy demand,
				we are temporarily not accepting new inquiries. Please check back in a few weeks; we look forward
				to working with you to host your special day!
			</p>
			<p>
				We’d love to host your wedding, rehearsal dinner, welcome party, afterparty, Sunday brunch,
				room block, or some combination of those. We also host a variety of other events.
			</p>
			<p>
				We have 34 rooms, a broad flat lawn with a beautiful view, a dining room with panoramic
				windows, a tavern, the lobby lounge, cozy fireplaces, and a large-scale commercial kitchen.
			</p>
			<!-- <p>Fill out the form below and we’ll get back to you. Thank you for your interest!</p> -->
		</div>
		<Slideshow {pics} />
	</div>

	<!-- <hr />
	<iframe
		title="Event inquiry form"
		src="https://app.eventtemple.com/lead_intakes/ecdbd71af44e5dcb8407c0e53f184e18/2586/new"
	></iframe> -->
</div>

<Footer />

<style>
	.notice {
		background: var(--tan);
		border: 1px solid var(--brown);
		border-radius: 1em;
		padding: 1rem;
	}
	/* iframe {
		width: 100%;
		border: none;
		height: 700px;
		border-radius: 5px;
	} */
</style>
