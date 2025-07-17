<script>
	import { formatDate } from '$lib/index.js';
	let { nextPerformance } = $props();
</script>

<a href="/live-music">
	<h6>Live music</h6>
	{#if nextPerformance}
		{formatDate(nextPerformance.time)}: {nextPerformance.act.name}.
	{:else}
		See Instagram for updates.
	{/if}
</a>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		color: var(--blue);
	}
</style>
