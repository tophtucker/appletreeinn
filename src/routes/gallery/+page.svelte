<script>
	import Frame from '$lib/template/Frame.svelte';
	export let data;
</script>

<svelte:head>
	<title>About us • Apple Tree Inn • Lenox, MA</title>
	<meta
		name="description"
		content="Claire took over the Apple Tree Inn in April 2024, realizing a lifelong dream"
	/>
</svelte:head>

<Frame>
	<div class="inner">
		<h1>Gallery</h1>

		<div class="grid">
			{#each data.images as image}
				<img src={`/gallery/image/${image.id}`} alt={image.name} />
			{/each}
		</div>
	</div>
</Frame>

<style>
	h1 {
		margin-bottom: 1em;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
</style>
