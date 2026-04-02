<script>
	import Asterisk from '$lib/icons/Asterisk.svelte';
	let props = $props();
</script>

<div {...props} class={`hr ${props.class}`}>
	<hr />
	<Asterisk />
	<hr />
</div>

<style>
	.hr {
		display: grid;
		grid-template-columns: 1fr 12px 1fr;
		align-items: center;
		gap: 0.5rem;
	}
	.margin-0 hr {
		margin: 0;
	}
</style>
