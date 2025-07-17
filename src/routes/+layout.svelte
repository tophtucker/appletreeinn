<script>
	import Frame from '$lib/template/Frame.svelte';
	let { children } = $props();
</script>

<Frame>
	{@render children()}
</Frame>
