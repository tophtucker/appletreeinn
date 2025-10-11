<script>
	import Icon from '$lib/icons/Icon.svelte';
	import { getContext } from 'svelte';
	let dialog = getContext('dialog');

	let dialogRef;

	$effect(() => {
		if (dialog.src) {
			dialogRef.showModal();
		} else {
			dialogRef.close();
		}
	});

	function close() {
		dialog.src = null;
	}
</script>

<dialog bind:this={dialogRef} onclose={() => (dialog.src = null)}>
	<div class="header">
		Dialog
		<button onclick={close}><Icon icon="Close" /></button>
	</div>
	{#if dialog.src}
		{@render dialog.src()}
	{/if}
</dialog>

<style>
	dialog {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: none;
		border: none;
		z-index: 2;
		padding: 1em;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1em;
	}

	dialog[open] {
		display: flex;
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.9);
	}

	dialog .header {
		color: white;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		font-family: watkins;
	}

	dialog button {
		background: none;
		color: white;
		border: 1px solid white;
		border-radius: 3px;
		font-family: inherit;
		padding-top: 5px;
		width: 24px;
		height: 24px;
	}
</style>
