<script>
	import { page } from '$app/stores';
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	import { getCurrentPage, BOOKING_URL } from '$lib/nav.js';
	const currentPage = getCurrentPage($page);
	let { toggleNav } = $props();
</script>

<header style={`--accent: ${currentPage?.section.color || 'var(--black)'};`}>
	<div class="outer-header">
		<button onclick={toggleNav}><Icon icon="Hamburger" /></button>
		<div class="inner-header">
			<div>Lenox, Mass.</div>
			<a href="/" class="home"><Avaloch /></a>
			<div>A country inn</div>
		</div>
		<a class="book" href={BOOKING_URL}>Book now</a>
	</div>
	{#if currentPage && currentPage.section && currentPage.pathname !== '/'}
		<div class="subheader">
			<div class="spacer"></div>
			<div class="subheader-inner">
				<h2>{currentPage.section.title}</h2>
			</div>
			<div class="spacer"></div>
		</div>
	{/if}
</header>

<style>
	button {
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		opacity: 1;
		border: 1px solid black;
		padding: 3px;
		background-color: #0000;
		border-radius: 0;
		justify-self: start;
		width: 2rem;
		height: 2rem;
	}

	.book {
		color: inherit;
		border: 1px solid black;
		justify-self: end;
		text-decoration: none;
		height: 2rem;
		padding: 0 6px;
		display: flex;
		align-items: center;
	}

	.outer-header {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		align-items: center;
		gap: 2rem;
		padding: 0 var(--gutter);
	}
	.inner-header {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		gap: 2rem;
		font-size: 14px;
		font-family: 'watkins';
		justify-content: space-between;
		align-items: center;
		padding: 3em 2em;
		transform: rotate(-1deg);
		/* text-align: center; */
	}
	.inner-header > div {
		padding-top: 1em;
	}
	.inner-header > div:first-child {
		text-align: right;
	}

	.subheader {
		padding: 0 var(--gutter);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.spacer {
		flex-grow: 1;
		border-bottom: 1px solid black;
	}
	.subheader-inner {
		padding: 3px;
		border: 1px solid black;
	}
	.subheader-inner h2 {
		background-color: var(--accent);
		color: white;
		padding: 0.5rem 1rem 0.2rem 1rem;
		margin: 0;
		position: relative;
		font-size: 1.3rem;
	}

	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		color: var(--accent);
		text-decoration: none;
	}
</style>
