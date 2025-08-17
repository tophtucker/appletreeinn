<script>
	import GalleryGrid from '$lib/components/GalleryGrid.svelte';
	import heroDrone from '$lib/assets/hero-drone.jpg?enhanced';

	console.log('toph', { heroDrone });
</script>

<svelte:head>
	<title>Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="A historic hotel in Lenox, MA, with views of the Berkshires hills and 5-minute walks to Tanglewood or Kripalu"
	/>
</svelte:head>

<div class="inner main">
	<enhanced:img src={heroDrone} alt="The Apple Tree Inn’s Main House" />
	<div class="img-pair">
		<img src="./avaloch/img/door.jpg" alt="Door" loading="lazy" />
		<img src="./avaloch/img/fireplace.jpg" alt="Fireplace" loading="lazy" />
	</div>
	<GalleryGrid />
	<img src="/avaloch/img/porch-breakfast.jpg" alt="Breakfast on the porch" loading="lazy" />
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.img-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	.img-pair img {
		max-width: 100%;
	}

	picture img {
		height: auto;
	}
</style>
