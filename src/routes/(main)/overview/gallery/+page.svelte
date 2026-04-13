<script>
	import Image from '$lib/lightbox/Image.svelte';
	let { data } = $props();
	let { mainGallery, otherGalleries } = data;
</script>

<svelte:head>
	<title>Gallery • Avaloch (formerly Apple Tree Inn) • Lenox, Mass.</title>
	<meta
		name="description"
		content="Photographs of Avaloch in all seasons featuring the rooms, food, cocktails, weddings, fireplaces, sledding, and foliage."
	/>
</svelte:head>

<div class="inner">
	<h1>Gallery</h1>

	<div class="grid">
		{#each mainGallery as image}
			<Image
				src={image.image}
				alt={image.caption}
				loading="lazy"
				style="object-fit: cover; width: 100%; height: 100%;"
			/>
		{/each}
	</div>

	{#each otherGalleries as gallery}
		<h2>{gallery.name}</h2>
		<div class="grid">
			{#each gallery.images as image}
				<Image
					src={image.image}
					alt={image.caption}
					loading="lazy"
					style="object-fit: cover; width: 100%; height: 100%;"
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
	h1 {
		margin-bottom: 1em;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-auto-rows: 200px;
		gap: 1rem;
	}
</style>
