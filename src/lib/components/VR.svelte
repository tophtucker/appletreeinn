<script>
	import Asterisk from '$lib/icons/Asterisk.svelte';
	let props = $props();
</script>

<div {...props} class={`vr ${props.class}`}>
	<div></div>
	<Asterisk />
	<div></div>
</div>

<style>
	.vr {
		display: grid;
		grid-template-rows: 1fr 12px 1fr;
		justify-items: center;
		gap: 0.5rem;
	}
	.vr div {
		border: none;
		border-left: 1px solid black;
	}
</style>
