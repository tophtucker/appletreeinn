<script module>
	export { bulletin };
</script>

<script>
	import Dialog from '$lib/components/Dialog.svelte';
	import { formatDate } from '$lib/index.js';
	// TODO: let sanity scope a bulletin to a given route
	let { bulletins } = $props();
	let dialogRef = $state();
	const open = () => {
		dialogRef.showModal();
	};
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

{#if bulletins.length > 0}
	<button class="bulletins" onclick={open}>
		<h6>Bulletins</h6>
		<div class="bulletins-content">
			{#each bulletins as b}
				<div>
					{b.text}{#if b.details}{' '}<small>(more)</small>{/if}
				</div>
			{/each}
		</div>
	</button>
{/if}

<!-- TODO: show only one bulletin at a time? -->
<Dialog title="Bulletins" bind:ref={dialogRef}>
	<div style="display: flex; flex-direction: column; gap: 1rem;">
		{#each bulletins as b}
			{@render bulletin(b)}
		{/each}
	</div>
</Dialog>

<style>
	button.bulletins {
		border: none;
		text-align: inherit;
	}
	button.bulletins:hover {
		background: none;
		color: var(--blue);
		cursor: pointer;
	}

	.bulletins .bulletins-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.details-wrapper {
		padding-left: 2rem;
	}
</style>
