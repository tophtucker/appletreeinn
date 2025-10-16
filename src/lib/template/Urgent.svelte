<script>
	import Asterisk from '$lib/icons/Asterisk.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import { bulletin } from './Bulletins.svelte';
	let { bulletins } = $props();
	let urgent = $derived(bulletins?.filter((d) => d.urgent));
	let dialogRef = $state();
	let selectedBulletin = $state();

	function showModal(b) {
		selectedBulletin = b;
		dialogRef.showModal();
	}
</script>

{#if urgent.length}
	{#each urgent as bulletin}
		<div class="urgent">
			<Asterisk style="flex-shrink: 0; margin: 0 4px;" />
			<span>
				{bulletin.text}
				{#if bulletin.details}
					<button class="mini" onclick={() => showModal(bulletin)}>More…</button>
				{/if}
			</span>
			<Asterisk style="flex-shrink: 0; margin: 0 4px;" />
		</div>
	{/each}
{/if}

<Dialog title="Bulletin" bind:ref={dialogRef}>
	{#if selectedBulletin}
		{@render bulletin(selectedBulletin)}
	{/if}
</Dialog>

<style>
	.urgent {
		background: var(--red);
		color: white;
		padding: 8px 4px;
		text-align: center;
		display: flex;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		text-wrap: balance;
	}
</style>
