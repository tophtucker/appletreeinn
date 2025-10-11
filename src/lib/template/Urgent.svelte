<script>
	import Asterisk from '$lib/icons/Asterisk.svelte';
	import { formatDate } from '$lib/index.js';
	import { getContext } from 'svelte';
	let { bulletins } = $props();
	let urgent = $derived(bulletins?.filter((d) => d.urgent));
	let dialog = getContext('dialog');

	function setDialog(b) {
		dialog.src = bulletin(b);
	}
</script>

{#snippet bulletin(b)}
	<div>
		<small>{formatDate(b.startTime)}</small>
		<div>{b.text}</div>
		{#if b.details}
			<div class="details-wrapper">
				{@html b.details}
			</div>
		{/if}
	</div>
{/snippet}

{#if urgent.length}
	{#each urgent as bulletin}
		<div class="urgent">
			{#if bulletin.details}
				<button onclick={() => setDialog(bulletin)}>
					<Asterisk style="flex-shrink: 0; margin: 0 4px;" />{bulletin.text}<Asterisk
						style="flex-shrink: 0; margin: 0 4px;"
					/>
				</button>
			{:else}
				<Asterisk style="flex-shrink: 0; margin: 0 4px;" />{bulletin.text}<Asterisk
					style="flex-shrink: 0; margin: 0 4px;"
				/>
			{/if}
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
