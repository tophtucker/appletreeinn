<script>
	import Lightbox from '$lib/lightbox/Lightbox.svelte';
	import Header from '$lib/template/Header.svelte';
	import Footer from '$lib/template/Footer.svelte';
	import Nav from './Nav.svelte';
	import { setContext } from 'svelte';

	let { children } = $props();

	let lightbox = $state({ src: null });
	setContext('lightbox', lightbox);

	let navOpen = $state(false);
	const toggleNav = () => {
		console.log(navOpen);
		navOpen = !navOpen;
	};
</script>

{#snippet circle()}
	<svg style="display: block; width: 20px; height: 20px; border: 1px solid black;">
		<circle r="3.5" cx="9" cy="9" stroke="black" fill="none"></circle>
	</svg>
{/snippet}

<main>
	{#if navOpen}
		<Nav {toggleNav} />
	{/if}

	<div class="frame">
		{@render circle()}
		<div class="top bottom"></div>
		{@render circle()}

		<div class="left right bottom"></div>
		<div class="bottom"></div>
		<div class="left right bottom"></div>

		<div class="left right mobile-no-border"></div>
		<div class="content"><Header {toggleNav} />{@render children()}<Footer /></div>
		<div class="left right mobile-no-border"></div>

		<div class="left right top"></div>
		<div class="top"></div>
		<div class="left right top"></div>

		{@render circle()}
		<div class="top bottom"></div>
		{@render circle()}
	</div>
</main>

<Lightbox />

<style>
	main {
		display: flex;
		justify-content: center;
		padding: 2em;
		gap: 2em;
	}
	.top {
		border-top: 1px solid var(--black);
	}
	.bottom {
		border-bottom: 1px solid var(--black);
	}
	.left {
		border-left: 1px solid var(--black);
	}
	.right {
		border-right: 1px solid var(--black);
	}
	.frame {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 20px 1fr 20px;
		grid-template-rows: 20px 3px 1fr 3px 20px;
		max-width: 1200px;
		width: 100%;
	}

	@media (max-width: 800px) {
		main {
			padding: 0;
		}
		.mobile-no-border {
			border: none;
		}
	}
</style>
