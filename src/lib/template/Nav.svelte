<script>
	import NavInner from './NavInner.svelte';
	import Icon from '../icons/Icon.svelte';
	let { toggleNav, desktopNav, mobileNav } = $props();

	let dialogRef;
	$effect(() => {
		if (mobileNav) {
			dialogRef.showModal();
		} else {
			dialogRef.close();
		}
	});
</script>

{#if desktopNav}
	<div class="nav-outer">
		<NavInner />
	</div>
{/if}
<dialog class="nav-outer" bind:this={dialogRef}>
	<button onclick={toggleNav}><Icon icon="Close" /></button>
	<NavInner />
</dialog>

<style>
	@media (min-width: 801px) {
		dialog.nav-outer {
			display: none;
		}
		div.nav-outer {
			width: 200px;
			padding-top: 6px;
		}
	}
	@media (max-width: 800px) {
		div.nav-outer {
			display: none;
		}
		dialog.nav-outer {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: white;
			border: 3px double black;
			z-index: 2;
			padding: 1em;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1em;
		}
		dialog.nav-outer::backdrop {
			background: rgba(255, 255, 255, 0.9);
		}
	}

	button {
		position: fixed;
		right: 2rem;
		top: 2rem;
		width: 2rem;
		height: 2rem;
	}
</style>
