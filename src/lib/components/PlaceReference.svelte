<script>
	let { portableText, children } = $props();

	let { value } = $derived(portableText);

	// value.place._ref is the Sanity document ID of the referenced place
	let href = $derived(`/places/${value.place._ref}`);
</script>

<a {href} class="place-reference">
	{@render children()}
</a>
