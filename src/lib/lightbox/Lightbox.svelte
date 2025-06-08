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

	function advance(direction) {
		const images = document.querySelectorAll('[data-lightbox]');
		let currentIndex = Array.from(images).indexOf(lightbox.src);
		currentIndex += direction;
		if (currentIndex < 0) currentIndex = images.length - 1;
		if (currentIndex >= images.length) currentIndex = 0;
		lightbox.src = images[currentIndex];
	}
</script>

<dialog id="lightbox" bind:this={dialogRef} onclose={() => (lightbox.src = null)}>
	<div class="header">
		{lightbox.src?.getAttribute('alt')}
		<div>
			<button onclick={() => advance(-1)}>Previous</button>
			<button onclick={() => advance(1)}>Next</button>
			<button onclick={() => (lightbox.src = null)}>Close</button>
		</div>
	</div>
	<img src={lightbox.src?.getAttribute('src')} alt={lightbox.src?.getAttribute('alt')} />
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

	dialog .header {
		color: white;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		font-family: watkins;
	}

	dialog .header > div {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	dialog button {
		background: none;
		color: white;
		border: 1px solid white;
		border-radius: 3px;
		font-family: inherit;
		padding-top: 5px;
	}
</style>
