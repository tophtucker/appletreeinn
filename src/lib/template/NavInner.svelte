<script>
	import { page } from '$app/stores';
	import { ostrichRoom } from '$lib/index.js';
	import { getNav } from '$lib/nav.js';
	import Banner from './Banner.svelte';
	import OpenSign from '../components/OpenSign.svelte';
	import Events from '../components/Events.svelte';
	import Icon from '../icons/Icon.svelte';
	const nav = getNav($page);

	const mainNav = nav.filter((d) => d.slug !== 'about');
	const aboutNav = nav.find((d) => d.slug === 'about').children;
</script>

{#snippet navSection(n)}
	<div class="section">
		{#if n.active}<div class="active">
				<Icon icon="Asterisk" style="position: absolute; left: -1rem;" />{n.title}
			</div>{:else}<a href={n.pathname} class={n.active ? 'active' : ''}>{n.title}</a>{/if}

		{#if n.children}
			<div class="children">
				{#each n.children as n}
					{#if n.active}<div class="active">
							<Icon icon="Asterisk" style="position: absolute; left: -1rem; top: 5px" />{n.title}
						</div>{:else}<a href={n.url || n.pathname} class={n.active ? 'active' : ''}
							>{n.title}{#if n.url}<Icon icon="External" style="margin-left: 5px" />{/if}</a
						>{/if}
				{/each}
			</div>
		{/if}
	</div>
{/snippet}

<nav>
	{#each mainNav as n}
		{@render navSection(n)}
	{/each}
	<div class="bulletins">
		<Banner />
		<OpenSign data={ostrichRoom} />
		<Events />
	</div>
	<div class="about">
		{#each aboutNav as n, i}
			<a href={n.pathname}>{n.title}</a>{#if i < aboutNav.length - 1}
				{` `}<span class="bullet">•</span>{` `}{/if}
		{/each}
	</div>
</nav>

<style>
	.about a {
		display: inline;
		font-size: smaller;
	}
	.about .bullet {
		font-size: x-small;
	}
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

	.section > a,
	.section > .active {
		font-family: watkins;
		font-size: 14px;
	}

	.active {
		position: relative;
	}

	.section .children a,
	.section .children .active {
		padding-left: 1em;
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
