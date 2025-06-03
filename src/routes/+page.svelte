<script>
	import Frame from './Frame.svelte';
	import Header from './Header.svelte';
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

		<div class="grid-1-2">
			<div class="panel">
				<img src="./avaloch/icons/doorknob.svg" alt="Pentathing" width="25" />
				Avaloch is a historic estate built in 1885 high atop a hill in the Berkshires on 21 acres.
			</div>
			<img src="./avaloch/img/lawn-snow.jpg" alt="Lawn in snow" />
		</div>

		<div class="panel">
			<img src="./avaloch/icons/pane.svg" alt="Pentathing" width="25" />
			Enjoy the pool in summer; the fireplaces in winter; and board games all year round.
		</div>

		<div class="panel">
			<img src="./avaloch/icons/door.svg" alt="Pentathing" width="25" />
			Get drinks or dinner with local live music in our 1898 wood-paneled tavern, The Ostrich Room.
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
	.grid-1-2 {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1em;
	}
	.panel {
		padding: 2em;
		font-family: 'watkins';
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
