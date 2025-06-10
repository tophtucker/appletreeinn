<script>
	import Frame from '$lib/template/Frame.svelte';
	import { loadEvents, formatDate, ostrichRoom } from '$lib/index.js';
	import WeekHours from '$lib/components/WeekHours.svelte';
	import GoogleDrive from '$lib/components/GoogleDrive.svelte';
	import Pin from '$lib/components/Pin.svelte';
	import HR from '$lib/components/HR.svelte';

	let events = $state(undefined);
	(async function () {
		events = await loadEvents();
	})();
</script>

<svelte:head>
	<title>The Ostrich Room • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="The Ostrich Room is open for drinks and food (and often live music) Wed.–Sat. at the Apple Tree Inn"
	/>
</svelte:head>

<Frame>
	<div class="intro">
		<div>Drinks • Food • Music</div>
		<div><Pin /> <a href="https://g.co/kgs/7ueSZgy">Google Maps</a> • (413) 637-1910</div>
	</div>
	<div class="inner">
		<div class="hours-wrapper">
			<WeekHours data={ostrichRoom} {events} />
			<div style="text-align: center; font-style: italic; max-width: 420px;">
				<div>Walk-ins welcome.</div>
				<div>
					No reservations for parties of 4 or under. Reservations optional for parties of 5 or more.
				</div>
				<div>Call (413) 637-1910!</div>
			</div>
		</div>
		<HR />
		<h2 id="menus">Menus</h2>
		<div class="menus">
			<GoogleDrive id={'1139xqH3Gb25F5FIamPBE8G-TPF8uputv'} title="Drinks" />
			<GoogleDrive id={'1_9J3SqtSpiVupO8VgDlnq8YMsSdQ3Qgx'} title="Food" />
		</div>
		<HR />
		<div class="gallery">
			<img src="./ostrich-room/cauliflower.jpg" alt="Cauliflower" />
			<img src="./ostrich-room/fireplace.jpg" alt="The inglenook" />
			<img src="./ostrich-room/cocktail.jpg" alt="One of Sean’s cocktails" />
			<img src="./heropics/ostrich3.jpg" alt="The Ostrich Room" />
			<img src="./ostrich-room/IMG_6961.jpg" alt="The Ostrich Room" />
			<img src="./ostrich-room/empty.jpg" alt="The Ostrich Room" />
		</div>
		<HR />
		<h2 id="calendar">Live music calendar</h2>
		<p>
			See <a href="https://instagram.com/appletreeinn">Instagram</a>
			for previews and updates. Email Jenny Rubin at
			<a href="mailto:jennyjrubin70@gmail.com">jennyjrubin70@gmail.com</a> for information about booking
			acts.
		</p>
		{#if events === undefined}
			<div style="padding-bottom: 20em;">Loading music calendar…</div>
		{:else if events === null}
			We can’t load the events calendar right now. Try again in a minute or see our <a
				href="https://instagram.com/appletreeinn">Instagram</a
			> for posts about upcoming shows.
		{:else}
			<table>
				<tbody>
					{#each events.future as { date, description }}
						<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
					{/each}
				</tbody>
			</table>
			<details>
				<summary>Past shows</summary>
				<table>
					<tbody>
						{#each events.past as { date, description }}
							<tr><td style="min-width: 6em;">{formatDate(date)}</td><td>{description}</td></tr>
						{/each}
					</tbody>
				</table>
			</details>
		{/if}
		<HR />

		<p>
			Originally built in 1899 by Henry Pease and Katharine Di Pollone as a billiards room (<a
				href="/about/history">more history</a
			>), our tavern is locally famous for its live music, cocktails, and roaring fires in the
			<em>inglenook</em>. It gets its name from its chandelier of real ostrich eggs.
		</p>

		<div class="letter">
			<p>
				Our menu isn’t just a list of what we pour. It’s a reflection of the time, care, and heart
				we’ve put into building something we hope feels like yours.
			</p>
			<p>
				Our bar program was never meant to be ordinary. We didn’t build it to play it safe — we
				built it to spark curiosity, to share stories through flavor, and to challenge the idea that
				ordering a drink should ever be boring.
			</p>
			<p>
				We hope you find something familiar here — but more than that, we hope you find something
				unexpected. Something that wages you gently (or not so gently) out of your usual go-to.
				That’s the fun part. The good part.
			</p>
			<p>
				This whole project is for the community — for the regulars no stay too long (please keep
				staying), the newcomers who ask good questions, and everyone in between. You’re why we do
				this. You’re what keeps the lights on and the ideas flowing. So thank you. For showing up.
				For trusting us with your time and your taste buds.
			</p>
			<p>
				We promise to keep growing, keep listening, and keep putting everything we’ve got into the
				glass in front of you. Here’s to friends, community and trying new things — together.
			</p>
			<div style="text-align: right;">
				<img src="/signatures/sean.png" alt="Sean's signature" height="100" /><br />
				Sean<br />Bar manager
			</div>
		</div>
	</div>
</Frame>

<style>
	.intro {
		box-shadow: inset 0 0 10em 5vw #000;
		background-image: url('/ostrich-room/packed.jpg');
		background-size: cover;
		background-position: 50% 30%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 1rem;
		/* border-radius: 5px; */
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		position: relative;
		min-height: 500px;
		font-family: watkins;
		color: white;
	}

	.intro div {
		opacity: 0.8;
		text-align: center;
	}

	.intro a {
		color: inherit;
	}

	h1 {
		font-size: 5vw;
		text-shadow: 3px 3px 3px black;
		margin: 3em 1em 3em 1em;
		text-align: center;
	}

	.letter {
		max-width: 640px;
		border: 1px solid var(--black);
		padding: 1em;
	}

	@media (min-width: 1200px) {
		h1 {
			font-size: 80px;
		}
	}

	@media (min-width: 420px) and (max-width: 1200px) {
		h1 {
			font-size: 6vw;
		}
	}

	@media (max-width: 420px) {
		h1 {
			font-size: 2em;
			margin: 3em 1em;
		}
		.intro div {
			font-size: small;
		}
	}

	.hours-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-top: 2em;
	}

	h2 {
		margin: 1em 0 0.5em 0;
	}

	.menus {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		width: 100%;
	}

	.menus img {
		width: 100%;
		border: 1px solid var(--black);
		border-radius: 5px;
	}

	table {
		margin: 1em 0;
		border-collapse: collapse;
	}

	td {
		padding: 0 1em 0.5em 0;
	}

	details {
		margin-bottom: 1em;
	}

	@media (max-width: 800px) {
		.menus {
			display: flex;
			flex-direction: column;
		}
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
	@media (max-width: 800px) {
		.gallery {
			grid-template-rows: 1fr 1fr;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
