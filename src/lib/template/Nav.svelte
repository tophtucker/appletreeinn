<script>
	import { page } from '$app/stores';
	import { ostrichRoom } from '$lib/index.js';
	import { getNav } from '$lib/nav.js';
	import Banner from './Banner.svelte';
	import OpenSign from '../components/OpenSign.svelte';
	import Events from '../components/Events.svelte';
	import Icon from '../icons/Icon.svelte';
	const nav = getNav($page);
	let { toggleNav } = $props();
</script>

<nav>
	<button onclick={toggleNav}><Icon icon="Close" /></button>
	{#each nav as n}
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
	{/each}
	<hr />
	<Banner />
	<OpenSign data={ostrichRoom} />
	<Events />
</nav>

<style>
	nav {
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

	.section div {
		padding-left: 1em;
		color: #aaa;
		transition: color 0.2s;
	}

	.section:hover div {
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

	button {
		position: fixed;
		right: 1rem;
		top: 1rem;
		width: 2rem;
		height: 2rem;
	}

	@media (max-width: 800px) {
		nav {
			background: white;
			width: 100%;
			position: absolute;
			z-index: 2;
			padding: 2rem;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			overflow: scroll;
		}
	}
</style>
