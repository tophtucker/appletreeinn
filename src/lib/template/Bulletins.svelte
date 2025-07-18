<script>
	import Icon from '$lib/icons/Icon.svelte';
	import { formatDate } from '$lib/index.js';
	// TODO: let sanity scope a bulletin to a given route
	let { bulletins } = $props();
	let dialogRef;
	const open = () => {
		dialogRef.showModal();
	};
	const close = () => {
		dialogRef.close();
	};
</script>

{#if bulletins.length > 0}
	<button class="bulletins" onclick={open}>
		<h6>Bulletins</h6>
		<div class="bulletins-content">
			{#each bulletins as b}
				<div>
					{b.text}{#if b.details}{' '}<small>More&nbsp;→</small>{/if}
				</div>
			{/each}
		</div>
	</button>
{/if}

<dialog bind:this={dialogRef}>
	<div class="button-wrapper">Bulletins<button onclick={close}><Icon icon="Close" /></button></div>
	<div class="bulletins-content">
		{#each bulletins as b}
			<div>
				<small>{formatDate(b.startTime)}</small>
				<div>{b.text}</div>
				{#if b.details}
					<div class="details-wrapper">
						{@html b.details}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</dialog>

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

	small {
		text-transform: uppercase;
	}

	.details-wrapper {
		padding-left: 2rem;
	}

	dialog .bulletins-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	dialog {
		max-width: 720px;
	}
	dialog .button-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		font-family: watkins;
	}
	dialog button {
		width: 2rem;
		height: 2rem;
	}
</style>
