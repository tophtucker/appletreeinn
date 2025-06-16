<script>
	import { loadEvents, formatDate } from '$lib/index.js';
	let data = $state(undefined);
	(async function () {
		data = await loadEvents();
	})();
</script>

<div class="wrapper">
	<h6>Live music</h6>
	{#if data === undefined}
		Loading music calendar…
	{:else if data === null}
		See <a href="https://instagram.com/appletreeinn">Instagram</a> for live music updates.
	{:else}
		{#each data.future.slice(0, 1) as { date, description }}
			<span>{formatDate(date)}: {description}</span>
		{/each}
	{/if}
	<div><a href="/ostrich-room#calendar">More →</a></div>
</div>
