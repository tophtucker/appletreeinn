<script>
	import Frame from './Frame.svelte';
	import Header from './Header.svelte';
	import Asterisk from './icons/Asterisk.svelte';
</script>

<svelte:head>
	<title>Avaloch • A Country Inn • Lenox, MA</title>
	<link rel="stylesheet" href="avaloch/styles.css" />
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<Frame>
	<Header />
	<div class="content">
		<div class="img-pair">
			<img src="./avaloch/img/door.jpg" alt="Door" />
			<img src="./avaloch/img/fireplace.jpg" alt="Fireplace" />
		</div>

		<div class="blurbs">
			Come enjoy our
			<Asterisk />
			34 guest rooms
			<Asterisk />
			Hidden gem pool
			<Asterisk />
			Cozy fireplaces
			<Asterisk />
			Hilltop views of Berkshires hills
			<Asterisk />
			Wood-paneled tavern (Wed - Sat)
			<Asterisk />
			Sean’s cocktails
			<Asterisk />
			Lots of live music
			<Asterisk />
			21 acres
			<Asterisk />
			10-minute walk to Kripalu or Tanglewood
		</div>

		<div class="prose-columns">
			<p>
				AVALOCH is a historic estate built high atop a Lenox hill in 1885 by Cecile Bristed, a
				great-granddaughter of John Jacob Astor. She called it <em>The Orchard</em>; in 1952 Roy
				Rappaport turned it into a hotel called <em>Avaloch</em>. Alice Broch of “Alice’s
				Restaurant” ran her third and final restaurant here, <em>Alice’s at Avaloch</em>. In 1983 it
				became the <em>Apple Tree Inn</em>, and today, under Claire, it’s Avaloch again.
			</p>
			<p>
				The summer is the peak season. From late June until early September, the world-famous
				Tanglewood music festival across the street has concerts almost every day. Not just the
				Boston Symphony Orchestra in residence, or the popular artists series featuring the likes of
				James Taylor and John Legend; our personal favorite is to pop into the free open rehearsals.
				Or you lifelong learners can try a lecture! For a swim, jump into our pool, with the best
				view on the property, or drive three minutes to the Stockbridge Bowl.
			</p>
			<p>
				In the fall, visitors tend more so to relax and “peep” the spectacular foliage. We can
				recommend a good local hike for any occasion — bird-watching at Parsons Marsh, a quick loop
				at Olivia’s Overlook, the waterfall at Stevens Glen, a workout at Monument Mountain. Pat the
				cows and get ice cream at High Lawn; go for a horse ride at HomeFarm or HorseWorks. It’s a
				great time to take in the area’s many historic houses and museums, from Edith Wharton to
				Norman Rockwell.
			</p>
			<p>
				In the winter, Bousquet ski mountain is a fifteen minute drive away. If you’re a little
				lazier, you can just sled on our hill. If you’re even lazier, like us, you can enjoy a
				“book” (if you actually read) by the lobby fire, the outdoor fire pit, the tavern’s
				fireplace <em>inglenook</em>, or one of our four guest rooms with real wood-burning private
				fireplaces. You know Melville wrote Moby Dick right up the road, right? What’s your excuse?
			</p>
		</div>

		<div class="gallery">
			<img src="/avaloch/img/firepit.jpg" alt="Firepit" />
			<img src="/avaloch/img/lawn-snow.jpg" alt="The snowy lawn" />
			<img src="/img/ostrich-egg.jpg" alt="The ostrich egg chandelier" />
			<img src="/img/cocktail.jpg" alt="One of Sean’s cocktails" />
			<img src="/heropics/pool1.jpg" alt="The pool" />
			<a href="/about/gallery">Gallery→</a>
		</div>

		<div class="info">
			<div>10 Richmond Mountain Road<br />Lenox, Massachusetts<br />01240</div>
			<div>
				<div>
					(413) 637-1910<br />info@avalochinn.com<br />
					@avaloch.inn
				</div>
			</div>
		</div>
	</div>
</Frame>

<footer>
	<img src="./avaloch/icons/pentathing.svg" alt="Pentathing" width="50" />
	Directly across the road from Tanglewood
</footer>

<style>
	.content {
		padding: 0 6rem;
	}
	.gallery {
		margin: 2rem 0;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
		font-family: watkins;
	}
	.gallery img {
		aspect-ratio: 1;
		width: 200px;
		object-fit: cover;
	}
	.gallery a {
		border: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		text-decoration: none;
		color: inherit;
		transition: color 0.3s;
	}
	.gallery a:hover {
		color: var(--blue);
	}
	.blurbs {
		font-family: watkins;
		text-align: center;
		margin: 2rem 0;
	}
	.prose-columns {
		columns: 3;
	}
	.prose-columns p {
		margin: 0;
		text-indent: 1em;
	}
	.prose-columns p:first-child {
		text-indent: 0;
	}
	.img-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.img-pair img {
		max-width: 100%;
	}
	.info {
		display: flex;
		justify-content: space-between;
		font-family: watkins;
		font-size: 14px;
		margin: 4rem 0;
	}
	.info div:nth-child(2) {
		text-align: right;
	}
	footer {
		font-size: 12px;
		font-family: 'watkins';
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 4rem 0;
		font-size: smaller;
	}
</style>
