<script>
	import NavInner from './NavInner.svelte';
	import Icon from '../icons/Icon.svelte';
	let { toggleNav, mobileNav } = $props();

	let dialogRef;
	$effect(() => {
		if (mobileNav) {
			dialogRef.showModal();
		} else {
			dialogRef.close();
		}
	});
</script>

<div class="nav-outer">
	<NavInner />
</div>
<dialog class="nav-outer" bind:this={dialogRef}>
	<button onclick={toggleNav}><Icon icon="Close" /></button>
	<NavInner />
</dialog>

<style>
	dialog.nav-outer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		max-width: 420px;
		height: 100%;
		min-height: 100%;
		background: white;
		border: 3px double black;
		z-index: 2;
		padding: 1em;
		margin: 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1em;
	}
	dialog.nav-outer::backdrop {
		background: rgba(255, 255, 255, 0.7);
	}

	@media (min-width: 600px) {
		dialog.nav-outer {
			margin: 0;
			border: none;
			border-right: 3px double black;
			min-height: 100%;
		}
	}
	@media (min-width: 1401px) {
		dialog.nav-outer {
			display: none;
		}
		div.nav-outer {
			width: 200px;
			padding-top: 6px;
		}
	}
	@media (max-width: 1400px) {
		div.nav-outer {
			display: none;
		}
	}

	button {
		position: absolute;
		right: 1rem;
		top: 1rem;
		width: 2rem;
		height: 2rem;
	}
</style>
