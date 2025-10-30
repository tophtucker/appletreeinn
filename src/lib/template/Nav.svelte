<script>
	import { untrack } from 'svelte';
	import { page } from '$app/stores';
	import NavInner from './NavInner.svelte';
	import Icon from '../icons/Icon.svelte';
	let { toggleNav, mobileNav, data } = $props();

	let dialogRef = $state();
	$effect(() => {
		if (mobileNav) {
			dialogRef.showModal();
		} else {
			dialogRef.close();
		}
	});
	$effect(() => {
		// Close nav if open on page navigation
		const path = $page.url.pathname;
		if (untrack(() => mobileNav)) toggleNav();
	});
</script>

<div class="nav">
	<NavInner {data} />
</div>
<dialog class="nav" bind:this={dialogRef}>
	<button onclick={toggleNav}><Icon icon="Close" /></button>
	<NavInner {data} />
</dialog>

<style>
	dialog.nav {
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
		padding: 2rem;
		margin: 0;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
	}
	dialog.nav::backdrop {
		background: rgba(255, 255, 255, 0.7);
	}

	@media (min-width: 600px) {
		dialog.nav {
			margin: 0;
			border: none;
			border-right: 3px double black;
			min-height: 100%;
		}
	}
	@media (min-width: 1401px) {
		dialog.nav {
			display: none;
		}
		div.nav {
			width: 200px;
			padding-top: 5rem;
			flex-shrink: 0;
		}
	}
	@media (max-width: 1400px) {
		div.nav {
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
