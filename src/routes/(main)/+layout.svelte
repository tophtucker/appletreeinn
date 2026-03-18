<script>
	import Frame from '$lib/template/Frame.svelte';
	let { children, data } = $props();
</script>

<Frame {data}>
	{@render children()}
</Frame>
