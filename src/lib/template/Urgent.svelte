<script>
	import Asterisk from '$lib/icons/Asterisk.svelte';
	let { bulletins } = $props();
	let urgent = $derived(bulletins?.filter((d) => d.urgent));
</script>

{#if urgent.length}
	{#each urgent as bulletin}
		<div class="urgent">
			<Asterisk style="flex-shrink: 0; margin: 0 4px;" />{bulletin.text}<Asterisk
				style="flex-shrink: 0; margin: 0 4px;"
			/>
		</div>
	{/each}
{/if}

<style>
	.urgent {
		background: var(--red);
		color: white;
		padding: 8px 4px 4px 4px;
		text-align: center;
		display: flex;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		text-wrap: balance;
	}
</style>
