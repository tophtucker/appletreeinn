<script>
	let { portableText, children } = $props();

	let { value } = $derived(portableText);
	let { name, address, coordinates } = $derived(value.place);

	let open = $state(false);
	let wrapper = $state(null);

	function handleWindowClick(event) {
		if (open && wrapper && !wrapper.contains(event.target)) {
			open = false;
		}
	}
</script>

<svelte:window onclick={handleWindowClick} />

<span class="wrapper" bind:this={wrapper}>
	<button class="place-reference" onclick={() => (open = !open)}>
		{@render children()}
	</button>
	{#if open}
		<div class="popover">
			<div>{name}</div>
			<div>{address}</div>
		</div>
	{/if}
</span>

<style>
	.wrapper {
		position: relative;
		display: inline-block;
	}

	.place-reference {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		text-decoration: underline dotted;
	}

	.popover {
		position: absolute;
		top: 100%;
		left: 0;
		margin-top: 4px;
		z-index: 100;
		padding: 0.75rem 1rem;
		border: 1px solid #ccc;
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		background: white;
		min-width: 200px;
	}
</style>
