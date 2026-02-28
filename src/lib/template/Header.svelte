<script>
	import { page } from '$app/stores';
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import ATI from '$lib/icons/ATI.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	import { getCurrentPage, BOOKING_URL } from '$lib/nav.js';
	const currentPage = $derived(getCurrentPage($page));
	let { toggleNav } = $props();
</script>

<header style={`--accent: ${currentPage?.section.color || 'var(--black)'};`}>
	<div class="outer-header">
		<button class="hamburger" onclick={toggleNav}><Icon icon="Hamburger" /></button>
		<div class="tagline hide-medium">Lenox, Mass.</div>
		<div class="inner-header">
			<a href="/" class="home" style="width: 100%;">
				<ATI class="ati" />
				<Avaloch class="avaloch" />
			</a>
			<div class="tagline show-medium">Lenox, Mass.</div>
		</div>
		<a class="book cta disabled" href={BOOKING_URL}
			>Book<span class="hide-mobile">&nbsp;a&nbsp;room</span></a
		>
		<div class="tape">
			UNDER RENOVATION • UNDER RENOVATION • UNDER RENOVATION • UNDER RENOVATION • UNDER RENOVATION •
			UNDER RENOVATION • UNDER RENOVATION • UNDER RENOVATION
		</div>
	</div>
	{#if currentPage && currentPage.section && currentPage.pathname !== '/'}
		<div class="subheader">
			<div class="spacer"></div>
			<div class="subheader-inner">
				<h2>
					{#if currentPage.section.active}
						{currentPage.section.title}
					{:else}
						<a href={currentPage.section.pathname}>{currentPage.section.title}</a>
					{/if}
				</h2>
			</div>
			<div class="spacer"></div>
		</div>
	{/if}
</header>

<style>
	.tape {
		position: absolute;
		display: inline;
		background: var(--gold);
		color: white;
		border: 1px solid white;
		width: auto;
		top: 0px;
		width: 120%;
		transform: rotate(20deg);
		padding: 0.25rem 0.5rem 0.2rem 0.5rem;
		font-variation-settings: 'wght' 800;
		text-align: center;
		font-family: var(--hed-font);
		font-size: larger;
		white-space: nowrap;
	}

	header {
		container-type: inline-size;
		position: relative;
		overflow: hidden;
	}

	@media (max-width: 800px) {
		header {
			overflow: visible; /* TODO: remove after renovation */
		}

		.tape {
			font-size: small;
		}
	}

	button {
		justify-self: start;
		width: 2rem;
		height: 2rem;
	}

	.book {
		justify-self: end;
	}

	.outer-header {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		align-items: center;
		gap: 1rem;
		padding: 0 var(--gutter);
		overflow: hidden;
	}
	.tagline {
		font-size: larger;
		font-family: var(--hed-font);
		font-variation-settings: 'wght' 500;
	}
	.inner-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 3rem 0;
		text-align: center;
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
		padding: 0.2rem 1rem;
		margin: 0;
		position: relative;
		font-size: 1.3rem;
	}
	.subheader-inner a {
		color: inherit;
		text-decoration: none;
	}

	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--accent);
		z-index: 2;
		position: relative;
	}

	.hamburger {
		display: none;
		z-index: 2;
	}

	.show-medium {
		display: none;
	}

	:global(.ati) {
		width: 100%;
		position: absolute;
		top: 50%;
		height: 65px;
	}

	:global(.avaloch) {
		width: 100%;
		height: 100px;
	}

	:global(.ati) {
		animation: ati-slide-up 1s ease-in-out 1s both;
	}

	:global(.avaloch) {
		animation: avaloch-slide-in 1s ease-in-out 1s both;
	}

	@keyframes ati-slide-up {
		from {
			transform: translateY(-50%);
		}
		to {
			transform: translateY(-300%);
		}
	}

	@keyframes avaloch-slide-in {
		from {
			transform: translateY(200%);
		}
		to {
			transform: translateY(0);
		}
	}

	@media (max-width: 1400px) {
		.hamburger {
			display: block;
		}
		.hide-medium {
			display: none;
		}
		.show-medium {
			display: block;
		}
	}

	@media (max-width: 1000px) {
		:global(.avaloch) {
			height: 60px;
		}
	}

	@container (max-width: 500px) {
		.home {
			width: 40vw;
		}
		.outer-header {
			grid-template-columns: 1fr 4fr 1fr;
			gap: 0.5rem;
		}
		.inner-header {
			font-size: 12px;
			padding: 2rem 0;
			gap: 0;
		}
	}
</style>
