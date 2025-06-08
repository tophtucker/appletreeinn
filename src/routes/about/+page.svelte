<script>
	import Frame from '$lib/template/Frame.svelte';
</script>

<svelte:head>
	<title>About • Avaloch • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
</svelte:head>

<Frame>
	<div class="inner">
		<h1>Staff</h1>
		<div class="grid-or-flex">
			<div style="order: 2">
				<p>Claire took over the hotel in April 2024, realizing a lifelong dream.</p>
				<p>
					For three summers in college, Claire worked at the concierge desk of the Chatham Bars Inn
					in Cape Cod and fell in love with the industry. She loved the hours sitting at her desk in
					its glamorous old lobby, helping guests experience the best of the area. She later
					interned at Rosewood and then, after business school, managed hotels from the corporate
					side for Starwood. After three years there, she decided she understood enough to strike
					out on her own, and is excited to now be in a position to run it end-to-end: build the
					business, craft the guest experience, and introduce you to town. <a href="/about/claire"
						>Read her letter</a
					>.
				</p>
				<p>
					She lives on the property with her husband, Toph, who works remotely for a <a
						href="https://observablehq.com">different job</a
					> but does some social media for the hotel and is making this website right now.
				</p>
			</div>
			<img
				src="./heropics/claire-toph2.jpg"
				alt="Claire and Toph, smiling at the camera, Toph’s arm lovingly around Claire’s shoulder, standing at the top of the Apple Tree hill in front of the unseen old carriage house, a beautiful verdant backdrop with layered mountains and just a hint of the Stockbridge Bowl visible at the far right"
				style="order: 1"
			/>
		</div>
		<hr />
		<div class="grid-or-flex">
			<img
				src="./heropics/christian.jpg"
				alt="Christian and his German shepherd Max climing the hill, with two of our actual surviving apple trees in the background, Christian in an Apple Tree branded baseball cap, Max following attentively behind"
				style="order: 1"
			/>
			<div style="order: 2">
				<p>
					Christian is the Hotel Manager. He followed us out here from the Boston area to escape the
					office desk job life and try something different, and judging from some of the stuff we’ve
					got him doing (climbing ladders to update security cameras or cleaning up bird poop), we
					bet we have achieved “different”. His mom is in Toph’s mom’s book group and has always
					worked at bookstores, which is how she met Christian’s dad. Christian is currently
					reading:
				</p>
				<ul>
					<li><em>The Year of the Locust</em>, by Terry Hayes</li>
					<li><em>Martyr!</em>, by Kaveh Akbar</li>
					<li><em>Four Seasons: The Story of a Business Philosophy</em>, by Isadore Sharp</li>
				</ul>
				<p>
					You’re also likely to meet Christian’s German shepherd Max, who is not yet trained to use
					the point-of-sale systems but is otherwise a startlingly good listener. Max will be very
					grateful if you kick a ball down the hill for him to fetch, and then he will gently toss
					the ball at your feet and wait, and so on <em>ad infinitum</em>.
				</p>
			</div>
		</div>
		<hr />

		<div class="bios">
			<img src="./img/sean.jpg" alt="Sean" />
			<p>
				Sean (bar manager) really knows a lot about cocktails and has vastly expanded our menu. His
				favorite is a Vesper martini. Also he and his wife have a 3-year-old daughter.
			</p>
			<img src="./img/abby.jpg" alt="Abby" />
			<p>
				Abby (front desk and private events) grew up like a mile from here; she went to Lenox High
				and UMass Amherst, where she played soccer. We think maybe she likes Disney movies but we’re
				not sure. Her brother goes by “Toph” but weirdly she didn’t even tell our Toph for like two
				months.
			</p>
			<img src="./img/giovanna.png" alt="Giovanna" />
			<p>
				Giovanna (bartender) studied linguistics and teaches literacy to kids in North Adams; ask
				her about phonemes, Aquinas, dogs, the Death & Co. cocktail book, or the cows at High Lawn.
			</p>
			<img src="./img/peter.jpg" alt="Peter" />
			<p>
				Peter (bartender) looks a lot like Luke Wilson. He was a camp counselor for 14 summers at
				Camp Timanous and has a Master’s in elementary education.
			</p>
			<img src="./img/magdalen.jpg" alt="Magdalen" />
			<p>
				Magdalen (server) also works at the Springfield zoo where she takes care of emus, wallabees,
				and porcupines. “No ostriches, I’d die. Emus are already scary and ostriches are bigger.
				Emus have murder in their eyes.”
			</p>
			<img src="./img/luke.jpg" alt="Luke" />
			<p>Luke (server) is all bundled up for the cold in his nice hat!</p>
		</div>
	</div>
</Frame>

<style>
	h1 {
		margin-bottom: 1rem;
	}

	.bios {
		display: grid;
		grid-template-columns: 130px 1fr;
		gap: 1em;
	}
	.bios img {
		border-radius: 100%;
	}

	.bios p {
		margin: 0;
	}

	@media (max-width: 640px) {
		.bios {
			display: grid;
			grid-template-columns: 60px 1fr;
			gap: 1em;
		}
	}
</style>
