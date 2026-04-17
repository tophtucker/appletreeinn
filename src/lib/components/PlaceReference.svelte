<script>
	import Icon from '$lib/icons/Icon.svelte';

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

	function toRad(deg) {
		return (deg * Math.PI) / 180;
	}

	// Haversine distance in miles
	function distanceMiles(a, b) {
		const R = 3958.8;
		const dLat = toRad(b.latitude - a.latitude);
		const dLon = toRad(b.longitude - a.longitude);
		const sinDLat = Math.sin(dLat / 2);
		const sinDLon = Math.sin(dLon / 2);
		const h =
			sinDLat * sinDLat +
			Math.cos(toRad(a.latitude)) * Math.cos(toRad(b.latitude)) * sinDLon * sinDLon;
		return R * 2 * Math.asin(Math.sqrt(h));
	}

	// Bearing in degrees clockwise from north (0–360)
	function bearingDeg(from, to) {
		const lat1 = toRad(from.latitude);
		const lat2 = toRad(to.latitude);
		const dLon = toRad(to.longitude - from.longitude);
		const y = Math.sin(dLon) * Math.cos(lat2);
		const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
		return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
	}

	const COMPASS_POINTS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
	function bearingLabel(deg) {
		const i = Math.round(deg / 45) % 8;
		return COMPASS_POINTS[i];
	}

	let bearing = $derived(coordinates ? bearingDeg(INN_COORDINATES, coordinates) : null);
	let distance = $derived(coordinates ? distanceMiles(INN_COORDINATES, coordinates) : null);
	let directionLabel = $derived(bearing != null ? bearingLabel(bearing) : null);
	let distanceLabel = $derived(
		distance != null ? `${Math.round(distance)} mi. ${directionLabel}` : null
	);
</script>

<svelte:window onclick={handleWindowClick} />

<span class="wrapper" bind:this={wrapper}>
	<button class="place" onclick={() => (open = !open)}>
		{@render children()}
		<Icon icon="ArrowUp" class="arrow" style={`transform: rotate(${bearing}deg); opacity: 0.5`} />
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
			{#if bearing != null}
				<div class="direction">
					<Icon icon="ArrowUp" style={`transform: rotate(${bearing}deg);`} />
					<span>{distanceLabel}</span>
				</div>
			{/if}
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
		outline-offset: -0.5px;
		border-radius: 2px;
		padding: 0 4px;
	}
	.place:hover {
		border: none;
		background: none;
		color: inherit;
		outline-color: var(--blue);
		color: var(--blue);
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
	.direction {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-top: 0.5rem;
	}
	.name {
		font-weight: bold;
	}
</style>
