<script>
	import { getContext } from 'svelte';
	let lightbox = getContext('lightbox');

	let dialogRef;

	$effect(() => {
		if (lightbox.src) {
			dialogRef.showModal();
		} else {
			dialogRef.close();
		}
	});
</script>

<dialog id="lightbox" bind:this={dialogRef} onclose={() => (lightbox.src = null)}>
	<div class="name">YOUR PICTURE</div>
	<img src={lightbox.src} alt="?" />
	<div>
		<button onclick={() => (lightbox.src = null)}>Close</button>
	</div>
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

	dialog img {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0%;
		object-fit: contain;
		min-height: 0;
	}

	dialog .name {
		color: white;
	}

	dialog button {
		background: none;
		color: white;
		border: 1px solid white;
		border-radius: 3px;
	}
</style>
