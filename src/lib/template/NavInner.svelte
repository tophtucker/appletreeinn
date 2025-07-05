<script>
	import { page } from '$app/stores';
	import { ostrichRoom } from '$lib/index.js';
	import { getNav } from '$lib/nav.js';
	import Banner from './Banner.svelte';
	import OpenSign from '../components/OpenSign.svelte';
	import Events from '../components/Events.svelte';
	const nav = getNav($page);
</script>

{#snippet navSection(n)}
	<div class="section">
		<a href={n.pathname} class={n.active ? 'active' : ''}>{n.title}</a>
		{#if n.children}
			<div>
				{#each n.children as n}
					<a
						href={n.url || n.pathname}
						class={`${n.active ? 'active' : ''} ${n.url ? 'external' : ''}`}>{n.title}</a
					>
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<nav>
	{#each nav.filter((d) => !d.footer) as n}
		{@render navSection(n)}
	{/each}
	<div class="bulletins">
		<Banner />
		<OpenSign data={ostrichRoom} />
		<Events />
	</div>
	<!-- {#each nav.filter((d) => d.footer) as n}
		{@render navSection(n)}
	{/each} -->
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	nav a {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.section > a {
		font-family: watkins;
		font-size: 14px;
	}

	.section div {
		padding-left: 1em;
	}

	.active {
		text-decoration: underline;
		color: black;
	}

	.external::after {
		content: '↗';
		font-size: 12px;
		padding-left: 3px;
	}

	.bulletins {
		border-left: 3px double black;
		padding-left: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 2rem 0 2rem calc(-1rem - 3px);
	}
</style>
