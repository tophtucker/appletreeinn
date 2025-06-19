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
		<span
			>{formatDate(data.future[0].date)}: {data.future[0].description}.
			<a href="/ostrich-room#calendar">More →</a></span
		>
	{/if}
</div>
