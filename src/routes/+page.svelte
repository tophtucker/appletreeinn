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
