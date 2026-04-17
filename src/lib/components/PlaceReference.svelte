<script>
	const MAIN_HOUSE_COORDS = [42.35333258206217, -73.31690434841543];

	let { portableText, children } = $props();

	let { value } = $derived(portableText);

	// value.place._ref is the Sanity document ID of the referenced place
	let href = $derived(`/places/${value.place._ref}`);

	let open = $state(false);

	function handleClick() {
		open = !open;
	}
</script>

<button class="place-reference" onclick={handleClick}>
	{@render children()}
</button>
