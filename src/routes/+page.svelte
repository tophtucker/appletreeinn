<script>
	import Frame from '$lib/template/Frame.svelte';
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
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
		<div class="section"><GalleryGrid /></div>
	</div>
</Frame>

<style>
	.section {
		margin: 1rem 0;
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
