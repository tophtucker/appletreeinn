<script>
	// TODO: let sanity scope a bulletin to a given route
	let { bulletins } = $props();
</script>

{#if bulletins}
	<div>
		<h6>Bulletins</h6>
		{#each bulletins as b}
			<div>{b.text}</div>
			<!-- TODO: details dialog -->
		{/each}
	</div>
{/if}
