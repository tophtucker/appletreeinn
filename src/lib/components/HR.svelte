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
	.hr hr {
		width: 100%;
		border: none;
		border-top: 1px solid black;
	}
	.margin-0 hr {
		margin: 0;
	}
</style>
