<script>
	import { page } from '$app/stores';
	import { ostrichRoom } from '$lib/index.js';
	import { getNav } from '$lib/nav.js';
	import Banner from './Banner.svelte';
	import OpenSign from '../components/OpenSign.svelte';
	import Events from '../components/Events.svelte';
	import Icon from '../icons/Icon.svelte';
	const nav = getNav($page);
	// const currentPage = getCurrentPage($page);
</script>

<nav class="main">
	<Icon icon="Door" size="28" />
	{#each nav as n}
		<div class="section">
			<a href={n.pathname} class={n.active ? 'active' : ''}>{n.title}</a>
			{#if n.children}
				<nav>
					{#each n.children as n}
						<a
							href={n.url || n.pathname}
							class={`${n.active ? 'active' : ''} ${n.url ? 'external' : ''}`}>{n.title}</a
						>
					{/each}
				</nav>
			{/if}
		</div>
	{/each}
	<hr />
	<Banner />
	<OpenSign data={ostrichRoom} />
	<Events />
</nav>

<style>
	.main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 200px;
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

	.section nav {
		padding-left: 1em;
		color: #aaa;
		transition: color 0.2s;
	}

	.section:hover nav {
		color: #333;
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
</style>
