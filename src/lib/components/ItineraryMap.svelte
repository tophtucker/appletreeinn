<script>
	import { onMount, onDestroy } from 'svelte';
	import { INN_COORDINATES } from '$lib/index.js';

	let { itinerary } = $props();

	// Extract unique places with coordinates from all markDefs across all blocks
	let places = $derived(
		Object.values(
			itinerary.body
				.flatMap((block) => block.markDefs ?? [])
				.filter((m) => m._type === 'placeReference' && m.place?.coordinates)
				.reduce((acc, m) => {
					acc[m.place._id] = m.place;
					return acc;
				}, {})
		)
	);

	let mapEl = $state(null);
	let map = null;

	onMount(async () => {
		if (!places.length) return;

		const L = (await import('leaflet')).default;
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapEl, {
			zoomControl: false,
			scrollWheelZoom: false,
			dragging: false,
			touchZoom: false,
			doubleClickZoom: false,
			boxZoom: false,
			keyboard: false,
			attributionControl: false
		});

		L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			maxZoom: 19
		}).addTo(map);

		const markers = places.map((place) => {
			const { latitude, longitude } = place.coordinates;
			const icon = L.divIcon({
				className: '',
				html: `<div class="map-marker"><div class="map-pin"></div><span class="map-label">${place.name}</span></div>`,
				iconSize: [12, 12],
				iconAnchor: [6, 6]
			});
			return L.marker([latitude, longitude], { icon }).addTo(map);
		});

		// Add inn star marker
		const innIcon = L.divIcon({
			className: '',
			html: `<div class="map-inn-star">★</div>`,
			iconSize: [16, 16],
			iconAnchor: [8, 8]
		});
		const innMarker = L.marker([INN_COORDINATES.latitude, INN_COORDINATES.longitude], {
			icon: innIcon
		}).addTo(map);

		// Fit map to bounds of all markers
		const group = L.featureGroup([...markers, innMarker]);
		map.fitBounds(group.getBounds().pad(0));
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

{#if places.length}
	<div class="map-wrap">
		<div bind:this={mapEl} class="map"></div>
	</div>
{/if}

<style>
	.map-wrap {
		margin: 1rem 0;
		border: 1px solid #ddd;
		border-radius: 6px;
		overflow: hidden;
	}

	.map-wrap * {
		pointer-events: none !important;
	}

	.map {
		height: 100%;
		width: 100%;
	}

	:global(.leaflet-marker-icon) {
		cursor: default !important;
	}

	:global(.map-pin) {
		width: 8px;
		height: 8px;
		flex-shrink: 0;
		background: black;
		border: 1px solid white;
		border-radius: 50%;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	}

	:global(.map-marker) {
		display: flex;
		align-items: center;
		gap: 3px;
		white-space: nowrap;
	}

	:global(.map-inn-star) {
		font-size: 16px;
		line-height: 1;
		color: var(--gold);
	}

	:global(.map-label) {
		font-size: 0.75rem;
		/*font-weight: 500;*/
		color: black;
		line-height: 1;
	}
</style>
