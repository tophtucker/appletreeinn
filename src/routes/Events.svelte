<script>
	import { loadEvents, formatDate } from '$lib/index.js';
	let data = $state(undefined);
	(async function () {
		data = await loadEvents();
	})();
</script>

<div class="wrapper">
	<span class="events">
		{#if data === undefined}
			Loading music calendar…
		{:else if data === null}
			See <a href="https://instagram.com/appletreeinn">Instagram</a> for live music updates.
		{:else}
			{#each data.slice(0, 5) as { date, description }}
				<span>{formatDate(date)}: {description} • </span>
			{/each}
		{/if}
	</span>
	<a href="/ostrich-room#calendar">Music calendar →</a>
</div>

<style>
	.wrapper {
		display: flex;
		gap: 0.5em;
		padding: 0 var(--gutter) 2em var(--gutter);
	}
	.wrapper a {
		flex-shrink: 0;
	}
	.events span {
		margin-right: 0.25em;
	}

	@media (max-width: 800px) {
		.wrapper {
			display: block;
			flex-direction: column;
		}
	}

	@media (min-width: 801px) {
		.events {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
