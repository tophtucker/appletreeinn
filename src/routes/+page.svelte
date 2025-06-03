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
			<div>
				Avaloch is a historic estate built in 1885 high atop a hill in the Berkshires on 21 acres.
			</div>
			<Asterisk size={18} />
			<div>Enjoy the pool in summer; the fireplaces in winter; and board games all year round.</div>
			<Asterisk size={18} />
			<div>Get drinks or dinner with local live music in our 1898 wood-paneled tavern.</div>
		</div>

		<div class="prose-columns">
			<p>
				AVALOCH is a historic estate built in 1885 high atop a hill in the Berkshires by Cecile
				Bristed, a great-granddaughter of John Jacob Astor. She called it <em>The Orchard</em>; in
				1952 Roy Rappaport turned it into a hotel called <em>Avaloch</em>. Alice Broch of “Alice’s
				Restaurant” ran her third and final restaurant here, <em>Alice’s at Avaloch</em>. In 1983 it
				became the <em>Apple Tree Inn</em>, and today it’s Avaloch again.
			</p>
		</div>

		<footer>
			<img src="./avaloch/icons/pentathing.svg" alt="Pentathing" width="50" />
			Directly across the road from Tanglewood
		</footer>
	</div>
</Frame>

<style>
	.content {
		padding: 0 6em;
	}
	.blurbs {
		font-size: 1.8em;
		display: grid;
		grid-template-columns: 1fr 18px 1fr 18px 1fr;
		gap: 1em;
		text-align: center;
		align-items: center;
		margin: 2em 0;
	}
	.prose-columns {
		columns: 2;
	}
	.img-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
	}
	.img-pair img {
		max-width: 100%;
	}
	footer {
		font-size: 12px;
		font-family: 'watkins';
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;
		padding: 4em 0;
		font-size: smaller;
	}
</style>
