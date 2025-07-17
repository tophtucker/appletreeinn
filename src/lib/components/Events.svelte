<script>
	import { formatDate } from '$lib/index.js';
	let { nextPerformance } = $props();
</script>

<div class="wrapper">
	<h6>Live music</h6>
	{#if !nextPerformance}
		See <a href="https://instagram.com/appletreeinn">Instagram</a> for live music updates.
	{:else}
		<span
			>{formatDate(nextPerformance.time)}: {nextPerformance.act.name}.
			<a href="/live-music">More →</a></span
		>
	{/if}
</div>
