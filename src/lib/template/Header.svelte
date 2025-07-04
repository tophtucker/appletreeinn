<script>
	import { page } from '$app/stores';
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	import { getCurrentPage, BOOKING_URL } from '$lib/nav.js';
	const currentPage = getCurrentPage($page);
	let { toggleNav } = $props();
	console.log(currentPage);
</script>

<header style={`--accent: ${currentPage?.section.color || 'var(--black)'};`}>
	<div class="outer-header">
		<button class="hamburger" onclick={toggleNav}><Icon icon="Hamburger" /></button>
		<div class="inner-header">
			<div>Lenox, Mass.</div>
			<a href="/" class="home"><Avaloch style="width: 100%" /></a>
			<div>A country inn</div>
		</div>
		<a class="book" href={BOOKING_URL}>Book<span class="hide-mobile">&nbsp;a&nbsp;room</span></a>
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
	header {
		container-type: inline-size;
	}
	button {
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

	button:hover,
	.book:hover {
		background: var(--black);
		color: white;
	}

	.outer-header {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		align-items: center;
		gap: 1rem;
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
		padding: 3rem 2rem;
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
		margin-bottom: 2rem;
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
		color: var(--accent);
	}

	.hamburger {
		visibility: hidden;
	}

	@media (max-width: 1400px) {
		.hamburger {
			visibility: visible;
		}
	}

	@container (max-width: 1000px) {
		.inner-header {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
		.inner-header > div:first-child {
			display: none;
		}
	}

	@container (max-width: 500px) {
		.home {
			width: 40vw;
		}
		.inner-header {
			gap: 0;
			font-size: 12px;
			padding: 2rem 0;
		}
	}
</style>
