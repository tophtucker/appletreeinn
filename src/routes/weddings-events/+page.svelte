<script>
	import Frame from '$lib/template/Frame.svelte';
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
	<title>Weddings & Events • Apple Tree Inn • Lenox, MA</title>
	<meta name="description" content="TODO" />
</svelte:head>

<Frame>
	<div class="inner">
		<div class="grid-or-flex">
			<div>
				<h1>Weddings & events</h1>
				<p>
					We are no longer accepting private events for the 2025 & 2026 seasons. If you’d like to be
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
				<p>
					<a
						style="font-weight: bold;"
						href="https://docs.google.com/forms/d/e/1FAIpQLSeWZNsHNjJ7gsrEh0-p4hrJJk5SCSnHJgSuPCR1YmSoNuXsRA/viewform?usp=preview"
						>Let me know when bookings reopen →</a
					>
				</p>
			</div>
			<Slideshow {pics} />
		</div>
	</div>
</Frame>

<style>
	.notice {
		background: var(--tan);
		border: 1px solid var(--brown);
		border-radius: 1em;
		padding: 1rem;
		margin-bottom: 2rem;
		max-width: 100%;
	}
	iframe {
		width: 100%;
		border: none;
		height: 700px;
		border-radius: 5px;
	}
</style>
