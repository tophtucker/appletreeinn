<script>
	import { page } from '$app/stores';
	import Frame from '$lib/template/Frame.svelte';
	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="canonical" href="https://avalochinn.com{$page.url.pathname}" />
</svelte:head>

<Frame {data}>
	{@render children()}
</Frame>
