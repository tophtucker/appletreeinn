<script>
	import { timeMonday, timeDay } from 'd3-time';
	import { formatTimeRange, formatWeekday } from '$lib/index.js';
	let { data, events } = $props();
	// TODO: show overrides
	const { hours, overrides } = data;

	const start = timeMonday.floor(new Date());
	const end = timeMonday.ceil(new Date());
	const days = timeDay.range(start, end);

	const getHoursForDay = (date) => {
		const h = overrides.find((o) => +o[0] === +date) || hours.find((h) => h[0] === date.getDay());
		if (!h) return '—';
		return formatTimeRange(h[1]);
	};

	const getEventsForDay = (date) => {
		console.log('rendering', date, events.data);
		return events?.data.filter((d) => +date === +d.date) ?? [];
	};
</script>

<table class="hours">
	<thead>
		<tr>
			<td colspan="2" style="padding-bottom: 1em;">Hours</td>
			{#if events?.future.length}
				<td style="padding-bottom: 1em; color: var(--brown);">Events this week</td>
			{/if}
		</tr>
	</thead>
	<tbody>
		{#each days as day}
			<tr>
				<td>{formatWeekday(day.getDay())}</td>
				<td>{getHoursForDay(day)}</td>
				{#if events?.future.length}
					<td style="font-style: italic; color: var(--brown); font-size: smaller;">
						{#each getEventsForDay(day) as event}
							{event.description}
							<br />
						{/each}
					</td>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.hours {
		border-collapse: collapse;
	}
	td {
		padding-right: 0.5em;
		vertical-align: top;
	}
	td:nth-child(2) {
		min-width: 5em;
	}
</style>
