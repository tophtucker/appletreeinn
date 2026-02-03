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
				We are currently <a href="/about/renovations">under construction</a> and are unable to say at
				this point when we will reopen. It’s really important to us that we don’t promise to host an
				event if we are still under construction and cannot deliver so we are erring on the side of caution
				here.
			</p>

			<p>If it’s helpful, when we reopen, we are planning to have:</p>

			<ul>
				<li>
					32 guest rooms
					<ul>
						<li>12 in 1885 Main House</li>
						<li>20 in 1966 Motel</li>
					</ul>
				</li>
				<li>
					2 private dining spaces
					<ul>
						<li>Smaller room for 25 seated guests</li>
						<li>Larger room for 50 seated guests</li>
						<li>Both rooms for 75 seated guests</li>
						<li>We can accommodate more for a stand-up cocktail party</li>
					</ul>
				</li>
				<li>Ostrich Room bar: 50 ppl seated</li>
				<li>Front porch & lawn with ability for private parties</li>
				<li>Tent lawn with beautiful views that could accommodate a tent for up to 300 people</li>
				<li>Pool</li>
			</ul>

			<p>
				We are keeping a list of inquiries and, if you are interested, we will add your contact
				information to the list and will reach out when we know more. Please feel free to email
				<a href="mailto:info@appletreeinnlenox.com">info@appletreeinnlenox.com</a>.
			</p>

			<p>Thank you!</p>

			<!-- TODO: is this form still being monitored? -->
			<!-- <a
				class="cta"
				style="margin-top:1rem;"
				href="https://docs.google.com/forms/d/e/1FAIpQLSeWZNsHNjJ7gsrEh0-p4hrJJk5SCSnHJgSuPCR1YmSoNuXsRA/viewform?usp=preview"
				>Tell me when bookings reopen</a
			> -->
		</div>
		<Slideshow {pics} />
	</div>
</div>
