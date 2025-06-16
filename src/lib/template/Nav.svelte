<script>
	import { page } from '$app/stores';
	import { ostrichRoom } from '$lib/index.js';
	import { getNav } from '$lib/nav.js';
	import Banner from './Banner.svelte';
	import OpenSign from '../components/OpenSign.svelte';
	const nav = getNav($page);
	// const currentPage = getCurrentPage($page);
</script>

<nav class="main">
	{#each nav as n}
		<div class="section">
			<a href={n.pathname} class={n.active ? 'active' : ''}>{n.title}</a>
			{#if n.children}
				<nav>
					{#each n.children as n}
						<a href={n.url || n.pathname} class={n.active ? 'active' : ''}
							>{n.title}{#if n.url}
								<small>↗</small>{/if}</a
						>
					{/each}
				</nav>
			{/if}
		</div>
	{/each}
	<hr />
	<Banner />
	<OpenSign data={ostrichRoom} />
</nav>

<style>
	.main {
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

	small {
		margin-left: 3px;
		font-size: 12px;
	}
</style>
