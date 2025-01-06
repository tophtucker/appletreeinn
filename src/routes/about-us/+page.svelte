<script>
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';
	import Subheader from './Subheader.svelte';
</script>

<svelte:head>
	<title>About us • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
</svelte:head>

<Header />

<Subheader />

<div class="inner">
	<h1>Staff</h1>
	<div class="grid-or-flex">
		<div>
			<p>Claire took over the hotel in April 2024, realizing a lifelong dream.</p>
			<p>
				For three summers in college, Claire worked at the concierge desk of the Chatham Bars Inn in
				Cape Cod and fell in love with the industry. She loved the hours sitting at her desk in its
				glamorous old lobby, helping guests experience the best of the area. She later interned at
				Rosewood and then, after business school, managed hotels from the corporate side for
				Starwood. After three years there, she decided she understood enough to strike out on her
				own, and is excited to now be in a position to run it end-to-end: build the business, craft
				the guest experience, and introduce you to town. <a href="/about-us/claire"
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
			src="./heropics/claire-toph.jpg"
			alt="Claire and Toph, smiling at the camera, Toph’s arm lovingly around Claire’s shoulder, standing at the top of the Apple Tree hill in front of the unseen old carriage house, a beautiful verdant backdrop with layered mountains and just a hint of the Stockbridge Bowl visible at the far right"
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
				got him doing (climbing ladders to update security cameras or cleaning up bird poop), we bet
				we have achieved “different”. His mom is in Toph’s mom’s book group and has always worked at
				bookstores, which is how she met Christian’s dad. Christian is currently reading:
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

	<div class="bios">
		<img src="./img/abby.jpg" alt="Abby" />
		<p>
			Abby (front desk and private events) grew up like a mile from here; she went to Lenox High and
			UMass Amherst, where she played soccer. We think maybe she likes Disney movies but we’re not
			sure. Her brother goes by “Toph” but weirdly she didn’t even tell our Toph for like two
			months.
		</p>
		<div style="height: 140px; position: relative;">
			<img
				src="./img/hagai.png"
				alt="Hagai"
				style="width: 90px; position: absolute; top: 0; left: 0;"
			/>
			<img
				src="./img/adi.jpg"
				alt="Adi"
				style="width: 90px; position: absolute; bottom: 0; right: 0; border: 1px solid white;"
			/>
		</div>
		<p>
			Hagai (chef) and Adi (Baladi mastermind) moved here from Israel a couple years ago. Hagai’s
			been doing dinner in the Ostrich Room since the start of the summer, and now Adi is coming
			aboard for our new brunch restaurant, Baladi. Hagai once bought a didgeridoo in Australia and
			lugged it all over the world and has learned to play a little bit.
		</p>
		<img src="./img/sean.jpg" alt="Sean" />
		<p>
			Sean (bar manager) just started so Toph doesn’t know much about him as of writing this but idk
			he seems great.
		</p>
		<img src="./img/giovanna.png" alt="Giovanna" />
		<p>
			Giovanna (bartender) studied linguistics and teaches literacy to kids in North Adams; ask her
			about phonemes and stuff. Or Aquinas. Or her dogs. Or how much she loves the cows at High
			Lawn. Or the Death & Co. cocktail book.
		</p>
		<img src="./img/nic.png" alt="Nic" />
		<p>
			Nic (bartender), also born and raised somewhere around here, is an interior designer by day.
			Ask him about boating around the lake, his parents’ professional ski careers, or navigating
			the Tanglewood ticket counter.
		</p>
		<img src="./img/peter.jpg" alt="Peter" />
		<p>
			Peter (bartender) looks a lot like Luke Wilson. He was a camp counselor for 14 summers at Camp
			Timanous and has a Master’s in elementary education.
		</p>
		<img src="./img/magdalen.jpg" alt="Magdalen" />
		<p>
			Magdalen (server) also works at the Springfield zoo where she takes care of emus, wallabees,
			and porcupines. “No ostriches, I’d die. Emus are already scary and ostriches are bigger. Emus
			have murder in their eyes.”
		</p>
		<img src="./img/luke.jpg" alt="Luke" />
		<p>Luke (server) is all bundled up for the cold in his nice hat!</p>
	</div>
</div>

<Footer />

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
