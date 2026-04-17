<script>
	const INN_COORDINATES = { latitude: 42.35333212075441, longitude: -73.31689264984297 };

	let { portableText, children } = $props();

	let { value } = $derived(portableText);
	let { name, address, coordinates, gmaps, website } = $derived(value.place);

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
	<button class="place" onclick={() => (open = !open)}>
		{@render children()}
	</button>
	{#if open}
		<div class="popover">
			<div class="name">{name}</div>
			<div class="address">{address.street}</div>
			<div class="address">{address.city}</div>
			<div style="display: flex; gap: 6px;">
				{#if gmaps}
					<a href={gmaps} target="_blank">Map</a>
				{:else}
					<a
						href={`https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`}
						target="_blank">Map</a
					>
				{/if}
				{#if website}
					<a href={website} target="_blank">Website</a>
				{/if}
			</div>
		</div>
	{/if}
</span>

<style>
	.wrapper {
		position: relative;
		display: inline-block;
	}

	.place {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		outline: 1px solid #ccc;
		border-radius: 2px;
		padding: 0 4px;
	}
	.place:hover {
		border: none;
		background: none;
		color: inherit;
		outline-color: var(--blue);
	}

	.popover {
		font-size: smaller;
		position: absolute;
		top: calc(100% + 2px);
		left: 0;
		margin-top: 4px;
		z-index: 100;
		padding: 0.75rem 1rem;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		background: white;
		min-width: 200px;
	}
	.name {
		font-weight: bold;
	}
</style>
