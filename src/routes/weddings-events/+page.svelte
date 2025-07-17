<script>
	import Slideshow from '$lib/components/Slideshow.svelte';

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
	<title>Private events • Apple Tree Inn • Lenox, MA</title>
	<!-- <meta name="description" content="TODO" /> -->
</svelte:head>

<div class="inner">
	<div class="grid-or-flex">
		<div>
			<p>
				We are no longer accepting private events for the 2025 and 2026 seasons. If you’d like to be
				put on our list, we will reach out to you once private events bookings reopen.
			</p>
			<p>
				If you are looking for guest rooms only (as opposed to venue rental or catering), please
				contact us at <a href="mailto:info@appletreeinnlenox.com">info@appletreeinnlenox.com</a>.
			</p>
			<p>
				If you are looking to book dinner for a party up to 12 people in the Ostrich Room, please
				contact us at <a href="mailto:info@appletreeinnlenox.com">info@appletreeinnlenox.com</a>.
			</p>
			<p>Thank you for your interest!</p>
			<a
				class="cta"
				style="margin-top:1rem;"
				href="https://docs.google.com/forms/d/e/1FAIpQLSeWZNsHNjJ7gsrEh0-p4hrJJk5SCSnHJgSuPCR1YmSoNuXsRA/viewform?usp=preview"
				>Tell me when bookings reopen</a
			>
		</div>
		<Slideshow {pics} />
	</div>
</div>
