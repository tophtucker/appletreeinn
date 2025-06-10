<script>
	import { page } from '$app/stores';
	import OpenSign from '$lib/components/OpenSign.svelte';
	import Avaloch from '$lib/icons/Avaloch.svelte';
	import Icon from '$lib/icons/Icon.svelte';
	import { getNav, getCurrentPage } from '$lib/nav.js';
	const nav = getNav($page);
	const currentPage = getCurrentPage($page);
</script>

{#snippet link({ pathname, icon, title, hours, color, active })}
	<a href={pathname} class={`hide-mobile ${active ? 'active' : ''}`} style={`--accent: ${color};`}>
		{#if active}
			<Icon {icon} size="32" fill="var(--accent)" altFill="white" />
		{:else}
			{title}
		{/if}
		{#if hours}
			<OpenSign data={hours} />
		{/if}
	</a>
{/snippet}

<header style={`--accent: ${currentPage?.section.color || 'var(--black)'};`}>
	<div class="inner-header">
		{@render link(nav[0])}
		{@render link(nav[1])}
		<a href="/" class="home">
			<Avaloch />
			<span style="color: var(--black)">A Country Inn.</span>
		</a>
		{@render link(nav[2])}
		{@render link(nav[3])}
	</div>
	{#if currentPage && currentPage.section && currentPage.pathname !== '/'}
		<div class="subheader">
			<div class="subheader-inner">
				<h2>{currentPage.section.title}</h2>
				{#if currentPage.section.children}
					<div class="links">
						{#each currentPage.section.children as { title, pathname, active }}
							<a href={pathname} class={active ? 'active' : ''}>{title}</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</header>

<style>
	.inner-header {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
		gap: 1em;
		font-size: 14px;
		font-family: 'watkins';
		justify-content: space-between;
		align-items: center;
		padding: 3em 2em;
		transform: rotate(-1deg);
	}

	.subheader {
		border-top: 1px solid var(--black);
		border-bottom: 1px solid var(--black);
		padding: 3px;
	}
	.subheader-inner {
		background-color: var(--accent);
		position: relative;
		color: white;
		display: flex;
		padding: 2rem;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		gap: 0.5rem;
	}
	.subheader-inner h2 {
		margin: 0;
	}
	.links {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.links a {
		text-decoration: none;
		color: inherit;
		transition: color 0.3s;
	}
	.links a:hover,
	.links a.active {
		text-decoration: underline;
		color: inherit;
	}

	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		color: var(--accent);
		text-decoration: none;
	}

	.inner-header a:not(.home) {
		text-decoration: none;
		color: inherit;
		text-align: center;
		transition: color 0.3s;
		position: relative;
	}
	.inner-header a:not(.home):hover {
		color: var(--accent);
	}
	.inner-header a.active {
		color: var(--accent);
	}

	@media (max-width: 900px) {
		.hide-mobile {
			display: none;
		}
	}
</style>
