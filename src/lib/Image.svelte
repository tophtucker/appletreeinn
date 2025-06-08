<script>
	import { getContext } from 'svelte';
	let props = $props();
	let lightbox = getContext('lightbox');
</script>

<img
	{...props}
	onclick={(e) => {
		lightbox.src = e.currentTarget.src;
	}}
/>

<style>
	img {
		cursor: pointer;
	}
</style>
