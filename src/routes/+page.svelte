<script>
	import Frame from '$lib/template/Frame.svelte';
	import Asterisk from '$lib/icons/Asterisk.svelte';
	import Image from '$lib/lightbox/Image.svelte';
</script>

<svelte:head>
	<title>Avaloch • A Country Inn • Lenox, MA</title>
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<Frame>
	<div class="inner">
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

		<div class="gallery">
			<Image src="/avaloch/img/firepit.jpg" alt="Firepit" class="square" />
			<Image src="/avaloch/img/lawn-snow.jpg" alt="The snowy lawn" class="square" />
			<Image src="/avaloch/img/music.jpg" alt="The Ostrich Room" class="square" />
			<Image src="/img/cocktail.jpg" alt="One of Sean’s cocktails" class="square" />
			<Image src="/heropics/pool1.jpg" alt="The pool" class="square" />
			<a href="/about/gallery"><span>Gallery</span></a>
		</div>
	</div>
</Frame>

<style>
	.gallery {
		margin: 2rem 0;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 1rem;
		font-family: watkins;
	}
	.gallery a {
		/* border: 1px solid black; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		text-decoration: none;
		color: inherit;
		transition: color 0.3s;

		background-image: url('/avaloch/img/gallery.png');
		background-size: cover;
	}
	.gallery a span {
		padding: 10px 6px 8px 6px;
		background: white;
	}
	.gallery a:hover {
		color: var(--blue);
	}
	.blurbs {
		font-family: watkins;
		text-align: center;
		margin: 2rem 0;
	}
	.img-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.img-pair img {
		max-width: 100%;
	}
</style>
