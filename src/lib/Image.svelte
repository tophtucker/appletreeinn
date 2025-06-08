<script>
	import { getContext } from 'svelte';
	let props = $props();
	let lightbox = getContext('lightbox');
</script>

<img
	{...props}
	data-lightbox
	onclick={(e) => {
		lightbox.src = e.currentTarget;
	}}
/>

<style>
	img {
		cursor: pointer;
	}
</style>
